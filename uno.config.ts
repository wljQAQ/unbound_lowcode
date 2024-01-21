// uno.config.ts
import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetAttributify({}),
    presetUno(),
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default)
      },
      customizations: {
        iconCustomizer(collection, icon, props) {
          // 自定义此集合中的 @iconify 图标
          if (collection === 'mdi') {
            props.width = '14px';
            props.height = '14px';
          }
        }
      },
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  shortcuts: [
    ['flex-center', 'flex items-center justify-center'],
    ['flex-between', 'flex items-center justify-between']
  ]
});
