export interface IPublicNodeSchema {
  packageName: string;
  componentName: string;
  props: Record<string, any>;
  id: string;
}

export interface NodeModel {
  schema: IPublicNodeSchema;
  getSchemaByMeta(): IPublicNodeSchema;
}
