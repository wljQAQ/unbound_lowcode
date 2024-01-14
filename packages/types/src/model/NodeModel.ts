import { MaterialItemMeta, MaterialItemSchema } from '..';

export interface IPublicNodeSchema {
  packageName: string;
  componentName: string;
  props: Record<string, any>;
  id: string;
}

export interface NodeModel {
  schema: IPublicNodeSchema | null;
  createNode(schema: MaterialItemSchema): IPublicNodeSchema | null;
  getNodeMeta(node?: IPublicNodeSchema): MaterialItemMeta | null;
  getNodeSetter(node?: IPublicNodeSchema): null;
  setCurrentNode(node: IPublicNodeSchema): void;
}
