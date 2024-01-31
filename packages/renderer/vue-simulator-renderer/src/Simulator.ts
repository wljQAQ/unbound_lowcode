import { createApp, ref, reactive, triggerRef, shallowRef, watch, computed, toRaw } from 'vue-demi';
import { default as VueSimulatorRenderer } from './VueSimulatorRenderer.vue';
import { SimulatorRenderer } from '@unbound_lowcode/types';
import { engineContextSymbol } from '@unbound_lowcode/constants';
import type { App } from 'vue-demi';

//模拟器有两个更新的地方  一个是从左边拖拽组件到右边  一个 是从setter里面直接修改
function createSimulatorRenderer(): SimulatorRenderer {
  const schema = shallowRef(null);
  const materialsMap = shallowRef(null);
  let container: HTMLElement;
  let app: App;
  // window.updateSchema = _schema => {
  //   console.log(111);
  //   triggerRef(schema);
  // };

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
