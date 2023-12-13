<script setup lang="ts">
import { NButton } from 'naive-ui';
import { useAttrs } from 'vue-demi';

const attrs = useAttrs();
</script>

<template>
  <NButton>
    {{ attrs.content || '按钮' }}
  </NButton>
</template>

<style scoped></style>
