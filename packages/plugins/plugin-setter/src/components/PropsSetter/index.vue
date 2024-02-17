<script setup lang="ts">
import { useSetterInjection } from '../../context';
import { NGrid, NGi, useMessage, NCollapseItem, NCollapse } from 'naive-ui';
import { useClipboard } from '@vueuse/core';
import { setterMap } from '../../Setters';
import ConfigItem from './ConfigItem.vue';
import { useEngineContext } from '@unbound_lowcode/shared';

const { meta, schema, setter } = useSetterInjection();

const { copy, isSupported } = useClipboard();

const ctx = useEngineContext();

const { success } = useMessage();
function copyId() {
  copy(schema.value.id);
  success('复制成功');
}

console.log(setterMap, 'setterMap');

function onChange() {
  console.log(arguments);
  ctx.node.updateNode(schema.value.id, schema.value);
}
</script>

<template>
  <div>
    <n-grid class="px-30px mb-2">
      <n-gi span="5">
        <component class="max-w-30px max-h-30px" :is="meta.icon" />
      </n-gi>
      <n-gi span="8">
        {{ setter.title }}
      </n-gi>
      <n-gi span="11" class="text-12px flex items-center">
        {{ schema.id }}
        <span v-if="isSupported" class="i-mdi:content-copy ml-1 text-14px cursor-pointer" @click="copyId"></span>
      </n-gi>
    </n-grid>

    <n-collapse arrow-placement="right">
      <n-collapse-item title="基础属性" name="1">
        <template v-for="s in setter.props">
          <config-item v-bind="s">
            <component
              :is="setterMap[s.setter.componentName]"
              :setter="s"
              :schema="schema"
              @update:value="onChange"
              v-bind="s.setter.props || {}"
            />
          </config-item>
        </template>
      </n-collapse-item>
      <n-collapse-item title="高级属性" name="2">
        <div>很好222</div>
      </n-collapse-item>
      <n-collapse-item title="事件" name="3">
        <div>真棒</div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<style scoped>
:deep(.n-collapse-item__header) {
  padding: 16px 12px 0px 12px !important;
}
</style>
