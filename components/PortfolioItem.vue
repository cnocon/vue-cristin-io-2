<template>
  <div class="portfolio-item-container">
    <div class="header-row row">
      <div class="col-12">
        <p class="links">
          <span v-if="demoLink">
            <a :href="demoLink" target="_blank" rel="noopener noreferrer"
              >Demo</a
            ></span
          >
          <span v-if="gitHubLink"
            ><span>&nbsp;|&nbsp;</span
            ><a :href="gitHubLink" target="_blank" rel="noopener noreferrer"
              >GitHub</a
            ></span
          ><span v-if="npmLink"
            ><span>&nbsp;|&nbsp;</span
            ><a :href="npmLink" target="_blank" rel="noopener noreferrer"
              >NPM</a
            ></span
          >
        </p>
      </div>
    </div>

    <div class="portfolio-item-content-row">
      <div class="portfolio-item-content">
        <section class="summary">
          <div class="summary-info">
            <h4>Summary</h4>
            <div>
              <slot name="summary"></slot>
            </div>
          </div>
          <div class="summary-img shadow">
            <nuxt-img :src="screenshot" :alt="title"></nuxt-img>
          </div>
        </section>
        <div class="technologies">
          <h4>Technologies</h4>
          <ul>
            <li v-for="(tech, index) in technologies" :key="'tech-' + index">
              <a v-if="tech.link" href="tech.link">{{ tech.name }}</a>
              <span v-else>{{ tech.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
      type: String,
      default: null,
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
.header-row {
  .links {
    text-align: center;

    @include media-breakpoint-down(md) {
      margin-bottom: 0;
    }

    a[target='_blank'] {
      &::after {
        margin-left: 3px;
      }
    }
  }
}
.portfolio-item-content-row {
  .technologies {
    display: flex;
    flex-direction: column;
    max-width: calc(50% - 30px);
    margin-left: 15px;
    margin-right: 15px;
  }

  .summary {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;

    @include media-breakpoint-up(lg) {
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .summary-info,
    .summary-img {
      max-width: 100%;

      &.summary-info {
        margin-right: 0;
        margin-left: 0;

        @include media-breakpoint-xxs-up {
          margin-left: 10px;
          max-width: calc(100% - 260px - 10px);
        }
      }

      &.summary-img {
        margin-left: 0;
        margin-left: 0;
        max-width: 100%;

        @include media-breakpoint-xxs-up {
          max-width: 260px;
        }
      }

      img {
        max-height: 100%;
        width: auto;
      }
    }

    .summary-info {
      @include media-breakpoint-up(sm) {
        max-width: calc(100% - 336px);
      }
    }

    .summary-img {
      // img {
      // max-height: calc(100% - 40px);
      // width: auto;
      // max-width: unset;
      // display: block;

      // @include media-breakpoint-up(sm) {
      //   max-width: 320px;
      // }
    }
    //   max-width: calc(240px - 30px);
    //   // margin: 1.25rem auto;
    // }

    // @include media-breakpoint-up(md) {
    //   max-width: 290px;
    //   max-width: calc(290px - 30px);
    // }

    // @include media-breakpoint-up(lg) {
    //   width: calc(336px - 30px);
    // }

    // img {
    //   max-height: 100%;
    //   width: auto;
    // }
    // }
  }
}
h4 {
  margin-top: 0;
}
p a,
li a {
  text-decoration: none;
}
</style>
