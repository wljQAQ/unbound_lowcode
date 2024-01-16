import { ShallowRef } from 'vue-demi';
import { MaterialItemMeta, MaterialItemSchema, MaterialItem, MaterialItemSetter } from '..';

export interface IPublicNodeSchema {
  packageName: string;
  componentName: string;
  props: Record<string, any>;
  id: string;
}

export interface NodeMapItem {
  parent: IPublicNodeSchema;
  node: IPublicNodeSchema;
}

export type NodeMap = Record<string, NodeMapItem>;
export interface NodeModel {
  currentNode: ShallowRef<IPublicNodeSchema | null>;
  nodeMap: NodeMap;
  createNode(schema: MaterialItemSchema): IPublicNodeSchema | null;
  getNodeMeta(node?: IPublicNodeSchema): MaterialItemMeta | null;
  getNodeSetter(node?: IPublicNodeSchema): MaterialItemSetter | null;
  setCurrentNode(node: IPublicNodeSchema | string): void;
  addNodeMap(node: IPublicNodeSchema, parent: IPublicNodeSchema): void;
  getNodeMapItem(id?: string): NodeMapItem | void;
}
