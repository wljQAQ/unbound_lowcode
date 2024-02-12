<script setup lang="tsx">
import { shallowRef, nextTick } from 'vue-demi';
import { useEngineContext, useDndContextInjector } from '@unbound_lowcode/shared';

const engineCtx = useEngineContext();
const iframeRef = shallowRef<HTMLIFrameElement | null>(null);
const dndCtx = useDndContextInjector();
engineCtx.dnd = dndCtx;
nextTick(async () => {
  await engineCtx.canvas.renderSimulator(iframeRef.value!, engineCtx);
});
</script>

<template>
  <iframe name="SimulatorRenderer" class="w-full h-full border-none" ref="iframeRef"></iframe>
</template>

<style scoped></style>
