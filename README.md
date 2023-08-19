# Nuxt Scroll Spy Composable

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt module for @aleios10/vue3-scroll-spy-composable

<!-- - [🏀 Online playground](https://stackblitz.com/github/aleios/nuxt-scroll-spy-composable?file=playground%2Fapp.vue) -->

## Quick Setup

1. Add `@aleios10/nuxt-scroll-spy-composable` dependency to your project

```bash
# Using pnpm
pnpm add -D @aleios10/nuxt-scroll-spy-composable

# Using yarn
yarn add --dev @aleios10/nuxt-scroll-spy-composable

# Using npm
npm install --save-dev @aleios10/nuxt-scroll-spy-composable
```

2. Add `@aleios10/nuxt-scroll-spy-composable` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@aleios10/nuxt-scroll-spy-composable'
  ]
})
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@aleios10/nuxt-scroll-spy-composable/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@aleios10/nuxt-scroll-spy-composable

[npm-downloads-src]: https://img.shields.io/npm/dm/@aleios10/nuxt-scroll-spy-composable.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@aleios10/nuxt-scroll-spy-composable

[license-src]: https://img.shields.io/npm/l/@aleios10/nuxt-scroll-spy-composable.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@aleios10/nuxt-scroll-spy-composable

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
