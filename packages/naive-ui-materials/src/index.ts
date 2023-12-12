import { material, version } from '../package.json';
import { MaterialComponentModules, MaterialGroupModules, Materials } from '@unbound_lowcode/types';

//为了达到动态加载 并且 分类

function loadMaterial(): Materials {
  const groupModules: MaterialGroupModules = import.meta.glob('../src/*/index.ts', { eager: true });

  const componentModules: MaterialComponentModules = import.meta.glob('../src/*/*/index.ts', {
    eager: true
  });

  const componentsMap: Materials['componentsMap'] = {};
  const componentsGroupMap: Materials['componentsGroupMap'] = {};
  const componentsSchemaMap: Materials['componentsSchemaMap'] = {};

  for (const key in groupModules) {
    let [, groupFileName] = key.split('/');
    componentsGroupMap[groupFileName] = groupModules[key].default;
  }

  for (const key in componentModules) {
    const item = componentModules[key].default;
    let [, groupFileName, comFileName] = key.split('/');
    let componentName = item.meta.componentName || comFileName;
    item.meta.componentName = componentName;
    item.schema.componentName = comFileName;

    //TODO 如果组件是字符串 应该做额外处理让他转成组件
    if (typeof item.component !== 'string') {
      componentsMap[componentName] = item.component;
    }

    //schemaMap
    componentsSchemaMap[componentName] = item.schema;
    //Meta要做成分类的
    componentsGroupMap[groupFileName].children.push(item.meta);
  }

  return {
    version,
    name: material,
    componentsMap,
    componentsGroupMap,
    componentsSchemaMap
  };
}

export default loadMaterial();
