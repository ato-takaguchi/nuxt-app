import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  http: {
    baseURL: 'https://e5z186clzl.microcms.io/api/v1',
    headers: {
      'X-API-KEY': 'nFLZ2FIqZSDz5D4BzUs8heoT5R7kMBW4yhsF',
    },
  },
  devtools: { enabled: true },
});
