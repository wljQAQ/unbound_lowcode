import { PageModel, IPublicPageSchema } from '@unbound_lowcode/types';
import { version } from '../../package.json';
import { reactive, watch, ref, customRef, shallowRef, triggerRef } from 'vue';
import { useImmer } from '../useImmer';

const DEFAULT_PAGE_SCHEMA: IPublicPageSchema = {
  id: Date.now().toString(),
  version,
  name: '未命名页面',
  componentName: 'Page',
  props: {},
  description: '',
  state: {},
  dataSource: {},
  route: '/',
  methods: {},
  children: []
};

export function usePageModel(initSchema?: IPublicPageSchema): PageModel {
  const schema = shallowRef(initSchema || DEFAULT_PAGE_SCHEMA);

  watch(
    schema,
    node => {
      console.log(node, '工作台的schema变化');
    },
    { deep: true }
  );

  return {
    schema: schema.value,
    insertNodeToPage(node) {
      schema.value.children.push(node);
      return schema.value;
    },
    updateSchema() {
      // triggerRef(schema);
      window.SimulatorRenderer.updateSchema();
    }
  };
}
