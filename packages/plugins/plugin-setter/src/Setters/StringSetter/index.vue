<script setup lang="ts">
import { IPublicNodeSchema, SetterProp } from '@unbound_lowcode/types';
import { NInput } from 'naive-ui';

const props = defineProps<{
  setter: SetterProp;
  schema: IPublicNodeSchema;
}>();
</script>

<template>
  <n-input v-model:value="schema.props[setter.name]" />
</template>

<style scoped></style>
