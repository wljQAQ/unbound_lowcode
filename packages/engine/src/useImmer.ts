import { produce } from 'immer';
import { shallowRef } from 'vue';

export function useImmer<T>(baseState: T) {
  const state = shallowRef(baseState);
  const update = (updater: T) => {
    state.value = produce(state.value, updater);
  };

  return [state, update];
}
