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
      header-classes="dark"
      section-classes="pb-5"
    >
      <PortfolioItem
        title="CRISTIN.IO (Nuxt Implementation)"
        demo-link="https://cristin.io/"
        git-hub-link="https://github.com/cnocon/vue-cristin-io-2/tree/master"
        screenshot="/cristin-io-nuxt.jpg"
        :technologies="[
          { name: 'Nuxt', link: 'https://v3.vuejs.org/' },
          { name: 'Nuxt Content API', link: 'https://content.nuxtjs.org/' },
          { name: 'Axios', link: 'https://www.npmjs.com/package/axios' },
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
            entirely right out of the box. Automatic routing (including
            automatic dynamic routing), easy and built-in tools for SEO, and
            performance optimizations like treeshaking and static site
            generation (with SSR), and a helpful Bundle analyzer tool readily
            available to gauge where performance improvements could be made
            across your entire site.
          </p>
          <p>
            I also was thrilled to move my blog content out of ButterCMS, the
            headless CMS I'd been using previously, and into the
            markdown-powered Nuxt Content module, which finally empowered me to
            take full control of the presentation and structure of my blog
            content without the restrictions and difficulties that come with
            using a rich text editor to write each post.
          </p>
        </template>
      </PortfolioItem>
    </Section>

    <Section
      header-text="GitHub Stats Card for React"
      header-icon-type="fab"
      header-icon="github"
      header-alignment="center"
      header-classes="dark"
      section-classes="mb-5"
    >
      <PortfolioItem
        title="GitHub Stats Card for React"
        demo-link="https://react-github-stats-card-v2-demo.netlify.app"
        git-hub-link="https://github.com/cnocon/react-github-stats-card-v2"
        npm-link="https://www.npmjs.com/package/react-github-stats-card-v2"
        screenshot="/stat-card-preview.jpg"
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
            A simple card, with or without attached styles, to show some basic
            GitHub statistics for a given GitHub user.
          </p>
          <p>
            There are multiple theme options that can be implemented by passing
            props to the component.
          </p>
          <p>
            Usage instructions are included in the
            <a
              target="blank"
              rel="noopener"
              href="https://github.com/cnocon/react-github-stats-card-v2#readme"
              >repository README file</a
            >.
          </p>
        </template>
      </PortfolioItem>
    </Section>

    <Section
      header-text="Front End Development Flash Cards App"
      header-icon-type="fad"
      header-icon="clipboard-list-check"
      header-alignment="center"
      header-classes="dark"
      section-classes="pb-5"
    >
      <PortfolioItem
        title="Front End Development Flash Cards App"
        demo-link="https://fed-flash-cards.netlify.app"
        git-hub-link="https://github.com/cnocon/flash-cards"
        screenshot="/flashcards-app-screenshot-white.jpg"
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

    <Section
      header-text="Weather Charts/Forecast App"
      header-icon-type="fal"
      header-icon="thunderstorm-moon"
      header-alignment="center"
      header-classes="dark"
      section-classes="pb-5"
    >
      <PortfolioItem
        title="Weather Charts/Forecast App"
        demo-link="https://weather-charts-app.netlify.app"
        git-hub-link="https://github.com/cnocon/weather-charts-app-new"
        screenshot="/weather-app-screenshot.jpg"
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
      </PortfolioItem>
    </Section>

    <Section
      header-text="YouTube Search App"
      header-icon-type="fab"
      header-icon="youtube"
      header-alignment="center"
      header-classes="dark"
      section-classes="pb-5"
    >
      <PortfolioItem
        title="YouTube Search App"
        demo-link="https://youtube-search-new.netlify.app"
        git-hub-link="https://github.com/cnocon/youtube-search-new"
        screenshot="/youtube-app-screenshot.jpg"
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
          <p>Search for and watch content from YouTube.</p>
        </template>
      </PortfolioItem>
    </Section>

    <Section
      header-text="CenturyLink Small Business Site"
      header-icon-type="fal"
      header-icon="briefcase"
      header-alignment="center"
      header-classes="dark"
      section-classes="pb-5"
    >
      <PortfolioItem
        title="CenturyLink Small Business Site"
        demo-link="https://business.centurylink.com/"
        screenshot="/clq.jpg"
        :technologies="[
          { name: 'Component-based architecture', link: null },
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
      </PortfolioItem>
    </Section>

    <Section
      header-text="CRISTIN.IO (Vue 3 Implementation)"
      header-icon-type="fad"
      header-icon="browser"
      header-alignment="center"
      header-classes="dark"
      section-classes="pb-5"
    >
      <PortfolioItem
        title="CRISTIN.IO (Legacy Version Using Gatsby)"
        demo-link="https://vue.cristin.io/"
        git-hub-link="https://github.com/cnocon/vue-cristin-io-2/tree/vue"
        screenshot="/cristin-io-vue.jpg"
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
      </PortfolioItem>
    </Section>

    <Section
      header-text="CRISTIN.IO (This Website, but with Gatsby)"
      header-icon-type="fad"
      header-icon="browser"
      header-alignment="center"
      header-classes="dark"
      section-classes="pb-5"
    >
      <PortfolioItem
        header-text="CRISTIN.IO (Gatsby Implementation)"
        demo-link="https://gatsby-cristin-io.netlify.app/"
        git-hub-link="https://github.com/cnocon/cristin-io"
        screenshot="/gatsby-cristin-io.jpg"
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
      </PortfolioItem>
    </Section>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFolders } from '@fortawesome/pro-regular-svg-icons'
/* eslint-disable prettier/prettier */
import { faThunderstormMoon, faBriefcase } from '@fortawesome/pro-light-svg-icons'
import { faClipboardListCheck, faBrowser } from '@fortawesome/pro-duotone-svg-icons'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faFolders, faGithub, faClipboardListCheck, faThunderstormMoon, faBrowser, faYoutube, faBriefcase)
/* eslint-enable prettier/prettier */

export default {
  data() {
    return {
      breadcrumbs: [
        {
          href: '/',
          text: 'Home',
        },
        {
          href: null,
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
</style>
