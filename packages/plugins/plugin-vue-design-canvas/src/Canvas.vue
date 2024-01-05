<script setup lang="tsx">
import { shallowRef, nextTick } from 'vue-demi';
import { useDrop, useEngineContext } from '@unbound_lowcode/shared';
import { MATERIAL_DESIGN_DND_TYPE } from '@unbound_lowcode/constants';
import { MaterialItemMeta } from '@unbound_lowcode/types';

const engineCtx = useEngineContext();
const iframeRef = shallowRef<HTMLIFrameElement | null>(null);

nextTick(() => {
  engineCtx.canvas.renderSimulator(iframeRef.value!);
});
</script>

<template>
  <iframe name="SimulatorRenderer" class="w-full h-full border-none" ref="iframeRef"></iframe>
</template>

<style scoped></style>
