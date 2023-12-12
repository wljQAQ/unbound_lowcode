import { DndManager } from './types';

export class DndManagerImpl implements DndManager {
  item: unknown;
  type: string | symbol = '';

  constructor() {}

  getItem() {
    return this.item;
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
