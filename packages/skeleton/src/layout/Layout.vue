<script setup lang="ts" name="design">
import LeftSider from './LeftSider.vue';
import LeftSiderPane from './LeftSiderPane.vue';
import { NLayout, NLayoutHeader, NLayoutContent, NButton, NSpace } from 'naive-ui';
</script>

<template>
  <n-layout class="h-full">
    <!-- 头部 -->
    <n-layout-header class="flex-between h-10" bordered>
      <n-space :wrap-item="false">header </n-space>
      <n-space :wrap-item="false"> </n-space>
    </n-layout-header>

    <n-layout class="relative" has-sider>
      <left-sider></left-sider>
      <left-sider-pane></left-sider-pane>

      <n-layout>
        <n-layout-content>content </n-layout-content>
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
