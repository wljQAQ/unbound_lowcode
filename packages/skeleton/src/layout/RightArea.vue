<script setup lang="ts" name="design">
import { NLayoutSider, NButton, NTooltip, NSpace } from 'naive-ui';
import { AreasBaseConfig } from '@unbound_lowcode/types';
import { useSkeletonContextInjector } from '..';

const skeletonContext = useSkeletonContextInjector();
</script>

<template>
  <n-layout-sider class="text-center" v-bind="skeletonContext?.layout.rightArea?.props">
    <template v-for="i in skeletonContext.areas.rightArea">
      <component :is="i.content" v-bind="i.props"></component>
    </template>
  </n-layout-sider>
</template>
