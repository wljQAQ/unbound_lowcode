<script setup lang="ts">
import { IPublicNodeSchema, IPublicPageSchema } from '@unbound_lowcode/types';
import type { Component } from 'vue-demi';
import { defineAsyncComponent, defineOptions } from 'vue-demi';
import { useEngineContext } from '@unbound_lowcode/shared';
import { NODE_DATATYPE_ID } from '@unbound_lowcode/constants';
import Material from '../../../naive-ui-materials/dist/naive-ui-materials.es';

const materialMap2 = Material.componentsMap;

defineOptions({
  name: 'Node'
});

interface Props {
  node: IPublicNodeSchema;
  parent: IPublicNodeSchema | IPublicPageSchema;
  component: () => Promise<Component>;
}

const props = defineProps<Props>();

const engineCtx = useEngineContext();

engineCtx.node.addNodeMap(props.node, props.parent);

const NodeComponent = defineAsyncComponent(props.component);
</script>

<template>
  <NodeComponent v-bind="node.props" :data="node.props">
    <template v-if="node.children?.length" v-for="i in node.children" :key="i.id">
      <Node :node="i" :component="materialMap2[i.componentName]" :[NODE_DATATYPE_ID]="i.id" :parent="node"></Node>
    </template>
  </NodeComponent>
</template>

<style scoped></style>
