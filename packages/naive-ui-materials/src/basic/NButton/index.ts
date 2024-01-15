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
  setter: {
    title: '按钮',
    props: [
      {
        name: '测试',
        propType: 'string',
        description: '',
        defaultValue: '按钮'
      }
    ]
  },
  component: () => import('./index.vue')
} as MaterialItem;
