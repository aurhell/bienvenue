import './src/assets/main.css'

import { createPinia } from 'pinia'
import { defineSetupVue3 } from '@histoire/plugin-vue'

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  // Vue plugin
  app.use(createPinia())
})
