export default {
  // SERVER-SIDE RENDERING MODE: https://go.nuxtjs.dev/ssr-mode
  // true: Server-side rendering enabled
  // false: No server-side rendering (only client-side rendering)
  ssr: true,

  // CONFIG TARGET: https://go.nuxtjs.dev/config-target
  // 'server': For server side rendering
  // 'static': For static sites
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

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/eslint
    '@nuxtjs/google-fonts', // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-analytics', // https://google-analytics.nuxtjs.org/
    '@nuxt/image', // https://image.nuxtjs.org/
    '@nuxt/components',
    'nuxt-purgecss',
    '@nuxtjs/style-resources',
  ],

  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      Oswald: [200, 300, 400, 500, 600, 700], // exhaustive
      Lato: [300, 400, 700, 900], // 200
      'Open+Sans': [300, 400, 600, 700, 800], // no 500, no 900
    },
  },

  googleAnalytics: {
    id: 'UA-134680170-1',
  },

  image: {},

  // Auto import components: https://go.nuxtjs.dev/config-components w/@nuxt/components https://github.com/nuxt/components
  components: true,

  // purgeCSS: https://purgecss.com/guides/nuxt.html
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/], // PurgeCSS will treat fontawesome classes inserted on render as unused and remove them unless whitelisted.
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/content', // https://go.nuxtjs.dev/content
    'nuxt-fontawesome',
    '@nuxtjs/robots', // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/sitemap', // https://sitemap.nuxtjs.org/guide/setup
    '@nuxtjs/pwa', // https://pwa.nuxtjs.org/
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  // '@/assets/scss/main.scss'
  // css: [],

  styleResources: {
    scss: [
      '@/assets/scss/variables.scss',
      '@/assets/scss/main.scss',
      '@/assets/scss/mixins.scss',
      '@/assets/scss/theme/_utilities.scss',
      '@/assets/scss/theme/_base.scss',
    ],
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  // https://www.npmjs.com/package/nuxt-fontawesome
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/pro-regular-svg-icons',
        icons: ['faAdjust', 'faChevronLeft', 'faChevronRight', 'faFolders'],
      },
      {
        set: '@fortawesome/pro-light-svg-icons',
        icons: [
          'faConciergeBell',
          'faHandshake',
          'faUserAstronaut',
          'faHashtag',
          'faCode',
          'faGraduationCap',
          'faRss',
          'faTimes',
          'faChevronDoubleRight',
          'faTrophyAlt',
          'faThunderstormMoon',
          'faBriefcase',
          'faEnvelope',
          'faHandsHeart',
          'faPencil',
          'faBars',
        ],
      },
      {
        set: '@fortawesome/pro-duotone-svg-icons',
        icons: ['faFileUser', 'faClipboardListCheck', 'faBrowser'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: [
          'faStackOverflow',
          'faCodepen',
          'faGithub',
          'faYoutube',
          'faLinkedinIn',
        ],
      },
      {
        set: '@fortawesome/pro-solid-svg-icons',
        icons: ['faGraduationCap', 'faCheck', 'faHomeLgAlt', 'faRss'],
      },
    ],
  },

  pwa: {
    manifest: {
      name: 'CRISTIN.IO',
      short_name: 'CRISTIN.IO',
      lang: 'en',
      description: `Cristin O'Connor's Front End Software Engineering Résumé, Blog and Portfolio Site`,
      theme_color: '#345345',
    },
  },

  router: {
    middleware: ['redirects'], // runs before every route on both client & server
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: {
      ignoreOrder: true, // critical CSS
    },
    // analyze: true,
  },

  // fallback to the generated 404.html when in SPA mode instead of Netlify's 404 page.
  generate: {
    fallback: true,
  },
}
