import { App } from 'vue-demi';
import { AreasBaseConfig, Areas, Materials, PageModel } from '.';

export type ICreateBaseEnginePlugin = () => IBaseEnginePlugin;

export interface IBaseEnginePlugin {
  name: string;
  install(ctx: Engine): unknown;
  [key: string]: any;
}

export interface IMaterialsApi {
  materialsMap: {
    [key: string]: Materials;
  };
  add(materials: Materials): void;
}

export interface ISkeletonApi {
  areas: Areas;
  add(area: AreasBaseConfig): void;
}

export interface Engine {
  // _plugins?: unknown[];
  material: IMaterialsApi;
  skeleton: ISkeletonApi;
  page: PageModel;
  use(plugin: IBaseEnginePlugin, options?: any): Engine;
  install(app: App): void;
}
