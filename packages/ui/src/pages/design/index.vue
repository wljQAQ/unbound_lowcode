<script setup lang="tsx">
import { materialPanelPlugin } from '@unbound_lowcode/plugin-materials-pane';
import { vueDesignCanvasPlugin } from '@unbound_lowcode/plugin-vue-design-canvas';
import naiveUIMaterials from '@unbound_lowcode/naive-ui-materials';
import { createEngine } from '@unbound_lowcode/engine';
import App from '../../main';
const engine = createEngine();
App.use(engine);

//我们这个例子要使用NaiveUi所以需要注册物料
engine.use({
  name: 'EditorInit',
  install(ctx) {
    ctx.material.add(naiveUIMaterials);
  }
});

engine.use(materialPanelPlugin());
engine.use(vueDesignCanvasPlugin());
</script>

<template>
  <Engine></Engine>
</template>

<style scoped></style>
