import { App, reactive, shallowRef } from 'vue-demi';
import { engineContextSymbol } from '@unbound_lowcode/constants';
import { Engine } from '@unbound_lowcode/types';
import { default as EngineComponent } from './Engine.vue';
import { usePageModel, useMaterialModel, useSkeletonModel, useNodeModel } from './models';

export function createEngine(): Engine {
  const engine: Engine = {
    skeleton: useSkeletonModel(),
    material: useMaterialModel(),
    page: usePageModel(),
    node: useNodeModel(),
    use(plugin, options) {
      plugin.install(this);
      return this;
    },
    install(app) {
      app.component('Engine', EngineComponent);
      app.provide(engineContextSymbol, this);
    }
  };
  return engine;
}
