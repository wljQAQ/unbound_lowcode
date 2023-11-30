<script setup lang="ts" name="design">
import { NLayoutSider, NButton, NTooltip, NSpace } from 'naive-ui';
import { AreasBaseConfig, useSkeletonContextInjector } from '..';

const skeletonContext = useSkeletonContextInjector();

function onClick(area: AreasBaseConfig) {
  skeletonContext && (skeletonContext.currentLeftPane.value = area);
}
</script>

<template>
  <n-layout-sider class="text-center">
    <n-space class="pt-2" vertical>
      <template v-for="area in skeletonContext?.areas.leftArea">
        <n-tooltip placement="right">
          <template #trigger>
            <n-button quaternary circle @click="onClick(area)">
              <component :is="area.props?.icon"></component>
            </n-button>
          </template>
          {{ area.props?.description }}
        </n-tooltip>
      </template>
    </n-space>
  </n-layout-sider>
</template>
