<script setup lang="ts">
import { useSkeletonContextInjector } from '..';
import { NScrollbar } from 'naive-ui';
import { ref } from 'vue-demi';

const skeletonContext = useSkeletonContextInjector();

const isFixed = ref(Boolean(skeletonContext?.currentLeftPane.value?.props?.fix));
</script>

<template>
  <div
    v-if="skeletonContext?.currentLeftPane.value?.area"
    :style="{ left: `${skeletonContext?.layout.leftArea?.props?.width || 48}px`, position: isFixed ? 'static' : 'absolute' }"
    class="top-0 flex flex-col z-1 bg-white py-2 h-full"
  >
    <div class="flex-between px-2">
      <span class="font-bold text-4.5">标题</span>
      <div>
        <span
          v-if="isFixed"
          @click="
            isFixed = !isFixed;
            skeletonContext.changeCurrentLeftPaneFixed();
          "
          class="inline-block i-mdi:eyedropper text-2"
        />
        <span
          v-else
          @click="
            isFixed = !isFixed;
            skeletonContext.changeCurrentLeftPaneFixed();
          "
          class="inline-block cursor-pointer i-mdi:eyedropper-off text-2"
        />
        <span
          class="ml-1 inline-block cursor-pointer i-mdi:close text-2"
          @click="skeletonContext && skeletonContext.setCurrentLeftPane(null)"
        />
      </div>
    </div>

    <!-- 插件内容 -->
    <n-scrollbar class="flex-auto">
      <component :is="skeletonContext?.currentLeftPane.value?.content"></component>
    </n-scrollbar>
  </div>
</template>

<style scoped></style>
