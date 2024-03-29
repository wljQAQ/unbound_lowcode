import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), UnoCSS()],
  server: {
    port: 5555,
    host: '0.0.0.0'
  }
});
