import { nextTick, shallowRef } from 'vue-demi';
import { DragOptions } from './type';
import { useEventListener, unrefElement } from '@vueuse/core';
import { useDndContextInjector } from '../DndContext';

export function useDrag(options: DragOptions) {
  const { el, item, effectAllowed, type } = options;
  const dndContext = useDndContextInjector();

  useEventListener(el, 'dragstart', e => {
    dndContext?.setType(type);
    dndContext?.setItem(item);
    e.dataTransfer!.effectAllowed = effectAllowed || 'uninitialized';
  });

  const init = async () => {
    await nextTick();
    const dom = unrefElement(el);
    dom!.draggable = true;
  };

  init();
}
