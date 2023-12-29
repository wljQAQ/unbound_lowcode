import { App } from 'vue-demi';
import { MaterialModel, SkeletonModel, PageModel, NodeModel, CanvasModel } from '.';

export type ICreateBaseEnginePlugin = () => IBaseEnginePlugin;

export interface IBaseEnginePlugin {
  name: string;
  install(ctx: Engine): unknown;
  [key: string]: any;
}

export interface Engine {
  // _plugins?: unknown[];
  material: MaterialModel;
  skeleton: SkeletonModel;
  page: PageModel;
  node: NodeModel;
  vue: App;
  canvas: CanvasModel;
  use(plugin: IBaseEnginePlugin, options?: any): Engine;
  install(app: App): void;
}
