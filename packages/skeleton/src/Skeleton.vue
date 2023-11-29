<script setup lang="ts">
import { useSkeletonContextProvider } from '.';
import { SkeletonManager } from './SkeletonManager';
import { Layout } from './layout';
import type { Props } from './types';
import { reactive } from 'vue-demi';

const props = withDefaults(defineProps<Props>(), {
  layout: () => ({}),
  areas: () => ({})
});
console.log('skeleton setup', props);
const context = reactive(new SkeletonManager(props.layout, props.areas));
useSkeletonContextProvider(context);
</script>

<template>
  <Layout></Layout>
</template>

<style scoped></style>
