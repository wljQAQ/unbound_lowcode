<script setup lang="tsx">
import { IPublicPageSchema, Materials } from '@unbound_lowcode/types';
import Page from './Page.vue';
import Node from './Node.vue';
interface Props {
  schema: IPublicPageSchema;
  materialMap: Record<string, Materials>;
}

const props = defineProps<Props>();


console.log(props, 'props');
</script>

<template>
  <Page class="w-full h-full">
    <template v-if="schema.children.length" v-for="node in schema.children" :key="node.id">
      <Node :node="node" :component="materialMap[node.packageName].componentsMap[node.componentName]"></Node>
    </template>
    <!-- <template v-else> 暂无组件 </template> -->
  </Page>
</template>

<style scoped></style>
