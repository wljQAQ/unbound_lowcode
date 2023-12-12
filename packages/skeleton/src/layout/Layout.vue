<script setup lang="ts" name="design">
import { useSkeletonContextInjector } from '..';
import { LeftArea, LeftAreaPane, MainArea } from '.';
import { onClickOutside } from '@vueuse/core';
import { NLayout, NLayoutHeader, NLayoutContent, NSpace } from 'naive-ui';
import { shallowRef } from 'vue-demi';

const skeletonContext = useSkeletonContextInjector();

const leftAreaRef = shallowRef(null);

onClickOutside(leftAreaRef, () => {
  if (!skeletonContext || skeletonContext.currentLeftPane.value?.props?.fix) return;
  skeletonContext.setCurrentLeftPane(null);
});
</script>

<template>
  <n-layout class="h-full">
    <!-- 头部 -->
    <n-layout-header class="flex-between h-10" bordered>
      <n-space :wrap-item="false">header </n-space>
      <n-space :wrap-item="false"> </n-space>
    </n-layout-header>

    <n-layout class="relative" has-sider>
      <div class="flex" ref="leftAreaRef">
        <left-area />
        <left-area-pane />
      </div>

      <n-layout>
        <n-layout-content>
          <MainArea />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<style scoped>
:deep(.n-layout-scroll-container) {
  display: flex;
  flex-direction: column;
}
</style>
