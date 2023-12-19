import { AreasBaseConfig, Areas } from '..';

export interface SkeletonModel {
  areas: Areas;
  add(area: AreasBaseConfig): void;
}
