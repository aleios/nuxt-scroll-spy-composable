export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['../src/module'],
  scrollSpy: {},
  devtools: { enabled: true },
  imports: {
    autoImport: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
