import { NodeModel, IPublicNodeSchema, MaterialModel, MaterialItem, NodeMapItem } from '@unbound_lowcode/types';
import { NODE_DATATYPE_ID } from '@unbound_lowcode/constants';
import { generateUId } from '@unbound_lowcode/shared';
import { shallowRef } from 'vue';

//节点模型，方便进行节点的操作，
export function useNodeModel(material: MaterialModel): NodeModel {
  const currentNode = shallowRef<IPublicNodeSchema | null>(null);

  return {
    nodeMap: {},
    currentNode,
    //当前正在操作的node
    createNode(materialSchema) {
      if (!materialSchema.componentName || !materialSchema.packageName) return null;
      return {
        id: 'Node_' + generateUId(),
        ...materialSchema
      } as IPublicNodeSchema;
    },
    setCurrentNode(node) {
      if (typeof node === 'string') {
        const item = this.nodeMap[node];
        item.node && (currentNode.value = item.node);
        return;
      }

      currentNode.value = node;
    },
    //拿到节点的描述对象
    getNodeMeta(node) {
      return material.getMetaByNameAndPkg(node || currentNode.value || {});
    },
    //拿到节点的配置对象
    getNodeSetter(node) {
      return material.getSetterByNameAndPkg(node || currentNode.value || {});
    },
    addNodeMap(node, parent) {
      this.nodeMap[node.id] = {
        node,
        parent
      };
    },
    getNodeMapItem(id) {
      if (id) return this.nodeMap[id];
      else return this.nodeMap[currentNode.value?.id || ''];
    },
    updateNode(id, nextNode) {
      const preNode = this.nodeMap[id].node;
      if (!preNode) return;
      Object.assign(preNode.props, nextNode.props);
    },
    getClosestNodeDomByDom(dom) {
      return dom.closest(`[${NODE_DATATYPE_ID}]`);
    },
    getNodeIdByDom(el) {
      const dom = this.getClosestNodeDomByDom(el);
      if (!dom) return;
      return dom.dataset[NODE_DATATYPE_ID.split('-')[1]];
    },
    getNodeByDom(dom) {
      const id = this.getNodeIdByDom(dom);
      if (!id) return;
      return this.nodeMap[id];
    },
    isPageNode(node) {
      return node.componentName === 'Page';
    }
  };
}
