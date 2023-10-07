import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import messages from '@/locales/index'

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  messages,
})

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')
