function createSetterMap() {
  const setterMap = {};

  const setterComMap = import.meta.glob('./*/index.vue', { eager: true });

  for (const key in setterComMap) {
    const item = setterComMap[key].default;
    let [, fileName] = key.split('/');
    setterMap[fileName] = item;
  }

  return setterMap;
}

export const setterMap = createSetterMap();
