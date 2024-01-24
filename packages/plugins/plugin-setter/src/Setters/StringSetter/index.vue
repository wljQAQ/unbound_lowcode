<script setup lang="ts">
import { IPublicNodeSchema, MaterialItemSetter } from '@unbound_lowcode/types';
import { NInput } from 'naive-ui';

type ObjectType = (typeof MaterialItemSetter)['props'][number];
const props = defineProps<{
  setter: ObjectType;
  schema: IPublicNodeSchema;
}>();
</script>

<template>
  <!-- <n-input v-model:value="schema.props[setter.]" /> -->
  <n-input />
</template>

<style scoped></style>
