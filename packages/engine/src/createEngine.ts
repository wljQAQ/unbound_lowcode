import { App } from 'vue-demi';
import { engineContextSymbol } from '@unbound_lowcode/constants';
import { Engine } from '@unbound_lowcode/types';
import { default as EngineComponent } from './Engine.vue';
import { usePageModel, useMaterialModel, useSkeletonModel, useNodeModel, useCanvasModel } from './models';
import { DndManager } from '@unbound_lowcode/shared/src/useDnD/types';

export function createEngine(): Engine {
  const material = useMaterialModel();

  const engine: Engine = {
    skeleton: useSkeletonModel(),
    material,
    page: usePageModel(),
    node: useNodeModel(material),
    canvas: useCanvasModel(),
    vue: {} as App,
    dnd: {} as DndManager,
    use(plugin, options) {
      plugin.install(this);
      return this;
    },
    install(app) {
      app.component('Engine', EngineComponent);
      app.provide(engineContextSymbol, this);
      this.vue = app;
    }
  };
  return engine;
}
