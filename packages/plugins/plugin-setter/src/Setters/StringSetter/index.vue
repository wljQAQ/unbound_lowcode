<script setup lang="ts">
import { IPublicNodeSchema, SetterProp } from '@unbound_lowcode/types';
import { NInput } from 'naive-ui';
import { useEngineContext } from '@unbound_lowcode/shared';
import { produce } from 'immer';

const props = defineProps<{
  setter: SetterProp;
  schema: IPublicNodeSchema;
}>();

console.log(props.schema.props);

const ctx = useEngineContext();
let a = props.schema.props;
function onInput(val) {
  // props.schema.props = produce(props.schema.props, draft => {
  //   draft[props.setter.name] = val;
  // });
  console.log(props.schema);
  props.schema.props = Object.assign({}, props.schema.props, {
    [props.setter.name]: val
  });
  props.schema.props = JSON.parse(JSON.stringify(props.schema.props));
  ctx.page.updateSchema();
  console.log(val, a, props.schema.props);
  // console.log(props.schema.props);
}
</script>

<template>
  <n-input v-model:value="schema.props[setter.name]" @update:value="onInput" />
</template>

<style scoped></style>
