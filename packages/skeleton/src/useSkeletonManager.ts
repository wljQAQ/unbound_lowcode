import { shallowRef } from 'vue-demi';
import type { ShallowRef } from 'vue-demi';
import { LayoutProps, AreasProps, AreasBaseConfig } from './types';

type leftPane = AreasBaseConfig | null;

export interface SkeletonManager {
  layout: LayoutProps;
  areas: AreasProps;
  currentLeftPane: ShallowRef<leftPane>;
  setCurrentLeftPane: (value: leftPane) => void;
}

export function useSkeletonManager(layout: LayoutProps, areas: AreasProps): SkeletonManager {
  //左侧菜单树
  const currentLeftPane = shallowRef<leftPane>(null);
  const setCurrentLeftPane = (value: leftPane) => {
    if (value?.props?.fix && !value) {
      return;
    }
    currentLeftPane.value = value;
  };

  return {
    layout,
    areas,
    currentLeftPane,
    setCurrentLeftPane
  };
}
