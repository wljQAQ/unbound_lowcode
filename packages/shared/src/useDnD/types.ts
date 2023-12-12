export interface DndManager {
  item: unknown;
  type: string | symbol;
  getItem(): unknown;
  setItem(item: unknown): void;
  getType(): string | symbol;
  setType(type: string | symbol): void;
}
