<script setup lang="ts">
import 'virtual:uno.css';
import { useDrop, useEngineContext } from '@unbound_lowcode/shared';
import { MATERIAL_DESIGN_DND_TYPE } from '@unbound_lowcode/constants';
import { MaterialItemMeta } from '@unbound_lowcode/types';
import { VueRenderer } from '@unbound_lowcode/vue-renderer';
import { shallowRef } from 'vue-demi';
const dropRef = shallowRef(null);
const engineCtx = useEngineContext();
</script>

<template>
  <div class="w-full h-full" ref="dropRef">
    <VueRenderer :schema="engineCtx?.page.schema" :materialMap="engineCtx?.material.materialsMap" />
  </div>
</template>

<style scoped></style>
