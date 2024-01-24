import { PageModel, IPublicPageSchema } from '@unbound_lowcode/types';
import { version } from '../../package.json';
import { reactive, watch } from 'vue-demi';

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
  children: [
    {
      id: 'Node_Jgeod7R',
      componentName: 'NButton',
      packageName: 'NaiveUI',
      props: {
        children: '测试按钮'
      }
    }
  ]
};

export function usePageModel(initSchema?: IPublicPageSchema): PageModel {
  const schema = reactive(initSchema || DEFAULT_PAGE_SCHEMA);
  window.schema = schema;
  watch(
    schema,
    newV => {
      console.log(newV, 'schema改变');
    },
    { deep: true }
  );

  watch(
    window.schema,
    newV => {
      console.log('window.schema', newV);
    },
    { deep: true }
  );

  return {
    schema,
    insertNodeToPage(node) {
      schema.children.push(node);
    }
  };
}
