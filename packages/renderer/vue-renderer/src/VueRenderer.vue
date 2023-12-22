<script setup lang="tsx">
import { IPublicPageSchema, Materials } from '@unbound_lowcode/types';
import Material from '../../../naive-ui-materials/dist/naive-ui-materials.es';
import Page from './Page.vue';
import Node from './Node.vue';
import { defineAsyncComponent } from 'vue-demi';

interface Props {
  schema: IPublicPageSchema;
  materialMap: Record<string, Materials>;
}

// const materialMap2 = Material.componentsMap;

const props = defineProps<Props>();

console.log(props, 'VUE REANDER 组件渲染', Material, window.document);

const Btn = Material.componentsMap.NButton;
const Button1 = defineAsyncComponent(Btn);
</script>

<template>
  <Page class="w-full h-full">
    <template v-if="schema?.children?.length" v-for="node in schema.children" :key="node.id">
      <Node :node="node" :component="materialMap[node.packageName].componentsMap[node.componentName]"></Node>
      <!-- <Node :node="node" :component="materialMap[node.packageName].componentsMap[node.componentName]"></Node> -->
    </template>
    <Button1></Button1>
    <!-- <template v-else> 暂无组件 </template> -->
  </Page>
</template>

<style scoped></style>
