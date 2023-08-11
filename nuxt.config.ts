// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('media-'),
    },
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_BASE_URL,
      PUSHER_KEY: process.env.PUSHER_KEY
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  plugins: [//{src: '~/plugins/pusher.js', ssr: false},
    '~/plugins/directives.js'],
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
