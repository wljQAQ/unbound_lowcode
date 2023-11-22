import { MaybeRefOrGetter } from '@vueuse/core';

export interface useDragOptions {
  el: MaybeRefOrGetter<HTMLElement | null | undefined>;
  item?: unknown;
  effectAllowed?: DataTransfer['effectAllowed'];
  dataType?: string | string[] | Symbol | Symbol[];
}
