import { ShallowRef } from 'vue-demi';
import { MaterialItemMeta, MaterialItemSchema, MaterialItem, MaterialItemSetter, IPublicPageSchema } from '..';

export interface IPublicNodeSchema {
  packageName: string;
  componentName: string;
  props: Record<string, any>;
  id: string;
  children?: IPublicNodeSchema[];
}

export type Node = IPublicPageSchema | IPublicNodeSchema;

export interface NodeMapItem {
  parent: IPublicNodeSchema | null | IPublicPageSchema;
  node: Node;
}

export type NodeMap = Record<string, NodeMapItem>;
export interface NodeModel {
  currentNode: ShallowRef<IPublicNodeSchema | null>;
  nodeMap: NodeMap;
  createNode(schema: MaterialItemSchema): IPublicNodeSchema | null;
  getNodeMeta(node?: IPublicNodeSchema): MaterialItemMeta | null;
  getNodeSetter(node?: IPublicNodeSchema): MaterialItemSetter | null;
  setCurrentNode(node: IPublicNodeSchema | string): void;
  addNodeMap(node: Node, parent: Node | null): void;
  getNodeMapItem(id?: string): NodeMapItem | void;
  updateNode(id: string, nextNode: IPublicNodeSchema): void;
  getClosestNodeDomByDom(dom: HTMLElement): HTMLElement | null;
  getNodeIdByDom(el: HTMLElement): string | void;
  getNodeByDom(dom: HTMLElement): NodeMapItem | void;
  isPageNode(node: IPublicNodeSchema | IPublicPageSchema): boolean;
}
