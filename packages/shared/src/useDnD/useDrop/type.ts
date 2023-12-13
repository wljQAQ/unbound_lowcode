import { MaybeRefOrGetter } from '@vueuse/core';
import { DndManager } from '../types';

export interface DropOptions {
  el: MaybeRefOrGetter<HTMLElement | null | undefined>;
  accept: string | symbol | string[] | symbol[];
  dropEffect?: DataTransfer['dropEffect'];
  drop?: (ctx: DndManager) => unknown;
}
