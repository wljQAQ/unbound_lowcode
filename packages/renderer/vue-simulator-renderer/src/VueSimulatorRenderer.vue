<script setup lang="ts">
import { useDrop, useEngineContext } from '@unbound_lowcode/shared';
import { MATERIAL_DESIGN_DND_TYPE } from '@unbound_lowcode/constants';
import { MaterialItemMeta } from '@unbound_lowcode/types';
import { VueRenderer } from '@unbound_lowcode/vue-renderer';
import { shallowRef } from 'vue-demi';

const dropRef = shallowRef(null);
const engineCtx = useEngineContext();

useDrop({
  el: dropRef,
  accept: MATERIAL_DESIGN_DND_TYPE,
  drop(ctx) {
    const item = ctx.getItem<MaterialItemMeta>();
    const { componentName, packageName } = item;
    if (!componentName || !packageName) return;
    const schema = engineCtx?.material.materialsMap[packageName].componentsSchemaMap[componentName];
    console.log(schema);  
  }
});
</script>

<template>
  <VueRenderer
    ref="dropRef"
    class="h-full w-full"                 
    :schema="engineCtx?.page.schema"
    :materialMap="engineCtx?.material.materialsMap"
  ></VueRenderer>
</template>

<style scoped></style>
