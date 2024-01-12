import { createApp, ref, reactive, shallowRef, watch, computed } from 'vue-demi';
import { default as VueSimulatorRenderer } from './VueSimulatorRenderer.vue';
import { SimulatorRenderer } from '@unbound_lowcode/types';

function createPageModel() {
  return reactive({
    schema
  });
}

function createSimulatorRenderer(): SimulatorRenderer {
  const schema = reactive(window.parent.schema);
  const materialsMap = shallowRef(null);
  let container;
  let app;

  return reactive({
    schema,
    materialsMap,
    init() {
      container = document.createElement('div');
      container.id = 'app';
      document.body.appendChild(container);
    },
    run(ctx) {
      this.init();
      this.mount();
      console.log(ctx);
    },
    mount() {
      app = createApp(VueSimulatorRenderer, { schema, materialsMap });
      app.mount(container);
    },
    unmount() {
      app && app.unmount();
    },
    update() {
      this.unmount();
      this.mount();
    },
    setSchema(_schema) {
      // this.schema.id= Date.now();
      // console.log(this.schema,'asdfasfasd');
      // Object.assign(this.schema, schema);
      schema.value = _schema;
    },
    setMaterialsMap(materialsMap) {
      this.materialsMap.value = materialsMap;
    }
    //先得拖拽过来
  });
}

export default createSimulatorRenderer();
