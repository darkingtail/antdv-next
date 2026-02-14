import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import { tsxResolveTypes } from 'vite-plugin-tsx-resolve-types'

export default defineConfig({
  plugins: [
    tsxResolveTypes({
      defaultPropsToUndefined: true,
    }),
    vueJsx(),
  ],
  build: {
    rolldownOptions: {
      external: [
        'vue',
      ],
      output: [
        {
          entryFileNames: 'antd-with-locales.js',
          globals: {
            'vue': 'Vue',
            'dayjs': 'dayjs',
            'dayjs/plugin/advancedFormat': 'dayjs_plugin_advancedFormat',
            'dayjs/plugin/customParseFormat': 'dayjs_plugin_customParseFormat',
            'dayjs/plugin/localeData': 'dayjs_plugin_localeData',
            'dayjs/plugin/weekday': 'dayjs_plugin_weekday',
            'dayjs/plugin/weekOfYear': 'dayjs_plugin_weekOfYear',
            'dayjs/plugin/weekYear': 'dayjs_plugin_weekYear',
          },
          exports: 'named',
          name: 'antd',
          format: 'umd',
        },
        {
          format: 'esm',
          entryFileNames: 'antd-with-locales.esm.js',
          globals: {
            'vue': 'vue',
          },
        },
      ],
    },
    emptyOutDir: false,
    lib: {
      entry: 'src/index.with-locales.ts',
      fileName: () => 'antd-with-locales.esm.js',
    },
  },
})
