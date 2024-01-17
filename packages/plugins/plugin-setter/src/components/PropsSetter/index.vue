<script setup lang="ts">
import { useSetterInjection } from '../../context';

const { meta, schema, setter } = useSetterInjection();
</script>

<template>
  <div>
    <div class="px-30px">
      <component :is="meta.icon" />
    </div>
  </div>
</template>

<style scoped></style>
