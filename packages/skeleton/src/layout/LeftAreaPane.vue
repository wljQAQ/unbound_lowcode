<script setup lang="ts">
import { useSkeletonContextInjector } from '..';
import { shallowRef } from 'vue-demi';
import { NScrollbar } from 'naive-ui';

const paneRef = shallowRef(null);

const skeletonContext = useSkeletonContextInjector();
</script>

<template>
  <div
    v-if="skeletonContext?.currentLeftPane.value?.area"
    ref="paneRef"
    :style="{ left: `${skeletonContext?.layout.leftArea?.props?.width || 48}px` }"
    class="absolute top-0 flex flex-col z-1 bg-white py-2 h-full"
  >
    <div class="flex-between px-2">
      <span class="font-bold text-4.5">标题</span>
      <div>
        <span v-if="skeletonContext?.currentLeftPane.value?.props?.fix" class="inline-block i-mdi:eyedropper text-2" />
        <span v-else class="inline-block i-mdi:eyedropper-off text-2" />
        <span class="inline-block i-mdi:close text-2" />
      </div>
    </div>

    <!-- 插件内容 -->
    <n-scrollbar class="flex-auto">
      <component :is="skeletonContext?.currentLeftPane.value?.content"></component>
    </n-scrollbar>
  </div>
</template>

<style scoped></style>
