import { ICreateBaseEnginePlugin, IBaseEnginePlugin } from '@unbound_lowcode/types';
import { default as Setter } from './Setter.vue';
import { markRaw } from 'vue-demi';

export const setterPlugin: () => IBaseEnginePlugin = () => {
  return {
    name: 'setterPlugin',
    install(ctx) {
      const { skeleton } = ctx;

      skeleton.add({
        area: 'rightArea',
        type: '',
        name: 'test',
        content: markRaw(<Setter></Setter>),
        props: {
          title: '设置器',
          description: '物料设置器',
        }
      });
    }
  };
};
