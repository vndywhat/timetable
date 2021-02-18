export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s | ОМГУПС. 3 курс. Группа 18д',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Удобное расписание группы 18д. 3 курс, ОмГУПС',
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/images/favicon/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/images/favicon/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/images/favicon/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/images/favicon/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/images/favicon/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/images/favicon/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/images/favicon/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/images/favicon/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/favicon/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png',
        href: '/images/favicon/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/images/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        sizes: '96x96',
        type: 'image/png',
        href: '/images/favicon/favicon-96x96.png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/images/favicon/favicon-16x16.png',
      },
    ],
  },
  loading: { color: '#edc331' },
  loadingIndicator: {
    name: 'folding-cube',
    color: '#edc331',
    background: '#2d2d2d',
  },
  /*
   ** Global CSS
   */
  css: ['vuesax/dist/vuesax.css', 'boxicons/css/boxicons.min.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/vuesax'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: '###',
          authDomain: 'omgups.firebaseapp.com',
          databaseURL: 'https://omgups.firebaseio.com',
          projectId: 'omgups',
          storageBucket: 'omgups.appspot.com',
          messagingSenderId: '###',
          appId: '###',
          measurementId: '###',
        },
        services: {
          firestore: true,
        },
      },
    ],
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  pwa: {
    meta: {
      title: 'Расписание. ОМГУПС',
      description: 'Удобное расписание группы 18д. 3 курс, ОмГУПС',
      author: `Vladislav Dobrorodny <mau5d@yandex.ru>`,
    },
    icon: {
      source: '/images/favicon/android-icon-192x192.png',
      fileName: 'android-icon-192x192.png',
    },
    manifest: {
      name: 'Расписание. ОМГУПС',
      description: 'Удобное расписание группы 18д. 3 курс, ОмГУПС',
      lang: 'ru',
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#FFFFFF',
      theme_color: '#F8F8F8',
      icons: [
        {
          src: '/images/favicon/android-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  },
}
