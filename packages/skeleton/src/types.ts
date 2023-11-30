import type { CSSProperties, Component, VNode } from 'vue';
import type { LayoutSiderProps } from 'naive-ui';

export interface Props {
  layout?: LayoutProps;
  areas?: AreasProps;
}

export interface LayoutProps {
  leftArea?: LayoutBaseConfig<LayoutSiderProps>;
}

export interface LayoutBaseConfig<T> {
  style?: CSSProperties;
  visible?: boolean;
  props?: T;
}

export interface AreasProps {
  leftArea?: AreasBaseConfig[];
}

export interface AreasBaseConfig {
  area: 'topArea' | 'leftArea' | 'rightArea' | 'toolbar' | 'bottomArea' | 'mainArea';
  name: string;
  type: string;
  content?: Component | HTMLElement | SVGAElement | VNode;
  props?: {
    align?: 'top' | 'bottom' | 'left' | 'center' | 'right';
    icon?: Component | HTMLElement | SVGAElement | VNode;
    description?: string;
    title?: string;
    visible?: boolean;
    fix?: boolean;
  };
  index?: number;
}
