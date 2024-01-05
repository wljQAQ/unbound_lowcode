import { createApp, ref,reactive } from 'vue-demi';
import { default as VueSimulatorRenderer } from './VueSimulatorRenderer.vue';
import { SimulatorRenderer } from '@unbound_lowcode/types';

function createSimulatorRenderer(): SimulatorRenderer {
  const test = reactive({});

  return {
    test,
    run() {
      const container = document.createElement('div');
      container.id = 'app';
      document.body.appendChild(container);

      createApp(VueSimulatorRenderer, { renderer: this }).mount(container);
    }
    //先得拖拽过来
  };
}

export default createSimulatorRenderer();
