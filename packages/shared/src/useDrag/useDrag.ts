import { nextTick, shallowRef } from 'vue';
import { useEventListener, unrefElement } from '@vueuse/core';

export function useDrag(el: any) {
  useEventListener(el, 'dragstart', e => {
    console.log(11, e);
  });

  const init = async () => {
    await nextTick();
    console.log(el);
    const dom = unrefElement(el);
    dom.draggable = true;
  };

  init();
}
