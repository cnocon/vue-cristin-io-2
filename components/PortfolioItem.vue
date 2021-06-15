<template>
  <article class="portfolio-item-container">
    <div class="portfolio-item-header">
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
    </div>

    <div class="portfolio-item-content">
      <div class="technologies text-center">
        <h4>Technologies</h4>
        <ul class="list-inline list-inline-centered">
          <li v-for="(tech, index) in technologies" :key="'tech-' + index">
            <a v-if="tech.link" href="tech.link">{{ tech.name }}</a>
            <span v-else>{{ tech.name }}</span>
          </li>
        </ul>
      </div>
      <slot name="summary"></slot>
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
.portfolio-item-header {
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
.portfolio-item-content {
  .technologies {
    display: block;
    width: 100%;
    text-align: center;
  }

  p {
    font-family: $font-family-heading;
    color: $black;
  }
}
h4 {
  margin-top: 0;
}
p,
li {
  a {
    text-decoration: none;
  }
}
</style>
