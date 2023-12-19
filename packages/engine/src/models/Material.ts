import { MaterialModel } from '@unbound_lowcode/types';

export function useMaterialModel(): MaterialModel {
  return {
    materialsMap: {},
    add(materials) {
      this.materialsMap[materials.name] = materials;
    },
    getSchemaByNameAndPkg({ comName, pkgName }) {
      return this.materialsMap[pkgName]?.componentsSchemaMap?.[comName] || false;
    }
  };
}
