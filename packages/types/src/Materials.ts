import { Component } from 'vue-demi';

export type MaterialComponentModules = Record<string, { default: MaterialItem }>;
export type MaterialGroupModules = Record<string, { default: MaterialItem }>;

//物料组件
export type MaterialComponent = () => Promise<Component>;

//三者的componentName应该是一致的
export interface MaterialItem {
  schema: MaterialItemSchema;
  meta: MaterialItemMeta;
  component: MaterialComponent | string;
  //不写默认就是文件名
  componentName?: string;
}

export interface MaterialItemMeta {
  title?: string;
  description?: string;
  document?: string;
  screenShot?: string;
  componentName?: string;
}

export interface MaterialItemSchema {
  materialName?: string;
  componentName?: string;
  props?: Record<string, any>;
  id?: string;
}

export interface MaterialGroup {
  title: string;
  groupName: string;
  children: MaterialItemMeta[];
}

export interface Materials {
  version: string;
  name: string;
  //ESModules组件
  components: Record<string, () => Promise<Component>>;
  //用来描述组件的  分类 -》 组件描述
  componentsMeta: Record<string, MaterialGroup>;
}
