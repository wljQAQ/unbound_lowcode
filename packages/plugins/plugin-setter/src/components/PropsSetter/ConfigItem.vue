<script setup lang="ts">
import { NGrid, NGi } from 'naive-ui';

const props = defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <n-grid class="px-12px py-5px">
    <n-gi :span="6" class="pt-5px text-12px">{{ title }}</n-gi>
    <n-gi :span="18"><slot></slot></n-gi>
  </n-grid>
</template>

<style scoped></style>
