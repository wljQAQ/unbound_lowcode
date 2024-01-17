import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/

//远程加载组件的配置
export default defineConfig({
  plugins: [
    vue(),
    dts({
      rollupTypes: true
    }),
    vueJsx()
  ],
  define: {
    'process.env': {}
  },
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'NaiveUIMaterials',
      fileName: format => `naive-ui-materials.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
