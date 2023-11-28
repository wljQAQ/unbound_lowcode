import { provide, inject } from 'vue-demi';

const SkeletonContextSymbol = Symbol.for('SkeletonContext');

export function useSkeletonContextProvider(context: unknown) {
  provide(SkeletonContextSymbol, context);
}

export function useSkeletonContextInjector() {
  return inject(SkeletonContextSymbol);
}
