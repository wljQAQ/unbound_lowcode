import { nextTick } from 'vue-demi';
import { DropOptions } from '.';
import { useEventListener, unrefElement } from '@vueuse/core';
import { useDndContextInjector } from '../DndContext';
import { DndManager } from '../types';

export function useDrop(options: DropOptions) {
  const { el, accept, drop } = options;
  const dndContext = useDndContextInjector();
  const init = async () => {
    await nextTick();
    const dom = unrefElement(el);

    if (!dom) return;
    //iframe元素需要特殊处理

    if (dom instanceof HTMLIFrameElement) {
      dom.onload = () => {
        registerEvent(dom.contentDocument!);
      };
      return;
    }
    registerEvent(dom);
  };

  function registerEvent(el: HTMLElement | Window | Document) {
    console.log(el);
    useEventListener(el, 'drop', e => {
      console.log(1111211, dndContext);
      const type = dndContext?.getType();
      if (type !== accept || (Array.isArray(accept) && accept.find(i => i !== type))) return;

      drop?.(dndContext as DndManager);
    });

    useEventListener(el, 'dragover', e => e.preventDefault());
  }

  init();
}
