export default {
  // SERVER-SIDE RENDERING MODE: https://go.nuxtjs.dev/ssr-mode
  ssr: true, // true: Server-side rendering enabled, false: No server-side rendering (only client-side rendering)

  // CONFIG TARGET: https://go.nuxtjs.dev/config-target
  target: 'static', // 'server': For server side rendering and 'static': For static sites

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: {
    color: '#5eede1',
    height: '4px',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/prism.js', mode: 'client' },
    { src: './plugins/bootstrap-vue.js' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image', // https://image.nuxtjs.org/
    '@nuxt/components', // https://github.com/nuxt/components#readme
    '@nuxtjs/style-resources', // https://github.com/nuxt-community/style-resources-module#readme
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/eslint
    '@nuxtjs/google-fonts', // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-analytics', // https://google-analytics.nuxtjs.org/
  ],

  googleFonts: {
    display: 'swap',
    preload: true,
    prefetch: true,
    families: {
      Oswald: [200, 300, 400, 500, 700],
      Lato: [100, 300, 400, 700, 900],
      Pacifico: [400],
    },
  },

  googleAnalytics: {
    id: 'UA-134680170-1',
  },

  image: {},

  // Auto import components: https://go.nuxtjs.dev/config-components w/@nuxt/components https://github.com/nuxt/components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxt/content', // https://go.nuxtjs.dev/content
    'nuxt-fontawesome',
    '@nuxtjs/robots', // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/sitemap', // https://sitemap.nuxtjs.org/guide/setup
  ],

  styleResources: {
    scss: [
      '@/assets/scss/index.scss', // Barrel file
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
        icons: [
          'faAdjust',
          'faChevronLeft',
          'faChevronRight',
          'faFolders',
          'faPhoneLaptop',
        ],
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
          'faHandsHeart',
          'faPencil',
          'faBars',
          'faGem',
          'faBrackets',
          'faChartNetwork',
          'faSubway',
          'faEnvelope',
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
          'faJsSquare',
          'faSass',
          'faReact',
          'faGit',
          'faVuejs',
          'faNodeJs',
        ],
      },
      {
        set: '@fortawesome/pro-solid-svg-icons',
        icons: ['faGraduationCap', 'faCheck', 'faHomeLgAlt', 'faRss'],
      },
    ],
  },

  sitemap: {
    hostname: 'https://cristin.io',
    gzip: true,
    defaults: {
      changefreq: 'monthly',
      priority: 1,
      lastmod: new Date(),
    },
    routes: [
      '/blog/articles/best-online-professional-development-resources',
      '/blog/articles/women-in-computing-are-losing-ground',
      '/blog/articles/a-curated-list-of-cheatsheets-for-web-developers',
      '/blog/articles/perilous-confusion-and-the-opportunity-for-growth',
      '/blog/articles/clean-up-development-commits-by-combining-them-into-one',
      '/blog/articles/use-webhooks-to-automatically-deploy-your-gatsby-site',
      '/blog/articles/what-is-destructuring-in-javascript',
      '/blog/articles/automatically-convert-pixels-to-rems-with-sass',
      '/blog/articles/create-an-alias-to-list-git-branches-by-date',
      '/blog/articles/search-git-history-for-certain-words-and-phrases',
      '/blog/1',
      '/blog/2',
    ],
  },

  router: {},

  // use these settings to use custom css
  bootstrapVue: {
    bootstrapCSS: true,
    icons: true,
  },

  // specify module rules for css and scss
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  serverMiddleware: ['~/server-middleware/seo.js'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // fallback to the generated 404.html when in SPA mode instead of Netlify's 404 page.
  generate: {
    fallback: true,
  },
}
