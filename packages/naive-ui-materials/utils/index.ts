import type { Component } from 'vue-demi';

// Record<string, () => Promise<Component>>
export function loadComponentModules() {
  const componentModules = import.meta.glob('../src/*/*/index.vue', {
    eager: true
  });

  console.log(componentModules, 'componentsModules');
  //修改一下key名
  // const modifiedModules = Object.keys(componentModules).reduce((acc, key) => {
  //   const modifiedKey = key.replace(/^.*\/([^/]+)\/.*$/, '$1');
  //   acc[modifiedKey] = componentModules[key];
  //   return acc;
  // }, {} as Record<string, () => Promise<Component>>);

  return [];
}
