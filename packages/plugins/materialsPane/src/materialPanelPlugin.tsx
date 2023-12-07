import { ICreateBaseEnginePlugin } from '@unbound_lowcode/types';
import { default as MaterialsPane } from './Materials.vue';
import { markRaw } from 'vue-demi';

export const materialPanelPlugin: ICreateBaseEnginePlugin = () => {
  return {
    name: 'materialPanelPlugin',
    install(ctx) {
      const { skeleton } = ctx;

      skeleton.add({
        area: 'leftArea',
        type: '',
        name: 'test',
        content: markRaw(<MaterialsPane></MaterialsPane>),
        props: {
          title: '物料库',
          description: '物料组件',
          icon: markRaw(<span class="i-mdi:ab-testing"></span>)
        }
      });
      console.log(ctx, 'materialPanelPlugin');
    }
  };
};
