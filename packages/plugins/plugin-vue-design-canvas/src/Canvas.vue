<script setup lang="tsx">
import { VueSimulatorRenderer } from '@unbound_lowcode/vue-simulator-renderer';
import { shallowRef, nextTick } from 'vue-demi';
import { createApp } from 'vue-demi';
import App from './App.vue';

const iframeRef = shallowRef<HTMLIFrameElement | null>(null);
const srcdoc = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="test">测试</div>
  </body>
</html>
`;

const Test = <div>测试测试测试</div>;

async function onLoad() {
  await nextTick();
  const iframe = iframeRef.value;
  if (!iframe) return;
  const doc = iframe.contentDocument!;
  const ele = doc.getElementById('test')!;
  console.log(ele);
  createApp(VueSimulatorRenderer).mount(ele);
  doc.addEventListener('load', () => {
    console.log(1231231);
    const ele = doc.getElementById('test');
    console.log(ele);
  });

  doc.addEventListener('click', e => {
    const ele = doc.getElementById('test');
    console.log(e, ele);
  });
}

async function init() {
  await nextTick();
  const iframe = iframeRef.value;
  if (!iframe) return;
  const doc = iframe.contentDocument!;

  doc.open();
  doc.write(srcdoc);
  doc.close();
}

// init();
</script>

<template>
  <div class="w-full h-full">
    <!-- <iframe ref="iframeRef" :srcdoc="srcdoc" @load="onLoad"></iframe> -->
    <VueSimulatorRenderer></VueSimulatorRenderer>
  </div>
</template>

<style scoped></style>
