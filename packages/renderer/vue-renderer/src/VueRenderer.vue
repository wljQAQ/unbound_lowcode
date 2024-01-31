<script setup lang="ts">
import { IPublicPageSchema, Materials, IPublicMaterialsMap } from '@unbound_lowcode/types';
import Material from '../../../naive-ui-materials/dist/naive-ui-materials.es';
import Page from './Page.vue';
import Node from './Node.vue';
import { computed, defineAsyncComponent, reactive, shallowRef, Suspense, watch } from 'vue-demi';
import { NODE_DATATYPE_ID } from '@unbound_lowcode/constants';

interface Props {
  schema: IPublicPageSchema;
  materialMap: IPublicMaterialsMap | null;
}
const materialMap2 = Material.componentsMap;

const props = defineProps<Props>();
watch(
  () => props.schema,
  () => {
    console.log('vuerender watch schema ');
  },
  { deep: true }
);

const schema2 = computed(() => {
  console.log('schema2 dadasd ', window.schema);
  return window.schema;
});

const schemaA = window.schema;

watch(
  () => window.schema,
  () => {
    console.log('vuerender watch schema ');
  },
  { deep: true }
);

console.log('vuerender renderer');

const s = shallowRef({ a: 1 });
</script>

<template>
  <!-- <Page v-if="materialMap" class="w-full h-full" :[NODE_DATATYPE_ID]="schema.id">
    <template v-if="schema?.children?.length" v-for="node in schema?.children" :key="node.id">
      <Node :node="node" :component="materialMap2[node.componentName]" :[NODE_DATATYPE_ID]="node.id"></Node>
    </template>

  </Page> -->
  <Page v-if="materialMap" class="w-full h-full" :[NODE_DATATYPE_ID]="schemaA?.id">
    <template v-if="schemaA?.children?.length" v-for="node in schemaA.children" :key="node.id">
      <Node :node="node" :component="materialMap2[node.componentName]" :[NODE_DATATYPE_ID]="node.id"></Node>
    </template>
  </Page>
</template>

<style scoped></style>
