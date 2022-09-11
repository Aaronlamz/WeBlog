import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module'],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "@/assets/style/variables.less";',
        },
      },
    },
  },
});
