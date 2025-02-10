// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
        'Crimson Pro': {
          wght: '200..900',
          ital: '200..700',
        },
        'EB+Garamond': {
          wght: '200..800', // Specify weight range if needed
          ital: true        // Include italics
        }
      }
    }],
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
