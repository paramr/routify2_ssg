import { svelte } from '@sveltejs/vite-plugin-svelte';
const viteMainJs = require('vite-main-js')
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
      port: 5000,
      host: '0.0.0.0',
  },

  plugins: [
    viteMainJs(),
    svelte({
      preprocess: [],
      emitCss: true,
    }),
  ],
});
