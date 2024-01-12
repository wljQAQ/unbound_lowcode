<script setup lang="ts" name="design">
import { NLayoutSider, NButton, NTooltip, NSpace } from 'naive-ui';
import { AreasBaseConfig } from '@unbound_lowcode/types';
import { useSkeletonContextInjector } from '..';

const skeletonContext = useSkeletonContextInjector();
console.log(skeletonContext);
</script>

<template>
  <n-layout-sider class="text-center" v-bind="skeletonContext?.layout.rightArea?.props">
    111
  </n-layout-sider>
</template>
