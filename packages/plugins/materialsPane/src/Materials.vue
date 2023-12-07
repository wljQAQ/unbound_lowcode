<script setup lang="ts">
import { NSelect, NGrid, NGi, NButton } from 'naive-ui';
import { useEngineContext } from '@unbound_lowcode/shared';

const ctx = useEngineContext();
console.log('materials render', ctx?.material);
</script>

<template>
  <div class="w-60">
    <div class="sticky top-0 px-2 pt-2 pb-3 border-0 border-b border-#eeea border-solid">
      <n-select placeholder="搜索组件"></n-select>
    </div>

    <n-grid class="p-2" cols="2" x-gap="10" y-gap="10">
      <n-gi class="" v-for="item in 10">
        <n-button class="w-full justify-initial" :size="'small'" :block="true">
          <template #icon>
            <span class="i-mdi:button-pointer text-1.8"></span>
          </template>
          <span class="text-ellipsis flex-auto text-left overflow-hidden">按钮</span>
          <span class="i-mdi:help-circle-outline text-1.8 hidden"></span>
        </n-button>
      </n-gi>
    </n-grid>
  </div>
</template>

<style scoped>
:deep(.n-button__content) {
  justify-content: space-between;
  flex: 1;
}
</style>
