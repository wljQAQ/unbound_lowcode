import type { MaybeRef } from 'vue-demi';
import { IPublicPageSchema } from '.';

export interface SimulatorRenderer {
  run(): void;
  schema: IPublicPageSchema;
  setSc
}

export interface CanvasModel {
  createIframe(iframe: HTMLIFrameElement): Promise<SimulatorRenderer>;
  renderSimulator(iframe: HTMLIFrameElement): void;
  simulatorRenderer: SimulatorRenderer | null;
}
