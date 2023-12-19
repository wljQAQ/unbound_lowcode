import { engineContextSymbol } from '@unbound_lowcode/constants';
import { Engine } from '@unbound_lowcode/types';
import { inject } from 'vue-demi';

export function useEngineContext() {
  return inject<Engine>(engineContextSymbol)!;
}
