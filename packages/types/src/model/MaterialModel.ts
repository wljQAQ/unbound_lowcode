import { Materials, MaterialItemSchema } from '..';

export interface MaterialModel {
  materialsMap: {
    [key: string]: Materials;
  };
  add(materials: Materials): void;
  getSchemaByNameAndPkg({ comName, pkgName }: { comName: string; pkgName: string }): MaterialItemSchema | false;
}
