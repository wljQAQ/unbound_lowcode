import { SkeletonModel } from '@unbound_lowcode/types';

export function useSkeletonModel(): SkeletonModel {
  return {
    areas: {
      leftArea: [],
      mainArea: []
    },
    add(areaItem) {
      this.areas[areaItem.area]!.push(areaItem);
    }
  };
}
