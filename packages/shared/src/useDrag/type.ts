import { MaybeRefOrGetter } from '@vueuse/core';

export interface useDragOptions {
  el: MaybeRefOrGetter<HTMLElement | null | undefined>;
  items?: unknown;
}
