<script setup lang="tsx">
import { shallowRef, nextTick } from 'vue-demi';
import { useDrop, useEngineContext } from '@unbound_lowcode/shared';
import { MATERIAL_DESIGN_DND_TYPE } from '@unbound_lowcode/constants';
import { MaterialItemMeta } from '@unbound_lowcode/types';

const engineCtx = useEngineContext();
console.log(engineCtx.material.materialsMap,'setter');
</script>

<template>
  <div class="w-full">right</div>
</template>

<style scoped></style>
