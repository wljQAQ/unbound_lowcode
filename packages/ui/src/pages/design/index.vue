<script setup lang="tsx">
import { materialPanelPlugin } from '@unbound_lowcode/materials-pane-plugin';
import naiveUIMaterials from '@unbound_lowcode/naive-ui-materials';
import { createEngine } from '@unbound_lowcode/engine';
import App from '../../main';
// const a = ref(1);
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
</script>

<template>
  <Engine></Engine>
  <!-- {{ a }}
  <div @click="a++">click</div> -->
</template>

<style scoped></style>
