import type { Ref, ShallowRef } from 'vue-demi';
import { IPublicPageSchema, IPublicMaterialsMap } from '.';
import { Engine } from '../Engine';
export interface SimulatorRenderer {
  run(engine: Engine): void;
  schema: Ref<IPublicPageSchema | null>;
  materialsMap: ShallowRef<IPublicMaterialsMap | null>;
  setSchema(schema: IPublicPageSchema): void;
  setMaterialsMap(materialsMap: IPublicMaterialsMap): void;
}

export interface CanvasModel {
  createIframe(iframe: HTMLIFrameElement): Promise<SimulatorRenderer>;
  renderSimulator(iframe: HTMLIFrameElement, engine: Engine): Promise<SimulatorRenderer>;
  simulatorRenderer: SimulatorRenderer | null;
}
