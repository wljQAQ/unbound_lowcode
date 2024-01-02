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

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
  width: 100%;
}

body {
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
  width: 100%;
}
</style>
