<script setup lang="tsx">
import { IPublicPageSchema, Materials, IPublicMaterialsMap } from '@unbound_lowcode/types';
import Material from '../../../naive-ui-materials/dist/naive-ui-materials.es';
import Page from './Page.vue';
import Node from './Node.vue';
import { computed, defineAsyncComponent, reactive, Suspense, watch } from 'vue-demi';
import { NODE_DATATYPE_ID } from '@unbound_lowcode/constants';

interface Props {
  schema: IPublicPageSchema | null;
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
  console.log('schema2 dadasd ', props.schema);
  return props.schema;
});

console.log('vuerender renderer');
</script>

<template>
  {{ schema }}
  <Page v-if="materialMap" class="w-full h-full" :[NODE_DATATYPE_ID]="schema.value?.id">
    <template v-if="schema.value?.children?.length" v-for="node in schema.value.children" :key="node.id">
      <Node :node="node" :component="materialMap2[node.componentName]" :[NODE_DATATYPE_ID]="node.id"></Node>
    </template>
  </Page>
  <!-- <Page v-if="materialMap" class="w-full h-full" :[NODE_DATATYPE_ID]="schema2?.id">
    <template v-if="schema2?.children?.length" v-for="node in schema2.children" :key="node.id">
      <Node :node="node" :component="materialMap2[node.componentName]" :[NODE_DATATYPE_ID]="node.id"></Node>
    </template>
  </Page> -->
</template>

<style scoped></style>
