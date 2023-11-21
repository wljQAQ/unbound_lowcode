<script setup lang="ts" name="design">
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutSider,
  NLayoutFooter,
  NButton,
  NSpace,
  NTooltip
} from 'naive-ui';
import DesignContainer from './DesignContainer.vue';
import { shallowRef } from 'vue';
import { useDrag, useDrop } from '@unbound_lowcode/shared';

const dragRef = shallowRef(null);
const dropRef = shallowRef(null);

useDrag(dragRef);
useDrop(dropRef);
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
    <n-layout has-sider>
      <!-- 左侧功能区 -->
      <n-layout-sider class="text-center" width="48" bordered>
        <n-space vertical :wrap-item="false">
          <n-tooltip placement="right" :x="0">
            <template #trigger>
              <n-button ref="dragRef" class="w-full" text>
                <span class="i-mdi-github" />
              </n-button>
            </template>
            github
          </n-tooltip>
        </n-space>
      </n-layout-sider>
      <n-layout>
        <!-- 画布区 -->
        <n-layout-content>
          <design-container ref="dropRef"></design-container>
        </n-layout-content>
        <!-- <n-layout-sider></n-layout-sider> -->
        <!-- <n-layout-footer></n-layout-footer> -->
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
