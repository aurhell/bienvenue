<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-slate-100"
  >
    <a href="https://github.com/aurhell/bienvenue" class="absolute right-0 top-0"><img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"></a>
    <HelloWorld :msg="`${t('common.welcome')} 👋`" />

    <p class="text-center mx-auto mt-6 text-xl">
      This is a starter template made by
      <Link url="https://github.com/aurhell">@aurhell</Link>, included:
    </p>
    <p class="flex flex-col mx-auto mt-6">
      <ul class="list-disc">
        <li><Link url="https://vuejs.org/"><i-logos-vitejs class="inline-block mr-1" />Vite</Link></li>
        <li><Link url="https://vitejs.dev/"><i-logos-vue class="inline-block mr-1" />Vue 3</Link></li>
        <li><Link url="https://www.typescriptlang.org/"><i-logos-typescript-icon class="inline-block mr-1"/>Typescript</Link></li>
        <li><Link url="https://tailwindcss.com/"><i-logos-tailwindcss-icon class="inline-block mr-1" />Tailwind</Link></li>
        <li><Link url="https://pinia.vuejs.org/">🍍 Pinia</Link></li>
        <li><Link url="https://vue-i18n.intlify.dev/">🌐 Vue I18n</Link></li>
        <li><Link url="https://router.vuejs.org/">🛣️ Vue Router</Link></li>
        <li><Link url="https://histoire.dev/">📖 Histoire</Link></li>
        <li><Link url="https://vitest.dev/"><i-logos-vitest class="inline-block mr-1" />Vitest</Link></li>
        <li><Link url="https://vueuse.org/"><i-logos-vueuse class="inline-block mr-1" />VueUse</Link></li>
        <li><Link url="https://github.com/antfu/unplugin-auto-import">📥 Autoimport</Link></li>
      </ul>
    </p>
  </div>
</template>
