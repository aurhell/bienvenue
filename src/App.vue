<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div
    class="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-slate-100"
  >
    <a href="https://github.com/aurhell/bienvenue" class="absolute right-0 top-0"><img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"></a>
    <HelloWorld :msg="`${t('common.welcome')} 👋`" />

    <p class="mx-auto mt-6 text-center text-xl">
      This is a starter template made by
      <Link url="https://github.com/aurhell">
        @aurhell
      </Link>, included:
    </p>
    <p class="mx-auto mt-6 flex flex-col">
      <ul class="list-disc">
        <li>
          <Link url="https://vuejs.org/">
            <i-logos-vitejs class="mr-1 inline-block" />Vite
          </Link>
        </li>
        <li>
          <Link url="https://vitejs.dev/">
            <i-logos-vue class="mr-1 inline-block" />Vue 3
          </Link>
        </li>
        <li>
          <Link url="https://www.typescriptlang.org/">
            <i-logos-typescript-icon class="mr-1 inline-block" />Typescript
          </Link>
        </li>
        <li>
          <Link url="https://tailwindcss.com/">
            <i-logos-tailwindcss-icon class="mr-1 inline-block" />Tailwind
          </Link>
        </li>
        <li>
          <Link url="https://pinia.vuejs.org/">
            🍍 Pinia
          </Link>
        </li>
        <li>
          <Link url="https://vue-i18n.intlify.dev/">
            🌐 Vue I18n
          </Link>
        </li>
        <li>
          <Link url="https://router.vuejs.org/">
            🛣️ Vue Router
          </Link>
        </li>
        <li>
          <Link url="https://histoire.dev/">
            📖 Histoire
          </Link>
        </li>
        <li>
          <Link url="https://vitest.dev/">
            <i-logos-vitest class="mr-1 inline-block" />Vitest
          </Link>
        </li>
        <li>
          <Link url="https://vueuse.org/">
            <i-logos-vueuse class="mr-1 inline-block" />VueUse
          </Link>
        </li>
        <li>
          <Link url="https://github.com/antfu/unplugin-auto-import">
            📥 Autoimport
          </Link>
        </li>
      </ul>
    </p>
  </div>
</template>
