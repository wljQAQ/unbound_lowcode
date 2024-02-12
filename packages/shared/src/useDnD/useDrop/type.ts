import { MaybeRefOrGetter } from '@vueuse/core';
import { DndManager } from '../types';

export interface DropOptions {
  el: MaybeRefOrGetter<HTMLElement | null | undefined>;
  accept: string | symbol | string[] | symbol[];
  dropEffect?: DataTransfer['dropEffect'];
  drop?: (e: MouseEvent, ctx: DndManager) => unknown;
  dragover?: (e: MouseEvent, ctx: DndManager) => unknown;
}
