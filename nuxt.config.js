export default {
  // Enable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: true, // universal
  // ssr: false // spa
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  // target: 'server',
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: `Cristin O'Connor | Front End Software Engineer`,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Front End Software Engineer Cristin O'Connor's portfolio, blog and résumé site`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    path: '~/components/global/*.vue',
    ignore: ['~/compnoents/*.vue'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-fontawesome',
  ],

  googleFonts: {
    families: {
      Oswald: [300, 400, 500, 600, 700],
      Lato: [300, 400, 700, 900],
      'Open+Sans': [300, 400, 500, 600, 700, 800, 900],
      'Source+Code+Pro': [200, 300, 400, 500, 600, 700, 900],
    },
  },

  bootstrapVue: {
    icons: true,
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },

  styleResources: {
    scss: '@/assets/scss/main.scss',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    nestedProperties: ['categories.slug'],
    fullTextSearchFields: ['title', 'summary'],
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // fallback to the generated 404.html when in SPA mode instead of Netlify's 404 page.
  generate: {
    fallback: true,
  },
}
