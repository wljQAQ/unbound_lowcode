<script setup lang="ts">
import { Skeleton } from '@unbound_lowcode/skeleton';
import { useEngineContext, DndProvider } from '@unbound_lowcode/shared';
import { NMessageProvider } from 'naive-ui';

const ctx = useEngineContext();
</script>

<template>
  <n-message-provider>
    <DndProvider>
      <Skeleton :areas="ctx?.skeleton.areas"></Skeleton>
    </DndProvider>
  </n-message-provider>
</template>

<style scoped></style>
