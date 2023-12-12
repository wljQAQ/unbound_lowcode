import { nextTick } from 'vue-demi';
import { DropOptions } from '.';
import { useEventListener, unrefElement } from '@vueuse/core';
import { useDndContextInjector } from '../DndContext';

export function useDrop(options: DropOptions) {
  const { el, accept } = options;
  const dndContext = useDndContextInjector();
  useEventListener(el, 'drop', e => {
    const type = dndContext?.getType();
    if (type !== accept || (Array.isArray(accept) && accept.find(i => i !== type))) return;

    console.log('drop', dndContext);
  });

  useEventListener(el, 'dragover', e => e.preventDefault());

  const init = async () => {
    await nextTick();
    const dom = unrefElement(el);
    // dom.draggable = true;
  };

  init();
}
