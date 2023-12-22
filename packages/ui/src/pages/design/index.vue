<script setup lang="tsx">
import { materialPanelPlugin } from '@unbound_lowcode/plugin-materials-pane';
import { vueDesignCanvasPlugin } from '@unbound_lowcode/plugin-vue-design-canvas';
import naiveUIMaterials from '@unbound_lowcode/naive-ui-materials';
import { createEngine } from '@unbound_lowcode/engine';
import App from '../../main';


const engine = createEngine();

//注册引擎
App.use(engine);

//我们这个例子要使用NaiveUi所以需要远程注册物料
engine.use({
  name: 'EditorInit',
  install(ctx) {
    ctx.material.add(naiveUIMaterials);
  }
});
//物料面板插件
engine.use(materialPanelPlugin());
//渲染插件
engine.use(vueDesignCanvasPlugin());
</script>

<template>
  <Engine></Engine>
</template>

<style scoped></style>
