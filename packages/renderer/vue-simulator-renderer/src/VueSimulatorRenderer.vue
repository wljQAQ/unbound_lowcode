<script setup lang="ts">
import 'virtual:uno.css';
import { IPublicPageSchema, SimulatorRenderer, IPublicMaterialsMap, NodeMapItem } from '@unbound_lowcode/types';
import { VueRenderer } from '@unbound_lowcode/vue-renderer';
import { ShallowRef, computed, shallowRef, triggerRef } from 'vue';
import { NODE_DATATYPE_ID } from '@unbound_lowcode/constants';
import { useEngineContext } from '@unbound_lowcode/shared';

const engineCtx = useEngineContext();

const dropRef = shallowRef(null);

function getNodeDom(dom: HTMLElement): HTMLElement | null {
  return dom.closest(`[${NODE_DATATYPE_ID}]`);
}

function getNodeIdByDom(el: HTMLElement): string | void {
  const dom = getNodeDom(el);
  if (!dom) return;
  return dom.dataset[NODE_DATATYPE_ID.split('-')[1]];
}

function getNodeMapItemByDom(dom: HTMLElement): NodeMapItem | void {
  const id = getNodeIdByDom(dom);
  if (!id) return;
  return engineCtx.node.nodeMap[id];
}

function onMousemove(e: MouseEvent) {
  const nodeId = getNodeIdByDom(e.target as HTMLElement);
  if (!nodeId) return;
  engineCtx.node.setCurrentNode(nodeId);
}

const schema = engineCtx.page.schema;
const materialMap = engineCtx.material.materialsMap;

window.updateSchema = _schema => {
  console.log(111);
  triggerRef(schema);
};
</script>

<template>
  <div class="w-full h-full" ref="dropRef">
    <VueRenderer :schema="schema" :materialMap="materialMap" @click="onMousemove" />
  </div>
</template>

<style scoped></style>

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

#app {
  height: 100%;
  width: 100%;
}
</style>
