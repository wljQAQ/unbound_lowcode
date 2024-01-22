import { Component } from 'vue';

interface SetterModule {
  default: Component;
}

type SetterMap = Record<string, Component>;

function createSetterMap(): SetterMap {
  const setterMap: SetterMap = {};

  const setterComMap = import.meta.glob<SetterModule>('./*/index.vue', { eager: true });

  for (const key in setterComMap) {
    const item = setterComMap[key].default;
    let [, fileName] = key.split('/');
    setterMap[fileName] = item;
  }

  return setterMap;
}

export const setterMap = createSetterMap();
