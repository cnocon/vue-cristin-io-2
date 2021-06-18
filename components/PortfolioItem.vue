<template>
  <article class="portfolio-item">
    <p class="links">
      <span v-if="demoLink">
        <a :href="demoLink" target="_blank" rel="noopener noreferrer">Demo</a>
      </span>
      <span v-if="gitHubLink">
        <span>&nbsp;|&nbsp;</span>
        <a :href="gitHubLink" target="_blank" rel="noopener noreferrer"
          >GitHub</a
        >
      </span>
      <span v-if="npmLink">
        <span>&nbsp;|&nbsp;</span>
        <a :href="npmLink" target="_blank" rel="noopener noreferrer">NPM</a>
      </span>
    </p>
    <div class="portfolio-item-content">
      <div v-if="screenshot.length > 0" class="screenshot-container">
        <NuxtImg
          :src="screenshot"
          :alt="title"
          :class="`summary-img shadow ${
            screenshotClasses ? screenshotClasses : ''
          }`"
        ></NuxtImg>
      </div>
      <slot name="summary"></slot>
      <div class="technologies text-center">
        <h6>TECHNOLOGIES</h6>
        <ul class="list-style-none list-inline">
          <li v-for="(tech, index) in technologies" :key="'tech-' + index">
            <a v-if="tech.link" href="tech.link" class="badge badge-light">{{
              tech.name
            }}</a>
            <span v-else>{{ tech.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    demoLink: {
      type: String,
      default: null,
    },
    gitHubLink: {
      type: String,
      default: null,
    },
    npmLink: {
      type: String,
      default: null,
    },
    screenshot: {
      default: '',
      type: String,
    },
    screenshotClasses: {
      default: '',
      type: String,
    },
    technologies: {
      type: Array,
      default: null,
    },
    imageContentClasses: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-item {
  overflow: hidden;

  .portfolio-item-content {
    overflow: hidden;
  }

  .links {
    text-align: center;

    @include media-breakpoint-down(md) {
      margin-bottom: 0;
    }

    a {
      text-decoration: none;

      &[target='_blank'] {
        &::after {
          margin-left: 3px;
        }
      }
    }
  }

  .technologies {
    display: block;
    width: 100%;
    text-align: center;

    h6 {
      text-align: left;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      font-weight: 700;
    }
  }

  .screenshot-container {
    max-width: 350px;
    margin-left: 30px;
    float: left;
    padding: 0 1.25rem 1.25rem;

    .summary-img {
      display: block;
      max-width: calc(100% - 2rem);
      height: auto;
      margin: 0 1rem 1.5rem;
    }
  }

  h6 {
    margin-top: 0;
    margin-bottom: 0;
  }

  p,
  li {
    font-family: $font-family-heading;
    color: $black;

    a {
      text-decoration: none;
    }
  }
}
</style>
