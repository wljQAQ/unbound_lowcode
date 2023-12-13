import { PageModel, IPublicPageSchema } from '@unbound_lowcode/types';
import { version } from '../../package.json';

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
      packageName: 'NaiveUI',
      componentName: 'NButton',
      props: {
        content: '测试按钮',
        type: 'error'
      },
      id: Date.now().toString()
    }
  ]
};

export function usePageModel(initSchema?: IPublicPageSchema): PageModel {
  const schema = initSchema || DEFAULT_PAGE_SCHEMA;

  return {
    schema
  };
}
