<script setup lang="ts">
import { Skeleton } from '@unbound_lowcode/skeleton';
import { useEngineContext, DndProvider } from '@unbound_lowcode/shared';

const ctx = useEngineContext();
</script>

<template>
  <DndProvider>
    <Skeleton :areas="ctx?.skeleton.areas"></Skeleton>
  </DndProvider>
</template>

<style scoped></style>
