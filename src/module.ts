import { defineNuxtModule, addImports } from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-scroll-spy-composable',
    configKey: 'scrollSpy',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {},
  setup () {
    addImports({
      name: 'useScrollSpy',
      as: 'useScrollSpy',
      from: '@aleios10/vue3-scroll-spy-composable'
    })
  }
})
