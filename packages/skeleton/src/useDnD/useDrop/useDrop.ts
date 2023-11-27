import { nextTick, shallowRef } from 'vue-demi';
import { useEventListener, unrefElement, MaybeRefOrGetter } from '@vueuse/core';
import { useDndContextInjector } from '../DndContext';

export function useDrop(el: MaybeRefOrGetter<HTMLElement | null | undefined>) {
  useEventListener(el, 'drop', e => {
    e.dataTransfer!.dropEffect = 'copy';
    console.log('drop', e);
    console.log(e.dataTransfer?.getData('test'));
  });

  const a = useDndContextInjector();
  console.log(a?.getItem());
  useEventListener(el, 'dragover', e => e.preventDefault());

  const init = async () => {
    await nextTick();
    const dom = unrefElement(el);
    // dom.draggable = true;
  };

  init();
}
