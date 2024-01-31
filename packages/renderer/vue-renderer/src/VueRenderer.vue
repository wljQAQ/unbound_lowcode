<script setup lang="tsx">
import { IPublicPageSchema, Materials, IPublicMaterialsMap } from '@unbound_lowcode/types';
import Material from '../../../naive-ui-materials/dist/naive-ui-materials.es';
import Page from './Page.vue';
import Node from './Node.vue';
import { computed, defineAsyncComponent, defineComponent, reactive, shallowRef, Suspense, watch } from 'vue-demi';
import { NODE_DATATYPE_ID } from '@unbound_lowcode/constants';

interface Props {
  schema: IPublicPageSchema;
  materialMap: IPublicMaterialsMap | null;
}
const materialMap2 = Material.componentsMap;

const props = defineProps<Props>();
console.log(props.schema,12312);
watch(
  () => props.schema,
  val => {
    console.log(val, 'render schema');
  },
  { deep: true }
);
</script>

<template>
  <Page v-if="materialMap" class="w-full h-full" :[NODE_DATATYPE_ID]="schema.id">
    <template v-if="schema?.children?.length" v-for="node in schema?.children" :key="node.id">
      <Node :node="node" :component="materialMap2[node.componentName]" :[NODE_DATATYPE_ID]="node.id"></Node>
    </template>
  </Page>
</template>

<style scoped></style>
