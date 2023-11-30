<script setup lang="ts">
import { useSkeletonContextProvider } from '.';
import { useSkeletonManager } from './useSkeletonManager';
import { Layout } from './layout';
import type { Props } from './types';
import { DEFAULT_LAYOUT_PROP } from './constant';

const props = withDefaults(defineProps<Props>(), {
  layout: () => DEFAULT_LAYOUT_PROP,
  areas: () => ({})
});

const context = useSkeletonManager(props.layout, props.areas);
useSkeletonContextProvider(context);
</script>

<template>
  <Layout></Layout>
</template>
