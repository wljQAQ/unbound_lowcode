<script setup lang="ts">
import { NButton } from 'naive-ui';
import { useAttrs } from 'vue-demi';

const attrs = useAttrs();

console.log('按钮组件渲染', attrs);
</script>

<template>
  <NButton>
    {{ attrs.children || '按钮' }}
  </NButton>
</template>

<style scoped></style>
