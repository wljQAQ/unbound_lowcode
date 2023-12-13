import { IPublicNodeSchema } from '.';

export interface IPublicPageSchema {
  id: string;
  name: string;
  version: string;
  componentName: string;
  props: Record<string, any>;
  description: string;
  state: Record<string, any>;
  dataSource: Record<string, any>;
  route: string;
  methods: Record<string, any>;
  children: IPublicNodeSchema[];
}

export interface PageModel {
  schema: IPublicPageSchema;
}
