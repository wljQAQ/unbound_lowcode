<script setup lang="ts">
import { useSetterInjection } from '../../context';
import { NGrid, NGi } from 'naive-ui';

const { meta, schema, setter } = useSetterInjection();
</script>

<template>
  <div>
    <n-grid class="px-30px">
      <n-gi span="5">
        <component class="max-w-30px max-h-30px" :is="meta.icon" />
      </n-gi>
      <n-gi span="10">
        {{ setter.title }}
      </n-gi>
      <n-gi class="text-12px">
        {{ schema.id }}
      </n-gi>
    </n-grid>
  </div>
</template>

<style scoped></style>
