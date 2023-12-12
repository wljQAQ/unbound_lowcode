<script setup lang="ts">
//组件式调用
import { useDrop, DropOptions } from '.';
import { shallowRef } from 'vue-demi';

const dropRef = shallowRef(null);

type Props = Omit<DropOptions, 'el'>;
const props = defineProps<Props>();

useDrop({ el: dropRef, ...props });
</script>

<template>
  <div class="dropRef">
    <slot></slot>
  </div>
</template>

<style scoped></style>
