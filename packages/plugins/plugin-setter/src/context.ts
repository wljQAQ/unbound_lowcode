import { IPublicNodeSchema, MaterialItemSetter, MaterialItemMeta } from '@unbound_lowcode/types';
import { ComputedRef, inject, provide } from 'vue-demi';

export interface SetterContext {
  schema: ComputedRef<IPublicNodeSchema>;
  setter: ComputedRef<MaterialItemSetter>;
  meta: ComputedRef<MaterialItemMeta>;
}

const SETTER_PROVIDER = 'setter_provider';

export function useSetterProvider(target: SetterContext) {
  provide(SETTER_PROVIDER, target);
}

export function useSetterInjection() {
  return inject<SetterContext>(SETTER_PROVIDER)!;
}
