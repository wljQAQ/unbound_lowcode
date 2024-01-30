import { PageModel, IPublicPageSchema } from '@unbound_lowcode/types';
import { version } from '../../package.json';
import { reactive, watch, ref, customRef, shallowRef, triggerRef } from 'vue-demi';
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
  children: [
    {
      id: 'Node_Jgeod7R',
      componentName: 'NButton',
      packageName: 'NaiveUI',
      props: {
        content: '测试按钮'
      }
    }
  ]
};

export function usePageModel(initSchema?: IPublicPageSchema): PageModel {
  // const [schema, updateSchema] = useImmer<IPublicPageSchema>(initSchema || DEFAULT_PAGE_SCHEMA);

  // const schema = reactive(initSchema || DEFAULT_PAGE_SCHEMA);
  const schema = ref(initSchema || DEFAULT_PAGE_SCHEMA);
  // const schema = shallowRef(initSchema || DEFAULT_PAGE_SCHEMA);

  console.log(schema);
  window.schema = schema.value;

  watch(
    schema,
    () => {
      console.log('watch ');
      // window.SimulatorRenderer.updateSchema();
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
      triggerRef(schema);
      window.SimulatorRenderer.updateSchema(Object.assign({}, schema.value));
    }
  };
}
