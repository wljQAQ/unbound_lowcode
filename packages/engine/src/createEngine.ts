import { App, reactive, shallowRef } from 'vue-demi';
import { engineContextSymbol } from '@unbound_lowcode/constants';
import { Engine, ISkeletonApi, IMaterialsApi } from '@unbound_lowcode/types';
import { default as EngineComponent } from './Engine.vue';

export function createEngine(): Engine {
  //骨架
  const skeleton: ISkeletonApi = {
    areas: {
      leftArea: []
    },
    add(area) {
      this.areas.leftArea!.push(area);
    }
  };
  //物料
  const material: IMaterialsApi = {
    materialsMap: {},
    add(materials) {
      this.materialsMap[materials.name] = materials;
    }
  };

  const engine: Engine = {
    skeleton,
    material,
    use(plugin, options) {
      plugin.install(this);
      return this;
    },
    install(app) {
      console.log(app, 'Vue 插件');
      app.component('Engine', EngineComponent);
      app.provide(engineContextSymbol, this);
    }
  };
  return engine;
}
