import { MaterialItem } from '@unbound_lowcode/types';
import screenShot from './screenShot.png';
export default {
  meta: {
    title: '输入框',
    description: '测试输入框',
    screenShot,
  },
  schema: {
    componentName: 'NInput',
    props: {}
  },
  component: () => import('./index.vue')
} as MaterialItem;
