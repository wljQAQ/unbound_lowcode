<script setup lang="ts">
import { IPublicNodeSchema, SetterProp } from '@unbound_lowcode/types';
import { NRadioGroup, NRadioButton } from 'naive-ui';

const props = defineProps<{
  setter: SetterProp;
  schema: IPublicNodeSchema;
  options: { label: string; value: string | number | boolean; disabled?: boolean }[];
}>();

console.log(props, 'radio');
</script>

<template>
  <n-radio-group v-model:value="schema.props[setter.name]">
    <n-radio-button v-for="item in options" :value="item.value" :disabled="item.disabled" :label="item.label" />
  </n-radio-group>
</template>

<style scoped>
:deep(.n-radio-group.n-radio-group--button-group) {
  display: flex !important;
  width: 100% !important;
}

:deep(.n-radio-button) {
  flex: 1;
}
</style>
