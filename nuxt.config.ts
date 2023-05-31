// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    API_URL: "http://api.koratv.com/v1/",
    public: {
      API_URL: "http://api.koratv.com/v1/",
    }
  },
  modules: ['nuxt-swiper'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  plugins: ['~/plugins/directives.js'],
  css: ['@/assets/css/main.css', 'swiper/css', 'swiper/css/navigation'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
