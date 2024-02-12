<script setup lang="tsx">
import { IPublicPageSchema, IPublicMaterialsMap } from '@unbound_lowcode/types';
import Material from '../../../naive-ui-materials/dist/naive-ui-materials.es';
import Page from './Page.vue';
import Node from './Node.vue';
import { NODE_DATATYPE_ID } from '@unbound_lowcode/constants';

interface Props {
  schema: IPublicPageSchema;
  materialMap: IPublicMaterialsMap | null;
}
const materialMap2 = Material.componentsMap;

defineProps<Props>();
</script>

<template>
  <Page class="w-full h-full" :[NODE_DATATYPE_ID]="schema.id" :schema="schema">
    <template v-if="schema?.children?.length" v-for="node in schema?.children" :key="node.id">
      <Node :node="node" :component="materialMap2[node.componentName]" :[NODE_DATATYPE_ID]="node.id" :parent="schema"></Node>
    </template>
  </Page>
</template>

<style scoped></style>
