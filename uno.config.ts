// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetAttributify({}), presetUno()],
  shortcuts: [['flex-center', 'flex items-center justify-center']]
});
