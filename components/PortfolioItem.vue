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
        <LazyNuxtImg
          v-if="lazy"
          format="jpeg"
          :src="screenshot"
          :alt="title"
          :class="`summary-img ${screenshotClasses ? screenshotClasses : ''}`"
        ></LazyNuxtImg>
        <NuxtImg
          v-else
          format="jpeg"
          :src="screenshot"
          :alt="title"
          :class="`summary-img ${screenshotClasses ? screenshotClasses : ''}`"
        ></NuxtImg>
      </div>
      <slot name="summary"></slot>
      <div class="technologies text-center">
        <h3>TECHNOLOGIES</h3>
        <ul class="list-style-none list-inline">
          <li v-for="(tech, index) in technologies" :key="'tech-' + index">
            <a
              v-if="tech.link"
              :href="tech.link"
              rel="noopener noreferrer"
              target="_blank"
              class="badge"
              >{{ tech.name }}</a
            >
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
    lazy: {
      type: Boolean,
      default: false,
    },
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
    margin-bottom: 2rem;
    margin-top: 0.5rem;

    @include media-breakpoint-down(md) {
      text-align: center;
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

    h3 {
      text-align: left;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      font-weight: 400;
      font-size: 1.375rem; // 22px

      @include media-breakpoint-down(md) {
        font-size: 1rem;
      }
    }

    .badge {
      background-color: $light-gray;
      color: $dark;
      line-height: 1.5em;

      &:hover {
        background-color: $primary;
        color: $white;

        &::after {
          color: $white;
        }
      }

      &::after {
        height: 1.5em;
        line-height: 1.5em;
        vertical-align: middle;
        background-repeat: no-repeat;
      }
    }

    ul {
      flex-wrap: wrap;
    }
  }

  .screenshot-container {
    max-width: 17.5rem; // 280px
    padding: 0 1.25rem 1.25rem;
    margin-left: auto;
    margin-right: auto;

    @include media-breakpoint-up(sm) {
      max-width: 23.75rem; // 380px;
    }

    @include media-breakpoint-up(md) {
      float: left;
      padding: 0 1.25rem 1.25rem 0;
      margin-left: 0;
      margin-right: 0;
    }

    .summary-img {
      box-shadow: $box-shadow-sm;
      border: 1px solid $border-light-gray;
      display: block;
      max-width: calc(100% - 2rem);
      height: auto;
      margin: 0 1rem 0.5rem 0;

      @include media-breakpoint-down(md) {
        margin: 0 auto 0.5rem;
      }
    }
  }

  h3 {
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
