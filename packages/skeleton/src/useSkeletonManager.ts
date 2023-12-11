import { shallowRef } from 'vue-demi';
import type { ShallowRef } from 'vue-demi';
import { Areas, AreasBaseConfig } from '@unbound_lowcode/types';
import { LayoutProps } from './types';

type leftPane = AreasBaseConfig | null;

export interface SkeletonManager {
  layout: LayoutProps;
  areas: Areas;
  currentLeftPane: ShallowRef<leftPane>;
  setCurrentLeftPane: (value: leftPane) => void;
  changeCurrentLeftPaneFixed: () => void;
}

export function useSkeletonManager(layout: LayoutProps, areas: Areas): SkeletonManager {
  //左侧菜单树
  const currentLeftPane = shallowRef<leftPane>(null);
  const setCurrentLeftPane = (value: leftPane) => {
    currentLeftPane.value = value;
  };

  const changeCurrentLeftPaneFixed = () => {
    if (!currentLeftPane.value) return;
    currentLeftPane.value.props!.fix = !Boolean(currentLeftPane.value.props?.fix);
  };

  return {
    layout,
    areas,
    currentLeftPane,
    setCurrentLeftPane,
    changeCurrentLeftPaneFixed
  };
}
