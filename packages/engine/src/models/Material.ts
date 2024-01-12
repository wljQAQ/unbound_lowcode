import { MaterialModel } from '@unbound_lowcode/types';

export function useMaterialModel(): MaterialModel {
  return {
    materialsMap: {},
    add(materials) {
      this.materialsMap[materials.name] = materials;
    },
    getSchemaByNameAndPkg({ componentName, packageName }) {
      return this.materialsMap[packageName]?.componentsSchemaMap?.[componentName] || false;
    }
  };
}
