import { MaterialItem } from '@unbound_lowcode/types';
import screenShot from './screenShot.png';
export default {
  meta: {
    title: '按钮',
    description: '测试按钮',
    screenShot
  },
  schema: {
    props: {}
  },
  component: () => import('./index.vue')
} as MaterialItem;
