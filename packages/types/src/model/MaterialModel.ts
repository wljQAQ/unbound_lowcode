import { Materials, MaterialItemSchema, MaterialItemMeta } from '..';

export interface IPublicMaterialsMap {
  [key: string]: Materials;
}

export interface MaterialModel {
  materialsMap: IPublicMaterialsMap;
  add(materials: Materials): void;
  getSchemaByNameAndPkg({ componentName, packageName }: { componentName: string; packageName: string }): MaterialItemSchema | null;
  getMetaByNameAndPkg({ componentName, packageName }: { componentName: string; packageName: string }): MaterialItemMeta | null;
  getSetterByNameAndPkg({ componentName, packageName }: { componentName: string; packageName: string }): MaterialItemSchema | null;
}
