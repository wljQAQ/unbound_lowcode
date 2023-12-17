import { DndManager } from './types';

export class DndManagerImpl implements DndManager {
  item: unknown;
  type: string | symbol = '';

  constructor() {}

  getItem<T>(): T {
    return this.item as T;
  }

  setItem(item: unknown): void {
    this.item = item;
  }

  getType() {
    return this.type;
  }

  setType(type: string | symbol) {
    this.type = type;
  }
}
