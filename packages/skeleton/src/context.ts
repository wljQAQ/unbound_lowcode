import { provide, inject } from 'vue-demi';

import type { SkeletonManager } from './useSkeletonManager';

const SkeletonContextSymbol = Symbol.for('SkeletonContext');

export function useSkeletonContextProvider(context: SkeletonManager) {
  provide(SkeletonContextSymbol, context);
}

export function useSkeletonContextInjector() {
  return inject<SkeletonManager>(SkeletonContextSymbol)!;
}
