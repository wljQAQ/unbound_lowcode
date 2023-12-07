import type { Component, VNode } from 'vue-demi';

export interface Areas {
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
