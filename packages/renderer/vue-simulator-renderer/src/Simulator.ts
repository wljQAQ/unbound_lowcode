import { createApp, ref, reactive, triggerRef, shallowRef, watch, computed, toRaw } from 'vue-demi';
import { default as VueSimulatorRenderer } from './VueSimulatorRenderer.vue';
import { SimulatorRenderer } from '@unbound_lowcode/types';
import { engineContextSymbol } from '@unbound_lowcode/constants';
import type { App } from 'vue-demi';
import { produce } from 'immer';

function createSimulatorRenderer(): SimulatorRenderer {
  // const schema = ref(window.parent.schema);
  console.log(window.parent.schema);
  const schema = shallowRef({ ...window.parent.schema });
  const materialsMap = shallowRef(null);
  let container: HTMLElement;
  let app: App;
  window.schema = schema;

  const b = shallowRef(JSON.parse(JSON.stringify(window.parent.schema)));

  window.b = b;

  // window.updateSchema = _schema => {
  //   // const result = produce(toRaw(window.parent.schema), draft => {
  //   //   draft.children[0].props.content = 123;
  //   // });
  //   schema.value = _schema;
  //   // console.log(_schema === schema.value);
  //   // schema.value = JSON.parse(JSON.stringify(_schema));
  //   // triggerRef(schema);
  // };
  window.updateSchema = _schema => {
    triggerRef(schema);
  };

  return {
    schema,
    materialsMap,
    init() {
      setTimeout(() => {
        // console.log(window.parent.test_customRef2);
        // window.parent.test_customRef2.s = 12312312;
        // window.parent.schema.id = Date.now();
      }, 1000);
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
      app = createApp(VueSimulatorRenderer);
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
      console.log(_schema, 'change schema');
      // schema.value = JSON.parse(JSON.stringify(_schema));
      schema.value = _schema;
    },
    setMaterialsMap(materialsMap) {
      this.materialsMap.value = materialsMap;
    }
    //先得拖拽过来
  };
}

export default createSimulatorRenderer();
