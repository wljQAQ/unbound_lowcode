import { IPublicNodeSchema } from '.';
import type { Reactive } from 'vue';

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
  schema: Reactive<IPublicPageSchema>;
  insertNodeToPage: (node: IPublicNodeSchema) => void;
}
