<script setup lang="ts">
import { useDrop } from '@unbound_lowcode/shared';
import { MATERIAL_DESIGN_DND_TYPE } from '@unbound_lowcode/constants';
import { shallowRef } from 'vue-demi';

const dropRef = shallowRef(null);

useDrop({ el: dropRef, accept: MATERIAL_DESIGN_DND_TYPE });
</script>

<template>
  <div ref="dropRef" class="h-full w-full">VueSimulatorRederer</div>
</template>

<style scoped></style>
