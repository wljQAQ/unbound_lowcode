<script setup lang="ts">
import { NGrid, NGi } from 'naive-ui';

const props = defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <n-grid>
    <n-gi :span="6">1111</n-gi>
    <n-gi :span="18"><slot></slot></n-gi>
  </n-grid>
</template>

<style scoped></style>
