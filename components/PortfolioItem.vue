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
      <div class="technologies text-center">
        <ul class="list-style-none list-inline list-inline-centered">
          <li key="title"><h6>TECHNOLOGIES</h6></li>
          <li v-for="(tech, index) in technologies" :key="'tech-' + index">
            <a v-if="tech.link" href="tech.link" class="badge badge-light">{{
              tech.name
            }}</a>
            <span v-else>{{ tech.name }}</span>
          </li>
        </ul>
      </div>
      <slot name="summary"></slot>
      <div v-if="screenshot.length > 0" class="screenshot-container">
        <NuxtImg
          :src="screenshot"
          :alt="title"
          :class="`summary-img shadow ${
            screenshotClasses ? screenshotClasses : ''
          }`"
        ></NuxtImg>
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
    }

    .screenshot-container {
      max-width: 350px;
      margin-left: 30px;
      float: right;

      .summary-img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      // &.summary-img-left {
      //   float: left;
      // }

      // &.summary-img-tall {
      //   max-height: 300px;
      // }

      // @include media-breakpoint-down(sm) {
      //   max-width: 80%;
      //   margin-left: auto;
      //   margin-right: auto;
      // }
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
}
</style>
