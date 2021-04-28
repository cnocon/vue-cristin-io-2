<template>
  <div class="row">
    <div class="col-12">
      <!-- <h3 class="mt-0">{{ title }}</h3> -->
      <p class="links text-center">
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
    <div class="col-12 col-md-5">
      <div class="shadow mt-3">
        <img :src="screenshot" :alt="title" />
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

<style lang="scss">
.navbar {
  @include media-breakpoint-down(sm) {
    width: 100%;
  }
}
.name-and-title-mobile {
  display: block;
  width: 100%;
  text-align: center;

  @include media-breakpoint-up(md) {
    display: none;
  }
}
.navbar-brand {
  @include media-breakpoint-up(md) {
    display: block;
    width: 100%;
    text-align: center;

    .logo-img {
      margin: 0 auto 1.25rem;
    }
  }

  .name-and-title {
    display: none;

    @include media-breakpoint-up(md) {
      display: block;
      font-size: 1.25rem;
    }
  }

  .logo-img {
    height: 62px;
    width: 62px;
    border-radius: 50%;
    background-color: $dark;
    // background-image: $rainbow-ellipse-top-right-dark;
    box-shadow: hsl(175, 80%, 80%) 0 1.5px, hsl(58, 100%, 80%) -1.5px 0,
      hsl(240, 80%, 82%) 1.5px 0, hsl(355, 80%, 85%) 0 -1.5px 0;
    display: inline-block;

    @include media-breakpoint-up(md) {
      width: 90px;
      height: 90px;
    }
  }
}
.nav-item:not(#my-nav-dropdown) {
  @include media-breakpoint-down(sm) {
    display: none !important;
  }
}
#my-nav-dropdown {
  right: -1rem;

  @include media-breakpoint-up(md) {
    display: none;
  }
}
.navbar-nav {
  margin-right: 0.9375rem;

  @include media-breakpoint-up(md) {
    min-width: 325px;
    margin-right: auto;
    justify-content: center;
    width: 100%;
    flex-direction: row;
  }

  .dropdown-toggle {
    // margin-right: -1rem;
    font-size: 150%;
    padding: 0.125rem 0.5rem !important;

    &::after {
      display: none;
    }
  }
  .dropdown-menu.show {
    left: 0.25rem;
  }

  .nav-item {
    .nav-link {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
}
.nav {
  justify-content: space-between;

  @include media-breakpoint-up(md) {
    margin-left: 0;
    justify-content: center;
  }

  .nav-link {
    color: $dark;
    font-family: $font-family-heading;
    font-weight: 600;
    // font-size: 0.875rem;
    padding-left: 1rem;
    padding-right: 1rem;

    &:hover {
      text-decoration: underline;
    }
    &.active {
      background-color: $dark !important;
      color: $white !important;
    }
    &.dropdown-toggle {
      font-size: 150%;
    }
  }
}
</style>
