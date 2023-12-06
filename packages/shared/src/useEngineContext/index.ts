import { engineContextSymbol } from '@unbound_lowcode/constants';
import { inject } from 'vue-demi';

export function useEngineContext() {
  return inject(engineContextSymbol);
}
