import { nextTick, shallowRef } from 'vue';
import { useDragOptions } from './type';
import { useEventListener, unrefElement } from '@vueuse/core';

export function useDrag(options: useDragOptions) {
  const { el } = options;

  useEventListener(el, 'dragstart', e => {
    console.log('dragstart', e);
    e.dataTransfer?.items = 1;
  });

  const init = async () => {
    await nextTick();
    const dom = unrefElement(el);
    dom!.draggable = true;
  };

  init();
}
