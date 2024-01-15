import { MaterialModel } from '@unbound_lowcode/types';

export function useMaterialModel(): MaterialModel {
  return {
    materialsMap: {},
    add(materials) {
      this.materialsMap[materials.name] = materials;
    },
    getSchemaByNameAndPkg({ componentName, packageName }) {
      if (!componentName || !packageName) return null;
      return this.materialsMap[packageName]?.componentsMetaMap?.[componentName].schema;
    },
    getMetaByNameAndPkg({ componentName, packageName }) {
      if (!componentName || !packageName) return null;
      return this.materialsMap[packageName]?.componentsMetaMap?.[componentName].meta;
    },
    getSetterByNameAndPkg({ componentName, packageName }) {
      if (!componentName || !packageName) return null;
      return this.materialsMap[packageName]?.componentsMetaMap?.[componentName].setter;
    }
  };
}
