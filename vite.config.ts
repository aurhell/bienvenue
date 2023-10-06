import { URL, fileURLToPath } from 'node:url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
    plugins: [
      vue({
        script: {
          defineModel: true,
        },
      }),

      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'vue/macros',
          '@vueuse/head',
          'vitest',
          'pinia',
        ],
        dts: 'src/auto-imports.d.ts',
        dirs: ['.src/App.vue', './src/app/**/**/'],
        vueTemplate: true,
        eslintrc: {
          enabled: true,
        },
      }),

      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md', 'ts'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: 'src/components.d.ts',
        dirs: ['./src/components/**/'],
        resolvers: [
          IconsResolver(),
        ],
      }),

      VueI18nPlugin({
        include: [path.resolve(__dirname, 'locales/**')],
      }),

      Icons({
        compiler: 'vue3',
        autoInstall: true,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
