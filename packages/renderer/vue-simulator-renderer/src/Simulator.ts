import { createApp } from 'vue-demi';
import { default as VueSimulatorRenderer } from './VueSimulatorRenderer.vue';

export default {
  render(el: HTMLElement) {
    createApp(VueSimulatorRenderer).mount(el);
  }
};
