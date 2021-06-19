<template>
  <div class="portfolio-page">
    <Head
      title="Portfolio"
      description="Cristin O'Connor's Front End Engineering Portfolio"
    ></Head>

    <Breadcrumbs :crumbs="breadcrumbs" />

    <h1 class="mt-1">Portfolio</h1>

    <Section
      header-text="CRISTIN.IO (This Website)"
      header-icon-type="fad"
      header-icon="browser"
      header-alignment="center"
      header-classes="dark portfolio-section-header"
      section-classes="section pb-5"
    >
      <PortfolioItem
        title="CRISTIN.IO (Nuxt Implementation)"
        demo-link="https://cristin.io/"
        git-hub-link="https://github.com/cnocon/vue-cristin-io-2/tree/master"
        screenshot="/portfolio/cristin-io-nuxt.jpg"
        :technologies="[
          { name: 'Nuxt', link: 'https://v3.vuejs.org/' },
          { name: 'Nuxt Content', link: 'https://content.nuxtjs.org/' },
          {
            name: 'Nuxt Style Resources',
            link: 'https://github.com/nuxt-community/style-resources-module#readme',
          },
          {
            name: 'Critical CSS (with extractCSS config)',
            link: 'https://github.com/nuxt-community/style-resources-module#readme',
          },
          {
            name: 'Nuxt Image',
            link: 'https://image.nuxtjs.org/',
          },
          {
            name: 'Nuxt Style Resources',
            link: 'https://github.com/nuxt-community/style-resources-module',
          },
        ]"
      >
        <template #summary>
          <p>
            CRISTIN.IO (currently implemented using Nuxt) represents the most
            recent total rebuild of this website. That's right, this page and
            all of it's webpage friends are brought to you by Nuxt. After
            becoming familiar with Vue 3 and using it for the previous version
            of CRISTIN.IO, I was having issues with SEO and performance that,
            based on my research, Nuxt promised to help with, or even fix
            entirely right out of the box.
          </p>
          <p>
            Out of the box, Nuxt includes automatic routing (including automatic
            dynamic routing), easy to use built-in tools for SEO, performance
            optimizations like tree-shaking, smart link prefetching, link
            preloading, and static site generation (with SSR), and a helpful
            Bundle analyzer tool readily available to gauge where performance
            improvements could be made across my entire site.
          </p>
          <p>
            I also was thrilled to move my blog out of ButterCMS, a headless
            CMS, and into markdown files powered by the Nuxt Content module.
            Nuxt Content allowed me to finally take full control of the
            presentation and structure of my blog content without the
            restrictions and difficulties that come with using a rich text
            editor to write each post.
          </p>
        </template>
      </PortfolioItem>
    </Section>

    <Section
      header-text="GitHub Stats Card for React"
      header-icon-type="fab"
      header-icon="github"
      header-alignment="center"
      header-classes="dark portfolio-section-header"
      section-classes="section mb-5"
    >
      <LazyPortfolioItem
        title="GitHub Stats Card for React"
        demo-link="https://react-github-stats-card-v2-demo.netlify.app"
        git-hub-link="https://github.com/cnocon/react-github-stats-card-v2"
        npm-link="https://www.npmjs.com/package/react-github-stats-card-v2"
        screenshot="/portfolio/stat-card-preview.jpg"
        :technologies="[
          { name: 'GitHub API', link: 'https://docs.github.com/en/rest' },
          {
            name: 'JavaScript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          },
          { name: 'Node', link: 'https://nodejs.org/en/' },
          { name: 'React', link: 'https://reactjs.org/' },
          { name: 'Webpack', link: 'https://webpack.js.org/' },
          { name: 'Storybook', link: 'https://storybook.js.org/' },
        ]"
      >
        <template #summary>
          <p>
            A simple stats card showing information about any GitHub usser with
            public repositories. The GitHub Stats Card for React can be styled
            with the theme options.
          </p>
          <p>
            Theme variations can be activated for your card with ease. Choose
            one of the available theme options (each of which are included in
            <a
              target="blank"
              rel="noopener"
              href="https://github.com/cnocon/react-github-stats-card-v2#readme"
            >
              repository README file</a
            >) for the <code>theme</code> prop. Pass the the
            <code>theme</code> prop with a value of the option you chose to the
            GitHub Stats Card for React component instance.
          </p>
          <p>
            Usage instructions are also included in the repository's README.md
            file.
          </p>
        </template>
      </LazyPortfolioItem>
    </Section>

    <Section
      header-text="Front End Development Flash Cards App"
      header-icon-type="fad"
      header-icon="clipboard-list-check"
      header-alignment="center"
      header-classes="dark portfolio-section-header"
      section-classes="section pb-5"
    >
      <PortfolioItem
        demo-link="https://fed-flash-cards.netlify.app"
        git-hub-link="https://github.com/cnocon/flash-cards"
        screenshot="/portfolio/flashcards-app-screenshot-white.jpg"
        :technologies="[
          { name: 'MongoDB (custom API)', link: 'https://www.mongodb.com/' },
          { name: 'Mongoose (custom API)', link: 'https://mongoosejs.com/' },
          { name: 'Express (custom API)', link: 'https://expressjs.com/' },
          { name: 'Node (custom API)', link: 'https://nodejs.org/en/' },
          { name: 'React', link: 'https://reactjs.org/' },
          {
            name: 'React context API',
            link: 'https://reactjs.org/docs/context.html#api',
          },
        ]"
      >
        <template #summary>
          <p>
            A flash card app specifically geared toward teaching front end
            development skills. The questions are pulled in from a custom-built
            API and MongoDB database.
          </p>
        </template>
      </PortfolioItem>
    </Section>

    <LazySection
      header-text="Weather Charts/Forecast App"
      header-icon-type="fal"
      header-icon="thunderstorm-moon"
      header-alignment="center"
      header-classes="dark portfolio-section-header"
      section-classes="section pb-5"
    >
      <LazyPortfolioItem
        title="Weather Charts/Forecast App"
        demo-link="https://weather-charts-app.netlify.app"
        git-hub-link="https://github.com/cnocon/weather-charts-app-new"
        screenshot="/portfolio/weather-app-screenshot.jpg"
        :technologies="[
          { name: 'React', link: 'https://reactjs.org/' },
          { name: 'Redux', link: 'https://redux.js.org/' },
          {
            name: 'Google Maps API',
            link: 'https://developers.google.com/maps',
          },
          { name: 'Open Weather API', link: 'https://openweathermap.org/api' },
          { name: 'Bootstrap', link: 'https://getbootstrap.com/' },
        ]"
      >
        <template #summary>
          <p>
            This app lets you see a 7-day forecast including temperature,
            pressure, and humidity for any major U.S. city you search for. As a
            bonus, you can see the city rendered in satellite view in a Google
            Map.
          </p>
        </template>
      </LazyPortfolioItem>
    </LazySection>

    <LazySection
      header-text="YouTube Search App"
      header-icon-type="fab"
      header-icon="youtube"
      header-alignment="center"
      header-classes="dark portfolio-section-header"
      section-classes="section pb-5"
    >
      <LazyPortfolioItem
        title="YouTube Search App"
        demo-link="https://youtube-search-new.netlify.app"
        git-hub-link="https://github.com/cnocon/youtube-search-new"
        screenshot="/portfolio/youtube-app-screenshot.jpg"
        :technologies="[
          {
            name: 'YouTube API V3',
            link: 'https://developers.google.com/youtube/v3',
          },
          { name: 'React', link: 'https://reactjs.org/' },
          { name: 'Bootstrap', link: 'https://getbootsrap.com/' },
        ]"
      >
        <template #summary>
          <p>
            This mini-application allows you to search for and watch content
            from YouTube. It returns only six results at a time (limitation due
            to me wanting to avoid paying for the API).
          </p>
        </template>
      </LazyPortfolioItem>
    </LazySection>

    <LazySection
      header-text="CenturyLink Small Business Site"
      header-icon-type="fal"
      header-icon="briefcase"
      header-alignment="center"
      header-classes="dark portfolio-section-header"
      section-classes="section pb-5"
    >
      <LazyPortfolioItem
        title="CenturyLink Small Business Site"
        demo-link="https://business.centurylink.com/"
        screenshot="/portfolio/clq.jpg"
        :technologies="[
          {
            name: 'Responsive design',
            link: 'https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/',
          },
          { name: 'SCSS', link: 'https://sass-lang.com/' },
          { name: 'Handlebars', link: 'https://handlebarsjs.com/' },
          {
            name: 'JavaScript (ES6)',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          },
          { name: 'PHP', link: 'https://www.php.net/' },
        ]"
      >
        <template #summary>
          <p>
            Built using a proprietary component library, this website searches
            for service in a user's zip code and updates content based on
            product availability along with showcasing small business products.
            Please note I cannot provide the repository link because it is
            private.
          </p>
        </template>
      </LazyPortfolioItem>
    </LazySection>

    <LazySection
      header-text="CRISTIN.IO (Vue 3 Implementation)"
      header-icon-type="fad"
      header-icon="browser"
      header-alignment="center"
      header-classes="dark portfolio-section-header"
      section-classes="section pb-5"
    >
      <LazyPortfolioItem
        header-text="CRISTIN.IO (Vue 3 Implementation)"
        demo-link="https://vue.cristin.io/"
        git-hub-link="https://github.com/cnocon/vue-cristin-io-2/tree/vue"
        screenshot="/portfolio/cristin-io-vue.jpg"
        :technologies="[
          { name: 'Vue 3', link: 'https://v3.vuejs.org/' },
          { name: 'Vue Router', link: 'https://router.vuejs.org/' },
          { name: 'Vuex', link: 'https://vuex.vuejs.org/' },
          {
            name: 'ButterCMS API',
            link: 'https://buttercms.com/docs/api/',
          },
          { name: 'Axios', link: 'https://www.npmjs.com/package/axios' },
        ]"
      >
        <template #summary>
          <p>
            CRISTIN.IO (the Vue 3 implementation) represented the third
            implementation of this website. Initially built with React, I later
            rebuilt it using Gatsby, and after that came the Vue 3 version. Each
            new build came about due to me wanting to learn something new by
            actually doing it. I highly recommend this method, as React, Gatsby,
            and now Vue 3 are frameworks I now feel comfortable using and can
            work with professionally.
          </p>
        </template>
      </LazyPortfolioItem>
    </LazySection>

    <LazySection
      header-text="CRISTIN.IO (Gatsby Implementation)"
      header-icon-type="fad"
      header-icon="browser"
      header-alignment="center"
      header-classes="dark portfolio-section-header"
      section-classes="section pb-5"
    >
      <LazyPortfolioItem
        header-text="CRISTIN.IO (Gatsby Implementation)"
        demo-link="https://cristin-io-gatsby.netlify.app/"
        git-hub-link="https://github.com/cnocon/cristin-io-gatsby"
        screenshot="/portfolio/cristin-io-gatsby.jpg"
        :technologies="[
          { name: 'Gatsby', link: 'https://www.gatsbyjs.com/' },
          { name: 'React', link: 'https://www.reactjs.org/' },
          { name: 'GraphQL', link: 'https://graphql.org/' },
          {
            name: 'ButterCMS API',
            link: 'https://buttercms.com/docs/api/',
          },
          { name: 'Emotion.js', link: 'https://github.com/emotion-js/emotion' },
        ]"
      >
        <template #summary>
          <p>
            CRISTIN.IO (the Gatsby implementation) represented the second
            implementation of this website. Initially built with React, I
            rebuilt this site using the Gatsby framework in order to learn the
            technology. I highly recommend this method, as React and now Gatsby
            are technologies I feel comfortable using in a professional context.
          </p>
        </template>
      </LazyPortfolioItem>
    </LazySection>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          to: { name: 'index' },
          text: 'Home',
        },
        {
          to: null,
          text: 'Portfolio',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: left;
}

.nuxt-image-wrapper {
  @include media-breakpoint-up(md) {
    width: 40%;
    margin: 0;
    display: inline-block;
  }
}
.portfolio-item-container {
  @include media-breakpoint-up(md) {
    width: 60%;
    margin: 0;
    display: inline-block;
  }
}
</style>
