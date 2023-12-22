<script setup lang="tsx">
import { useDrop, useEngineContext } from '@unbound_lowcode/shared';
import { MATERIAL_DESIGN_DND_TYPE } from '@unbound_lowcode/constants';
import { MaterialItemMeta } from '@unbound_lowcode/types';
import { VueRenderer } from '@unbound_lowcode/vue-renderer';
import { shallowRef, nextTick, createApp } from 'vue-demi';
import * as Vue from 'vue';

const dropRef = shallowRef(null);
const engineCtx = useEngineContext();

const srcdoc = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
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
    
  </head>
  <body>
    <div id="app">测试</div>

    ${123}
  </body>
</html>
`;
const iframeRef = shallowRef<HTMLIFrameElement | null>(null);
async function onLoad() {
  await nextTick();
  // const iframe = iframeRef.value;
  // if (!iframe) return;
  // const doc = iframe.contentDocument!;

  // const ele = doc.getElementById('app')!;

  // createApp(<VueRenderer schema={engineCtx.page.schema} materialMap={engineCtx.material.materialsMap} />).mount(ele);
  // createApp(VueRenderer).mount(ele);
}

useDrop({
  el: iframeRef,
  accept: MATERIAL_DESIGN_DND_TYPE,
  drop(ctx) {
    const item = ctx.getItem<MaterialItemMeta>();
    const { componentName, packageName } = item;
    if (!componentName || !packageName) return;
    //拿到schema
    const schema = engineCtx.material.getSchemaByNameAndPkg({ comName: componentName, pkgName: packageName });
    if (!schema) return;
    //生成node
    const node = engineCtx.node.createNode(schema);
    if (!node) return;
    //将schema放入到page中
    engineCtx.page.insertNodeToPage(node);
    console.log(engineCtx.page);
  }
});

async function init() {
  await nextTick();
  const iframe = iframeRef.value;
  if (!iframe) return;
  const doc = iframe.contentDocument!;

  doc.open();
  doc.write(`
<!doctype html>
<html class="engine-design-mode">
  <head><meta charset="utf-8"/>
  </head>
  <body>
    <div id="app">12312312312312</div>
  </body>
</html>
`);
  doc.close();
  window.Vue = Vue;
  window.Simulator = VueRenderer;
  var script = doc.createElement('script');
  var code = `
    const {Vue,Simulator} = window.parent;
    const {createApp} = Vue;
    const el = document.getElementById("app");
    createApp(Simulator).mount(el)
  `;
  script.appendChild(doc.createTextNode(code));
  doc.body.appendChild(script);
}

init();
</script>

<template>
  <div ref="dropRef" class="h-full w-full">
    <iframe class="w-full h-full" ref="iframeRef" @load="onLoad"></iframe>
  </div>
  <!-- <VueRenderer
    ref="dropRef"
    class="h-full w-full"
    :schema="engineCtx.page.schema"
    :materialMap="engineCtx.material.materialsMap"
  ></VueRenderer> -->
</template>

<style scoped></style>
