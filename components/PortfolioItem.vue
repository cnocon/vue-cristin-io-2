<template>
  <div class="row">
    <div class="col-12">
      <!-- <h3>{{ title }}</h3> -->
      <p class="links mt-0">
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
    <div class="col-12 col-md-7">
      <h4>Summary</h4>
      <div>
        <slot name="summary"></slot>
      </div>
      <h4>Technologies</h4>
      <ul>
        <li v-for="(tech, index) in technologies" :key="'tech-' + index">
          <a v-if="tech.link" href="tech.link">{{ tech.name }}</a>
          <span v-else>{{ tech.name }}</span>
        </li>
      </ul>
    </div>
    <div class="col-12 col-md-5 image-column">
      <div class="shadow mt-3">
        <nuxt-img :src="screenshot" :alt="title"></nuxt-img>
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
  },
}
</script>

<style lang="scss" scoped>
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
.image-column {
  max-width: 25rem;
  margin-left: auto;
  margin-right: 0;

  @include media-breakpoint-down(md) {
    margin-left: auto;
    margin-right: auto;
  }
}

p a,
li a {
  text-decoration: none;
}
</style>
