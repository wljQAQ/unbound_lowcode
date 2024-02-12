<script setup lang="ts">
import { IPublicNodeSchema, SetterProp } from '@unbound_lowcode/types';
import { NInput } from 'naive-ui';
import { useEngineContext } from '@unbound_lowcode/shared';
import { produce } from 'immer';

const props = defineProps<{
  setter: SetterProp;
  schema: IPublicNodeSchema;
}>();
</script>

<template>
  <n-input v-model:value="schema.props[setter.name]" />
</template>

<style scoped></style>
