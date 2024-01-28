<script setup lang="ts">
import { NButton } from 'naive-ui';
import { useAttrs } from 'vue-demi';

const attrs = useAttrs();

const props = defineProps<{
  data: Object;
}>();

</script>

<template>
  <NButton>
    {{ data.content || '按钮' }}
  </NButton>
</template>

<style scoped></style>
