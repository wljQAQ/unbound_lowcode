<script setup lang="ts">
import { useDrop } from '@unbound_lowcode/shared';
import { shallowRef } from 'vue-demi';
const dropRef = shallowRef(null);
useDrop(dropRef);
</script>

<template>
  <div ref="dropRef" class="w-full h-full"></div>
</template>

<style scoped></style>
