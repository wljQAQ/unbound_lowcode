import { provide, inject } from 'vue-demi';
import { DndManager } from './types';

const DndContextSymbol = Symbol.for('DndContext');

export function useDndContextProvider(context: DndManager) {
  provide(DndContextSymbol, context);
}

export function useDndContextInjector() {
  return inject<DndManager>(DndContextSymbol);
}
