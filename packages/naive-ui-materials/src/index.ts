import type { Component } from 'vue';
const componentModules: Record<string, () => Promise<Component>> = import.meta.glob(
  './*/index.vue'
);

console.log(import.meta.glob('./*/*/index.vue'));

//修改一下key名
const modifiedModules = Object.keys(componentModules).reduce((acc, key) => {
  const modifiedKey = key.replace(/^.*\/([^/]+)\/.*$/, '$1');
  acc[modifiedKey] = componentModules[key];
  return acc;
}, {} as Record<string, () => Promise<Component>>);

export default modifiedModules;
