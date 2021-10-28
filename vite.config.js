import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9090,
  },
  resolve: {
    alias: [
      { find: 'src', replacement: 'src' },
      { find: 'app', replacement: '*' },
      { find: 'components', replacement: 'src/components' },
      { find: 'layouts', replacement: 'src/layouts' },
      { find: 'pages', replacement: 'src/pages' },
      { find: 'assets', replacement: 'src/assets' },
      { find: 'boot', replacement: 'src/boot' },
      { find: 'vue$', replacement: 'node_modules/vue/dist/vue.runtime.esm-bundler.js' },
    ],
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),

    quasar({
      sassVariables: 'src/quasar-variables.sass',
    }),
  ],
})
