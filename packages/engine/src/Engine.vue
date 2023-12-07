<script setup lang="ts">
import { Skeleton } from '@unbound_lowcode/skeleton';
import { useEngineContext } from '@unbound_lowcode/shared';

const ctx = useEngineContext();

console.log('Engine Component Render', ctx);
</script>

<template>
  <Skeleton :areas="ctx?.skeleton.areas"></Skeleton>
</template>

<style scoped></style>
