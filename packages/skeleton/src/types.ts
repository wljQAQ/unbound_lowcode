import type { CSSProperties, Component, VNode } from 'vue';
import type { LayoutSiderProps } from 'naive-ui';
import { Areas, AreasBaseConfig } from '@unbound_lowcode/types';

export interface Props {
  layout?: LayoutProps;
  areas?: Areas;
}

export interface LayoutProps {
  leftArea?: LayoutBaseConfig<LayoutSiderProps>;
  rightArea?: LayoutBaseConfig<LayoutSiderProps>;
}

export interface LayoutBaseConfig<T> {
  style?: CSSProperties;
  visible?: boolean;
  props?: T;
}
