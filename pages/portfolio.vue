<template>
  <div class="portfolio-page">
    <Head
      title="Portfolio | Cristin O'Connor"
      description="Front End Software Engineering portfolio for Cristin O'Connor"
    ></Head>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1 class="mt-1">Portfolio</h1>
    <Section
      header-text="GitHub Stats Card for React"
      header-icon-type="fab"
      header-icon="github"
      header-alignment="center"
      header-classes="mb-1"
      section-classes="mb-5"
    >
      <PortfolioItem
        title="GitHub Stats Card for React"
        demo-link="https://react-github-stats-card-v2-demo.netlify.app"
        git-hub-link="https://github.com/cnocon/react-github-stats-card-v2"
        npm-link="https://www.npmjs.com/package/react-github-stats-card-v2"
        screenshot="https://github.com/cnocon/react-github-stats-card-v2/raw/master/stat-card-preview.png"
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
      header-classes="mb-1"
      section-classes="pb-5"
    >
      <PortfolioItem
        title="Front End Development Flash Cards App"
        demo-link="https://fed-flash-cards.netlify.app"
        git-hub-link="https://github.com/cnocon/flash-cards"
        screenshot="https://github.com/cnocon/flash-cards/raw/master/flashcards-app-screenshot-white.png"
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
      header-classes="mb-1"
      section-classes="pb-5"
    >
      <PortfolioItem
        title="Weather Charts/Forecast App"
        demo-link="https://weather-charts-app.netlify.app"
        git-hub-link="https://github.com/cnocon/weather-charts-app-new"
        screenshot="https://github.com/cnocon/weather-charts-app-new/raw/master/weather-app-screenshot.png"
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
      header-text="CRISTIN.IO (This Website)"
      header-icon-type="fad"
      header-icon="browser"
      header-alignment="center"
      header-classes="mb-1"
      section-classes="pb-5"
    >
      <PortfolioItem
        title="CRISTIN.IO (this website)"
        demo-link="https://cristin.io"
        git-hub-link="https://github.com/cnocon/nuxt-cristin-io"
        screenshot="https://github.com/cnocon/vue-cristin-io-2/raw/master/cristin-io.png"
        :technologies="[
          { name: 'Vue', link: 'https://vuejs.org/' },
          { name: 'Nuxt', link: 'https://nuxtjs.org/' },
          {
            name: 'Nuxt Content API',
            link: 'https://content.nuxtjs.org/',
          },
          { name: 'Vue Router', link: 'https://router.vuejs.org/' },
        ]"
      >
        <template #summary>
          <p>
            CRISTIN.IO is an <b>obvious</b> virtual wonderland that includes a
            front end web development blog authored by yours truly, my résumé,
            portfolio (surprise!), and some general information about me and the
            services I offer.
          </p>
        </template>
      </PortfolioItem>
    </Section>

    <Section
      header-text="YouTube Search App"
      header-icon-type="fab"
      header-icon="youtube"
      header-alignment="center"
      header-classes="mb-1"
      section-classes="pb-5"
    >
      <PortfolioItem
        title="YouTube Search App"
        demo-link="https://youtube-search-new.netlify.app"
        git-hub-link="https://github.com/cnocon/youtube-search-new"
        screenshot="https://github.com/cnocon/youtube-search-new/raw/master/youtube-app-screenshot.png"
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
      header-classes="mb-1"
      section-classes="pb-5"
    >
      <PortfolioItem
        title="CenturyLink Small Business Site"
        demo-link="https://business.centurylink.com/"
        screenshot="https://www.dropbox.com/s/qt4ieh7flxadcij/clq.png?raw=1"
        :technologies="[
          { name: 'Component-based architecture', link: null },
          {
            name: 'Responsive design',
            link:
              'https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/',
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
      header-text="CRISTIN.IO (This Website, but with Gatsby)"
      header-icon-type="fad"
      header-icon="browser"
      header-alignment="center"
      header-classes="mb-1"
      section-classes="pb-5"
    >
      <PortfolioItem
        title="CRISTIN.IO (Legacy Version Using Gatsby)"
        demo-link="https://gatsby-cristin-io.netlify.app/"
        git-hub-link="https://github.com/cnocon/cristin-io"
        screenshot="https://www.dropbox.com/s/qndt8nmup19dp7p/gatsby-cristin-io.png?raw=1"
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
            CRISTIN.IO (the Gatsby version) is an <b>obvious</b> virtual
            wonderland that includes a front end web development blog authored
            by yours truly, my résumé, portfolio (surprise!), and some general
            information about me and the services I offer.
          </p>
        </template>
      </PortfolioItem>
    </Section>
  </div>
</template>

<script>
import Head from '@/components/Head'
import PortfolioItem from '@/components/PortfolioItem'
import Breadcrumbs from '@/components/Breadcrumbs'
import Section from '@/components/Section'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFolders } from '@fortawesome/pro-regular-svg-icons'
import {
  faThunderstormMoon,
  faBriefcase,
} from '@fortawesome/pro-light-svg-icons'
import {
  faClipboardListCheck,
  faBrowser,
} from '@fortawesome/pro-duotone-svg-icons'
// import { faConciergeBell, faRss } from '@fortawesome/pro-solid-svg-icons'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(
  faFolders,
  faGithub,
  faClipboardListCheck,
  faThunderstormMoon,
  faBrowser,
  faYoutube,
  faBriefcase
)

export default {
  components: {
    Section,
    Breadcrumbs,
    PortfolioItem,
    Head,
  },
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
