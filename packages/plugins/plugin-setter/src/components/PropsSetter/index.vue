<script setup lang="ts">
import { useSetterInjection } from '../../context';
import { NGrid, NGi, useMessage, NCollapseItem, NCollapse } from 'naive-ui';
import { useClipboard } from '@vueuse/core';
import { setterMap } from '../../Setters';

const { meta, schema, setter } = useSetterInjection();

const { copy, isSupported } = useClipboard();

const { success } = useMessage();
console.log(setterMap, 'setterMap', setter);
function copyId() {
  copy(schema.value.id);
  success('复制成功');
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

    <n-collapse class="px-4" arrow-placement="right">
      <n-collapse-item title="基础属性" name="1">
        <div>基础</div>
        <component :is="setterMap.StringSetter"></component>
      </n-collapse-item>
      <n-collapse-item title="高级属性" name="2">
        <div>很好</div>
      </n-collapse-item>
      <n-collapse-item title="事件" name="3">
        <div>真棒</div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<style scoped></style>
