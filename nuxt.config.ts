import { defineNuxtConfig } from 'nuxt';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // モジュールの設定
  modules: ['@nuxt/http'],

  // HTTPモジュールの設定
  http: {
    baseURL: 'https://e5z186clzl.microcms.io/api/v1',
    headers: {
      'X-API-KEY': 'nFLZ2FIqZSDz5D4BzUs8heoT5R7kMBW4yhsF',
    },
  },

  // 静的なビルドの設定
  nitro: {
    preset: 'static',
  },

  // アプリの設定
  app: {
    head: {
      title: 'My Nuxt 3 Project',
      meta: [
        { name: 'description', content: 'A static site built with Nuxt 3 and microCMS' },
      ],
    },
  },
});
