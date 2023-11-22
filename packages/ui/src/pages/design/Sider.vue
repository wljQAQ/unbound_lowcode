<script setup lang="ts">
import { NButton, NSpace, NTooltip } from 'naive-ui';
import { useDrag } from '@unbound_lowcode/shared';
import { shallowRef } from 'vue-demi';

const dragRef = shallowRef(null);

useDrag({ el: dragRef, item: [{ 1: 1 }] });
</script>

<template>
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
</template>

<style scoped></style>
