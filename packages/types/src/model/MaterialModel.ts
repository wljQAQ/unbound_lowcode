import { Materials, MaterialItemSchema } from '..';

export interface IPublicMaterialsMap {
  [key: string]: Materials;
}

export interface MaterialModel {
  materialsMap: IPublicMaterialsMap;
  add(materials: Materials): void;
  getSchemaByNameAndPkg({ componentName, packageName }: { componentName: string; packageName: string }): MaterialItemSchema | false;
}
