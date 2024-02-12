import { nextTick } from 'vue-demi';
import { DropOptions } from '.';
import { useEventListener, unrefElement } from '@vueuse/core';
import { useDndContextInjector } from '../DndContext';
import { DndManager } from '../types';

//这边加个ctx是为了兼容异步的情况
export function useDrop(options: DropOptions, ctx: DndManager) {
  const { el, accept, drop, dragover } = options;
  const dndContext = ctx || useDndContextInjector();
  const init = async () => {
    await nextTick();
    const dom = unrefElement(el);
    if (!dom) return;
    //iframe元素需要特殊处理

    registerEvent(dom);
  };

  function registerEvent(el: HTMLElement | Window | Document) {
    useEventListener(el, 'drop', (e: MouseEvent) => {
      const type = dndContext?.getType();
      if (type !== accept || (Array.isArray(accept) && accept.find(i => i !== type))) return;
      drop?.(e, dndContext as DndManager);
    });

    useEventListener(el, 'dragover', (e: MouseEvent) => {
      e.preventDefault();
      dragover?.(e, dndContext as DndManager);
    });
  }

  init();
}
