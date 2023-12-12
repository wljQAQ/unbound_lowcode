import { MaybeRefOrGetter } from '@vueuse/core';

export interface DropOptions {
  el: MaybeRefOrGetter<HTMLElement | null | undefined>;
  accept: string | symbol | string[] | symbol[];
  dropEffect?: DataTransfer['dropEffect'];
}
