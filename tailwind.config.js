/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        customblack: '#222831',
        blackish: '#393E46',
        customgray: '#EEEEEE',
        navy: '#0A4D68',
        teal: '#00ADB5',
        blue: '#088395',
      },
    },
  },
  plugins: [],
};
