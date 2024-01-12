import type { Ref, ShallowRef } from 'vue-demi';
import { IPublicPageSchema, IPublicMaterialsMap } from '.';

export interface SimulatorRenderer {
  run(): void;
  schema: Ref<IPublicPageSchema | null>;
  materialsMap: ShallowRef<IPublicMaterialsMap | null>;
  setSchema(schema: IPublicPageSchema): void;
  setMaterialsMap(materialsMap: IPublicMaterialsMap): void;
}

export interface CanvasModel {
  createIframe(iframe: HTMLIFrameElement): Promise<SimulatorRenderer>;
  renderSimulator(iframe: HTMLIFrameElement): Promise<SimulatorRenderer>;
  simulatorRenderer: SimulatorRenderer | null;
}
