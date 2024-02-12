import type { App, ShallowRef } from 'vue-demi';
import { IPublicPageSchema, IPublicMaterialsMap } from '.';
import { Engine } from '../Engine';
export interface SimulatorRenderer {
  run(engine: Engine): void;
  mount(engine: Engine): void;
  app: ShallowRef<App<Element> | null>;
  unmount(): void;
}

export interface CanvasModel {
  createIframe(iframe: HTMLIFrameElement): Promise<SimulatorRenderer>;
  renderSimulator(iframe: HTMLIFrameElement, engine: Engine): Promise<SimulatorRenderer>;
  simulatorRenderer: SimulatorRenderer | null;
}
