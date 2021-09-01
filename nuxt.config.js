import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  head: {
    titleTemplate: 'myPortfolio-front',
    title: 'myPortfolio-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: ['@/plugins/axios.js'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify', '@nuxtjs/dotenv'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/auth-next'],

  axios: {
    baseUrl: process.env.BACKEND_URL,
    credentials: true,
  },

  auth: {
    resetOnError: true,
    localStorage: true,
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/sign-in',
            method: 'post',
            propertyName: 'token',
          },
          logout: {
            url: 'auth/sign-out',
            method: 'post',
          },
          user: {
            url: 'auth/get-user',
            method: 'post',
            propertyName: false,
          },
        },
      },
    },
    redirect: {
      login: '/user/sign-in',
      logout: '/user/sign-in',
      home: '/',
    },
  },

  pwa: {
    manifest: {
      lang: 'ru',
    },
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {},
}
