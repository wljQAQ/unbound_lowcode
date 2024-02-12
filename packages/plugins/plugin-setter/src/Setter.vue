<script setup lang="tsx">
import { computed, reactive } from 'vue-demi';
import { NTabs, NTabPane } from 'naive-ui';
import { useEngineContext } from '@unbound_lowcode/shared';
import { useSetterProvider, SetterContext } from './context';
import PropsSetter from './components/PropsSetter/index.vue';
import StyleSetter from './components/StyleSetter/index.vue';

const engineCtx = useEngineContext();

const schema = computed(() => reactive(JSON.parse(JSON.stringify(engineCtx.node.currentNode.value))));
const setter = computed(() => engineCtx.node.getNodeSetter());
const meta = computed(() => engineCtx.node.getNodeMeta());

useSetterProvider({ schema, setter, meta } as SetterContext);
</script>

<template>
  <div :key="schema.id" v-if="setter && meta && schema" class="w-full text-left py-2">
    <div>{{ setter.title }}</div>
    <n-tabs type="segment" animated size="small" :default-value="'props'">
      <n-tab-pane name="props" tab="属性"> <PropsSetter /> </n-tab-pane>
      <n-tab-pane name="style" tab="样式"> <StyleSetter /> </n-tab-pane>
    </n-tabs>
  </div>
  <div v-else class="mt-10 text-gray">请在左侧画布选中节点</div>
</template>

<style scoped>
:deep(.n-tabs-nav) {
  padding: 0px 30px;
}
</style>
