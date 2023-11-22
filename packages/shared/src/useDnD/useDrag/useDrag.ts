import { nextTick, shallowRef } from 'vue-demi';
import { useDragOptions } from './type';
import { useEventListener, unrefElement } from '@vueuse/core';
import { useDndContextInjector } from '../DndContext';

export function useDrag(options: useDragOptions) {
  const { el, item, effectAllowed, dataType } = options;
  const dndContext = useDndContextInjector();
  dndContext?.setItem(item);

  useEventListener(el, 'dragstart', e => {
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
