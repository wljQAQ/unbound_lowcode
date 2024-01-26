import { createApp, ref, reactive, shallowRef, watch, computed } from 'vue-demi';
import { default as VueSimulatorRenderer } from './VueSimulatorRenderer.vue';
import { SimulatorRenderer } from '@unbound_lowcode/types';
import { engineContextSymbol } from '@unbound_lowcode/constants';
import type { App } from 'vue-demi';

function createSimulatorRenderer(): SimulatorRenderer {
  const schema = ref(window.parent.schema);
  const materialsMap = shallowRef(null);
  let container: HTMLElement;
  let app: App;

  return {
    schema,
    materialsMap,
    init() {
      container = document.createElement('div');
      container.id = 'app';
      document.body.appendChild(container);
    },
    run(ctx) {
      this.init();
      this.mount(ctx);
      console.log(ctx);
    },
    mount(ctx) {
      app = createApp(VueSimulatorRenderer, { schema, materialsMap });
      app.provide(engineContextSymbol, ctx);
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
      schema.value = _schema;
    },
    setMaterialsMap(materialsMap) {
      this.materialsMap.value = materialsMap;
    }
    //先得拖拽过来
  };
}

export default createSimulatorRenderer();
