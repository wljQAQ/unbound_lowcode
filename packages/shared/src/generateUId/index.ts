import { nanoid } from 'nanoid';
export function generateUId(size: number | undefined = 7) {
  return nanoid(size);
}
