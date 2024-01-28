<script setup lang="ts">
import { IPublicNodeSchema } from '@unbound_lowcode/types';
import type { Component } from 'vue-demi';
import { defineAsyncComponent, watch } from 'vue-demi';
import { useEngineContext } from '@unbound_lowcode/shared';

interface Props {
  node: IPublicNodeSchema;
  component: () => Promise<Component>;
}

const props = defineProps<Props>();

const engineCtx = useEngineContext();

engineCtx.node.addNodeMap(props.node, props.node);

console.log(props, 'node component');

watch(
  () => props.node,
  a => {
    console.log('node change', a);
  },
  { deep: true, immediate: true }
);

const NodeComponent = defineAsyncComponent(props.component);
</script>

<template>
  <NodeComponent v-bind="node.props" :data="node.props"></NodeComponent>
</template>

<style scoped></style>
