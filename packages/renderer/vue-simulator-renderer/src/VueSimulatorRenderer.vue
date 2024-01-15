<script setup lang="ts">
import 'virtual:uno.css';
import { IPublicPageSchema, SimulatorRenderer, IPublicMaterialsMap } from '@unbound_lowcode/types';
import { VueRenderer } from '@unbound_lowcode/vue-renderer';
import { shallowRef } from 'vue-demi';
import { NODE_DATATYPE_ID } from '@unbound_lowcode/constants';

interface Props {
  schema: IPublicPageSchema | null;
  materialsMap: IPublicMaterialsMap | null;
}

const props = defineProps<Props>();

const dropRef = shallowRef(null);

console.log(props, 'si');

function getNodeDom(dom: HTMLElement): HTMLElement {
  return dom.closest(`[${NODE_DATATYPE_ID}]`) || dom;
}

function onMousemove(e: MouseEvent) {
  console.log(getNodeDom(e.target as HTMLElement));
}
</script>

<template>
  <div class="w-full h-full" ref="dropRef">
    <VueRenderer :schema="schema" :materialMap="materialsMap" @click="onMousemove" />
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
