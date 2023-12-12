<script setup lang="ts">
//组件式调用
import { useDrag, DragOptions } from '.';
import { shallowRef } from 'vue-demi';

const dragRef = shallowRef(null);

type Options = Omit<DragOptions, 'el'>;

const props = defineProps<{
  options: Options;
}>();

useDrag({ el: dragRef, ...props.options });
</script>

<template>
  <div ref="dragRef" draggable="true" class="cursor-move">
    <slot></slot>
  </div>
</template>

<style scoped></style>
