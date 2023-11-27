export interface DndManager {
  item: unknown;

  getItem(): unknown;
  setItem(item: unknown): void;
}
