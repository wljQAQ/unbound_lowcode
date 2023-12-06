import { App } from 'vue-demi';
import { engineContextSymbol } from '@unbound_lowcode/constants';
import { default as EngineComponent } from './Engine.vue';

interface Engine {
  // _plugins?: unknown[];
  // use(plugin: unknown): Engine;
  install(app: App): void;
}

export function createEngine(): Engine {
  const engine: Engine = {
    install(app) {
      console.log(app);
      app.component('Engine', EngineComponent);
      app.provide(engineContextSymbol, this);
    }
  };
  return engine;
}
