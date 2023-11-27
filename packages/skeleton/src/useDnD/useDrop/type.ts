import { MaybeRefOrGetter } from '@vueuse/core';

export interface useDropOptions {
  el: MaybeRefOrGetter<HTMLElement | null | undefined>;
  dropEffect?: DataTransfer['dropEffect'];
  accept?: string | string[] | Symbol | Symbol[];
}
