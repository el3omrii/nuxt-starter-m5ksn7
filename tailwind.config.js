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
        primary: '#2FA4FF',
        secondary: '#1B262C',
        blackish: '#393E46',
        customgray: '#EEEEEE',
        navy: '#0A4D68',
        blue: '#088395',
      },
    },
  },
  plugins: [],
};
