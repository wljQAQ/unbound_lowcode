<script setup lang="ts">
import { useDrop } from '@unbound_lowcode/shared';
import Modules from '@unbound_lowcode/naive-ui-materials';
import { shallowRef, defineAsyncComponent } from 'vue-demi';
const dropRef = shallowRef(null);
useDrop(dropRef);

const Button = defineAsyncComponent(Modules.componentModules.Button);
console.log(Modules);
</script>

<template>
  <div ref="dropRef" class="w-full h-full">
    <Button></Button>
  </div>
</template>

<style scoped></style>
