export default {
  // Enable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: `Cristin O'Connor, Front End Software Engineer`,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: `Resume, Portfolio, and Blog from Cristin O'Connor, a Utah based Front End Software Engineer.`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ['@/assets/scss/main.scss'],

  styleResources: {
    scss: '@/assets/scss/main.scss',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components w/@nuxt/components https://github.com/nuxt/components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/eslint
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics',
    '@nuxt/image',
    '@nuxt/components',
  ],

  image: {},

  googleAnalytics: {
    id: 'UA-134680170-1',
  },

  googleFonts: {
    families: {
      Oswald: [300, 400, 500, 600, 700],
      Lato: [300, 400, 700, 900],
      'Open+Sans': [300, 400, 500, 600, 700, 800, 900],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios', // https://go.nuxtjs.dev/axios
    '@nuxt/content', // https://go.nuxtjs.dev/content
    'nuxt-fontawesome',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  router: {
    middleware: ['redirects'], // runs before every route on both client & server
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
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
