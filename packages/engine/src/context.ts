import { provide, inject } from 'vue-demi';

// import type { SkeletonManager } from './useSkeletonManager';

interface EngineConText {}

export const EngineContextSymbol = Symbol.for('EngineConText');

export function useEngineConTextProvider(context: EngineConText) {
  provide(EngineContextSymbol, context);
}

export function useEngineConTextInjector() {
  return inject<EngineConText>(EngineContextSymbol);
}
