import { nextTick, shallowRef } from 'vue';
import { useEventListener, unrefElement, MaybeRefOrGetter } from '@vueuse/core';

export function useDrop(el: MaybeRefOrGetter<HTMLElement | null | undefined>) {
  useEventListener(el, 'drop', e => {
    console.log('drop', e);
  });

  useEventListener(el, 'dragover', e => e.preventDefault());

  const init = async () => {
    await nextTick();
    const dom = unrefElement(el);
    // dom.draggable = true;
    console.log(dom);
  };

  init();
}
