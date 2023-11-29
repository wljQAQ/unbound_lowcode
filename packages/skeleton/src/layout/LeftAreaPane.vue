<script setup lang="ts">
import { AreasBaseConfig, useSkeletonContextInjector } from '..';
import { onClickOutside } from '@vueuse/core';
import { shallowRef } from 'vue-demi';

const paneRef = shallowRef(null);

const skeletonContext = useSkeletonContextInjector();

onClickOutside(paneRef, () => {
  skeletonContext!.currentLeftPane = null;
});
</script>

<template>
  <div
    ref="paneRef"
    v-if="skeletonContext?.currentLeftPane?.area"
    class="absolute top-0 left-10 z-1"
  >
    111
  </div>
</template>

<style scoped></style>
