<script setup lang="ts">
import { NButton } from 'naive-ui';
import { useAttrs } from 'vue-demi';

const attrs = useAttrs();

console.log('按钮组件渲染');
</script>

<template>
  <NButton>
    {{ attrs.content || '按钮' }}
  </NButton>
</template>

<style scoped></style>
