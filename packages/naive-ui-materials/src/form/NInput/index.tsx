import { MaterialItem } from '@unbound_lowcode/types';
import screenShot from './screenShot.png';
import { markRaw } from 'vue';
export default {
  meta: {
    title: '输入框',
    description: '测试输入框',
    screenShot,
    icon: markRaw(
      <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7273" width="200" height="200">
        <path
          d="M896 224H128c-35.2 0-64 28.8-64 64v448c0 35.2 28.8 64 64 64h768c35.2 0 64-28.8 64-64V288c0-35.2-28.8-64-64-64z m0 480c0 19.2-12.8 32-32 32H160c-19.2 0-32-12.8-32-32V320c0-19.2 12.8-32 32-32h704c19.2 0 32 12.8 32 32v384z"
          fill="#333333"
          p-id="7274"
        ></path>
        <path
          d="M224 352c-19.2 0-32 12.8-32 32v256c0 16 12.8 32 32 32s32-12.8 32-32V384c0-16-12.8-32-32-32z"
          fill="#333333"
          p-id="7275"
        ></path>
      </svg>
    )
  },
  schema: {
    props: {}
  },
  setter: {
    title: '输入框',
    props: [
      {
        name: '文本',
        propType: 'string',
        description: '',
        defaultValue: '这是输入框'
      }
    ]
  },
  component: () => import('./index.vue')
} as MaterialItem;
