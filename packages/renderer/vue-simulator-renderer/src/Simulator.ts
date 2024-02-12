import { createApp, shallowRef, shallowReactive } from 'vue-demi';
import { default as VueSimulatorRenderer } from './VueSimulatorRenderer.vue';
import { Engine, SimulatorRenderer, IPublicNodeSchema, MaterialItem } from '@unbound_lowcode/types';
import { engineContextSymbol } from '@unbound_lowcode/constants';
import { NODE_DATATYPE_ID } from '@unbound_lowcode/constants';
import { DndManager } from '@unbound_lowcode/shared/src/useDnD/types';

function createSimulatorRenderer(): SimulatorRenderer {
  let app: SimulatorRenderer['app'] = shallowRef(null);
  const container: HTMLElement = document.createElement('div');
  container.id = 'simulator';

  function run(ctx: Engine) {
    document.body.appendChild(container);
    mount(ctx);
  }

  function mount(ctx: Engine) {
    const vueIns = createApp(VueSimulatorRenderer);
    vueIns.provide(engineContextSymbol, ctx);
    vueIns.mount(container);

    app.value = vueIns;
  }

  function unmount() {
    app.value && app.value.unmount();
    document.body.removeChild(container);
  }

  return {
    app,
    run,
    mount,
    unmount
  };
}

export const simulatorRenderer = createSimulatorRenderer();

interface SupportLine {
  visible: boolean;
  node: IPublicNodeSchema | null;
  x: number;
  y: number;
  h: number;
  w: number;
  type: 'left' | 'right' | 'top' | 'bottom' | 'in' | '';
}

export function useSimulatorSupport(engineCtx: Engine) {
  const supportLine = shallowReactive<SupportLine>({
    visible: false,
    node: null,
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    type: ''
  });

  const selectLine = shallowReactive({
    x: 0,
    y: 0,
    w: 0,
    h: 0
  });

  function selectNode({ node, nodeRect }: { node: IPublicNodeSchema; nodeRect?: DOMRect }) {
    if (!node) return;
    let rect = nodeRect as DOMRect;
    if (!rect) rect = document.querySelector(`[${NODE_DATATYPE_ID}="${node.id}"]`)?.getBoundingClientRect()!;

    selectLine.h = rect.height;
    selectLine.w = rect.width;
    selectLine.x = rect.x;
    selectLine.y = rect.y;

    engineCtx.node.setCurrentNode(node);
  }

  function setSupportLine({
    offsetX,
    offsetY,
    node,
    nodeRect,
    isContainer
  }: {
    offsetX: number;
    offsetY: number;
    node: IPublicNodeSchema;
    nodeRect?: DOMRect;
    isContainer: boolean | undefined;
  }) {
    if (!node) return;
    let rect = nodeRect;
    const safeDistance = 6;
    const lineLength = 3;
    if (!rect) rect = document.querySelector(`[${NODE_DATATYPE_ID}="${node.id}"]`)?.getBoundingClientRect();

    supportLine.visible = true;
    supportLine.node = node;

    const { x, y, width, height } = rect as DOMRect;

    const offsetBottom = height - offsetY;
    const offsetRight = width - offsetX;
    //接着就是要判断要显示在上下左右哪一边，也有可能在容器内
    //容器内
    if (
      isContainer &&
      !node.children?.length &&
      offsetY >= safeDistance &&
      offsetBottom >= safeDistance &&
      offsetX >= safeDistance &&
      offsetRight >= safeDistance
    ) {
      supportLine.h = height;
      supportLine.w = width;
      supportLine.x = x;
      supportLine.y = y;
      supportLine.type = 'in';
      return;
    }

    //上
    if (offsetY <= safeDistance) {
      supportLine.x = x;
      supportLine.y = y - lineLength;
      supportLine.h = lineLength;
      supportLine.w = width;
      supportLine.type = 'top';
      return;
    }

    //下
    if (offsetBottom <= safeDistance) {
      supportLine.x = x;
      supportLine.y = y + height;
      supportLine.h = lineLength;
      supportLine.w = width;
      supportLine.type = 'bottom';
      return;
    }

    //左
    if (offsetX <= width / 2) {
      supportLine.x = x - lineLength;
      supportLine.y = y;
      supportLine.w = lineLength;
      supportLine.h = height;
      supportLine.type = 'left';
      return;
    }

    //右
    if (offsetRight <= width / 2) {
      supportLine.x = x + width;
      supportLine.y = y;
      supportLine.w = lineLength;
      supportLine.h = height;
      supportLine.type = 'right';
      return;
    }
  }

  function drop(e: MouseEvent, ctx: DndManager) {
    const { node: targetNode, type } = supportLine;
    supportLine.visible = false;

    const dndItem = ctx.getItem<MaterialItem>();

    if (!targetNode || !type) return;
    const item = JSON.parse(JSON.stringify(engineCtx.node.createNode(dndItem.schema)));
    if (type === 'in') {
      targetNode.children = [item];
      return;
    }
    //从nodeMap中拿到这个节点  ,  接着找到他在他父元素的索引
    const { node, parent } = engineCtx.node.getNodeMapItem(targetNode.id)!;
    const index = parent?.children?.findIndex(i => i.id === node.id) || -1;

    if (type === 'left' || type === 'top') {
      parent?.children?.splice(index, 0, item);
      return;
    }
    if (type === 'right' || type === 'bottom') {
      parent?.children?.splice(index + 1, 0, item);
      return;
    }
  }

  function dragover(e: MouseEvent) {
    const { node } = engineCtx;
    // getMousePosition(e);
    //首先要拿到最近的那个dom 和他的节点
    const closestNodeDom = node.getClosestNodeDomByDom(e.target as HTMLElement);
    const closestNode = node.getNodeByDom(e.target as HTMLElement)?.node as IPublicNodeSchema;

    if (!closestNode || !closestNodeDom) return;
    const isPageNode = node.isPageNode(closestNode);
    const isContainer = node.getNodeMeta(closestNode)?.isContainer || isPageNode;

    //判断当前悬浮的节点 是不是 容器节点
    //如果是容器节点那么 就判断是否有children，如果没有就直接push，如果有就默认取最后一个
    const { offsetX, offsetY } = e;
    const rect = closestNodeDom.getBoundingClientRect();
    if (isContainer && closestNode.children?.length) {
      //如果有子元素 就先以最后一个为准
      //TODO：需要优化 这样体验不怎么好
      setSupportLine({ offsetX, offsetY, node: closestNode.children[closestNode.children.length - 1], isContainer });
      return;
    }

    setSupportLine({ offsetX, offsetY, node: closestNode, isContainer, nodeRect: rect });
  }

  return { selectLine, selectNode, supportLine, drop, dragover };
}
