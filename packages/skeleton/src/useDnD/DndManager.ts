import { DndManager } from './types';

export class DndManagerImpl implements DndManager {
  item: unknown;

  constructor(item: unknown) {
    this.setItem(item);
  }

  getItem() {
    return this.item;
  }

  setItem(item: unknown): void {
    this.item = item;
  }
}
