import { MaybeRefOrGetter } from '@vueuse/core';

export interface DragOptions {
  el: MaybeRefOrGetter<HTMLElement | null | undefined>;
  type: string | symbol;
  item?: unknown;
  effectAllowed?: DataTransfer['effectAllowed'];
  dataType?: string | string[] | Symbol | Symbol[];
}
