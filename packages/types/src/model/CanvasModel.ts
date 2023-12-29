import type { MaybeRef } from 'vue-demi';

export interface CanvasModel {
  createIframe(iframe: HTMLIFrameElement): void;
  renderSimulator(iframe: HTMLIFrameElement): void;
}
