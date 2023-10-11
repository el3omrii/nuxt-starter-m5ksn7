// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-gtag', ['@nuxtjs/google-adsense', {
    id: 'ca-pub-5739295408292360'
  }]
  ],
  gtag: {
    id: 'G-D5TKGCJPN6'
  },
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('media-') || tag === 'hls-video',
    },
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      API_URL: process.env.API_BASE_URL,
      PUSHER_KEY: process.env.PUSHER_KEY,
      KEY1: process.env.KEY1,
      KEY2: process.env.KEY2,
      KEY3: process.env.KEY3,
      KEY4: process.env.KEY4,
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "ar"
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cairo:400,700&subset=arabic&display=swap'},
        {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
        {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
        {rel: 'manifest', href:'/site.webmanifest'}
      ]
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
