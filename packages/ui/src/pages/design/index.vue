<script setup lang="ts" name="design">
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutSider,
  NButton,
  NSpace
} from 'naive-ui';

import DesignContainer from './DesignContainer.vue';
import Sider from './Sider.vue';
import { DndProvider } from '@unbound_lowcode/shared';
</script>

<template>
  <n-layout class="h-full">
    <!-- 头部 -->
    <n-layout-header class="flex-between h-10" bordered>
      <n-space :wrap-item="false">
        <n-button text>
          <a
            class="i-mdi-github"
            href="https://github.com/wljQAQ/unbound_lowcode"
            target="_blank"
          />
        </n-button>
      </n-space>
      <n-space :wrap-item="false">
        <n-button text>
          <a
            class="i-mdi-github"
            href="https://github.com/wljQAQ/unbound_lowcode"
            target="_blank"
          />
        </n-button>
      </n-space>
    </n-layout-header>
    <DndProvider>
      <n-layout has-sider>
        <!-- 左侧功能区 -->
        <n-layout-sider class="text-center" width="48" bordered>
          <Sider></Sider>
        </n-layout-sider>
        <n-layout>
          <!-- 画布区 -->
          <n-layout-content>
            <design-container></design-container>
          </n-layout-content>
          <!-- <n-layout-sider></n-layout-sider> -->
          <!-- <n-layout-footer></n-layout-footer> -->
        </n-layout>
      </n-layout>
    </DndProvider>
  </n-layout>
</template>

<style scoped>
:deep(.n-layout-scroll-container) {
  display: flex;
  flex-direction: column;
}
</style>
