<script setup lang="ts">
import { IPublicNodeSchema } from '@unbound_lowcode/types';
import type { Component } from 'vue-demi';
import { defineAsyncComponent } from 'vue-demi';
import { useEngineContext } from '@unbound_lowcode/shared';

interface Props {
  node: IPublicNodeSchema;
  component: () => Promise<Component>;
}

const props = defineProps<Props>();

const engineCtx = useEngineContext();

engineCtx.node.addNodeMap(props.node, props.node);

console.log(props, 'node component');

const NodeComponent = defineAsyncComponent(props.component);
</script>

<template>
  <NodeComponent v-bind="node.props"></NodeComponent>
</template>

<style scoped></style>
