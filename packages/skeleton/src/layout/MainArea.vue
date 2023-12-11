<script setup lang="ts">
import { useSkeletonContextInjector } from '..';

const skeletonContext = useSkeletonContextInjector();
</script>

<template>
  <div class="w-full h-full bg-[#EDEFF3] p-2">
    <template v-for="i in skeletonContext?.areas.mainArea" :key="i.name">
      <component :is="i.content"></component>
    </template>
  </div>
</template>

<style scoped></style>
