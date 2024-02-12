<script setup lang="ts">
import 'virtual:uno.css';
import { IPublicNodeSchema } from '@unbound_lowcode/types';
import { VueRenderer } from '@unbound_lowcode/vue-renderer';
import { onMounted, ref, shallowRef } from 'vue';
import { MATERIAL_DESIGN_DND_TYPE } from '@unbound_lowcode/constants';
import { useEngineContext, useDrop } from '@unbound_lowcode/shared';
import { simulatorRenderer, useSimulatorSupport } from './Simulator';

const engineCtx = useEngineContext();

const schema = ref(JSON.parse(JSON.stringify(engineCtx.page.schema)));

const rendererRef = shallowRef(null);

const { selectLine, supportLine, selectNode, drop, dragover } = useSimulatorSupport(engineCtx);

function onClickRenderer(e: MouseEvent) {
  const { node } = engineCtx;
  // getMousePosition(e);
  //首先要拿到最近的那个dom 和他的节点
  const closestNodeDom = node.getClosestNodeDomByDom(e.target as HTMLElement);
  const closestNode = node.getNodeByDom(e.target as HTMLElement)?.node as IPublicNodeSchema;

  if (!closestNode || !closestNodeDom) return;
  selectNode({ node: closestNode });
}

useDrop(
  {
    el: rendererRef,
    accept: MATERIAL_DESIGN_DND_TYPE,
    drop,
    dragover
  },
  engineCtx.dnd
);

onMounted(() => {
  window.dispatchEvent(
    new CustomEvent('simulatorMounted', {
      detail: {
        schema,
        supportLine,
        ...simulatorRenderer
      }
    })
  );
});
</script>

<template>
  <div class="w-full h-full relative p-2">
    <VueRenderer ref="rendererRef" :schema="schema" :materialMap="{}" @click="onClickRenderer" />

    <!-- 拖拽时的辅助线 -->
    <div
      v-if="supportLine.visible"
      class="simulator-support"
      :style="{
        transform: `translate3d(${supportLine.x}px,${supportLine.y}px,0px)`,
        width: supportLine.w + 'px',
        height: supportLine.h + 'px',
        background: supportLine.type === 'in' ? '#8dbeffad' : '#1e80ff'
      }"
    ></div>
    <!-- 选中的线 -->
    <div
      v-if="selectLine.w"
      class="simulator-select"
      :style="{
        transform: `translate3d(${selectLine.x}px,${selectLine.y}px,0px)`,
        width: selectLine.w + 'px',
        height: selectLine.h + 'px'
      }"
    ></div>
  </div>
</template>

<style scoped>
.simulator-support {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #1e80ff;
  pointer-events: none;
  will-change: transform, width, height;
  z-index: 2;
}

.simulator-select {
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid #1e80ff;
  pointer-events: none;
  will-change: transform, width, height;
  z-index: 2;
}
</style>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
  width: 100%;
}

body {
  height: 100%;
  width: 100%;
}

#simulator {
  height: 100%;
  width: 100%;
}
</style>
