<template>
  <div class="navbar-inner container">
    <nuxt-link to="/" class="navbar-brand">
      <img
        :src="require(`~/assets/images/square-portrait.png`)"
        alt="Cristin O'Connor"
        class="logo-img"
      />

      <div class="name-and-title">
        <div class="name">Cristin O'Connor</div>
        <div class="title">Front End Engineer</div>
      </div>
    </nuxt-link>

    <div class="name-and-title-mobile">
      <div class="name">Cristin O'Connor</div>
      <div class="title">Front End Engineer</div>
    </div>

    <ul class="nav ml-0">
      <li class="nav-item">
        <nuxt-link
          :active="isActive('resume')"
          to="/resume"
          class="rounded nav-link"
          >Résumé</nuxt-link
        >
      </li>
      <li class="nav-item">
        <nuxt-link
          :active="isActive('portfolio')"
          to="/portfolio"
          class="rounded nav-link"
          >Portfolio</nuxt-link
        >
      </li>
      <li class="nav-item">
        <nuxt-link
          :active="isActive('blog-page')"
          :to="{ name: 'blog-page', params: { slug: 'blog-page', page: 1 } }"
          class="rounded nav-link"
          >Blog</nuxt-link
        >
      </li>

      <li
        id="navbarDropdown"
        :class="showMenu ? 'nav-item dropdown show' : 'nav-item dropdown'"
        @click.stop.prevent="toggleMenu"
      >
        <a
          id="navbarDropdown"
          href="#dropdownMenu"
          role="button"
          :aria-expanded="showMenu"
          aria-haspopup="true"
          :class="
            showMenu
              ? 'show nav-link dropdown-toggle'
              : 'nav-link dropdown-toggle'
          "
          target="_self"
          data-bs-toggle="dropdown"
        >
          <font-awesome-icon
            v-if="showMenu"
            :icon="['fas', 'times']"
          ></font-awesome-icon>
          <font-awesome-icon v-else :icon="['fas', 'bars']"></font-awesome-icon>
        </a>

        <ul
          v-show="showMenu"
          id="dropdownMenu"
          :class="
            showMenu
              ? 'dropdown-menu dropdown-menu-right show'
              : 'dropdown-menu dropdown-menu-right'
          "
          aria-labelledby="#navbarDropdown"
        >
          <li class="nav-item" role="presentation">
            <nuxt-link
              to="/resume"
              :active="isActive('resume')"
              class="dropdown-item"
              role="menuitem"
              >Résumé</nuxt-link
            >
          </li>
          <li class="nav-item" role="presentation">
            <nuxt-link
              to="/portfolio"
              :active="isActive('portfolio')"
              class="dropdown-item"
              role="menuitem"
              >Portfolio</nuxt-link
            >
          </li>
          <li class="nav-item" role="presentation">
            <nuxt-link
              :to="{
                name: 'blog-page',
                params: { slug: 'blog-page', page: 1 },
              }"
              :active="isActive('blog-page')"
              class="dropdown-item"
              role="menuitem"
              >Blog</nuxt-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHomeLgAlt, faBars, faTimes } from '@fortawesome/pro-solid-svg-icons'

library.add(faHomeLgAlt, faBars, faTimes)

export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    isActive(path) {
      if (path === 'blog') {
        return (
          this.$route.name.match(/blog/) &&
          this.$route.name.match(/blog/).length > 0
        )
      } else {
        return this.$route.name === path
      }
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  .dropdown-menu.dropdown-menu-right {
    &.show {
      position: absolute;
      left: auto;
    }
  }

  .nav-item:not(.dropdown) {
    @include media-breakpoint-down(sm) {
      display: none;
    }
  }
  .show .nav-item:not(.dropdown) {
    @include media-breakpoint-down(sm) {
      display: block;
    }
  }
}
.navbar-inner {
  &.container {
    display: flex;
    flex-wrap: nowrap !important;

    @include media-breakpoint-down(sm) {
      width: 100%;
      align-items: center;
      padding: 0.5rem 1rem 0;
    }
  }
}
.name-and-title-mobile,
.name-and-title {
  .name {
    font-size: 1.5rem;
    font-family: $font-family-display;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.25;

    @include media-breakpoint-up(md) {
      font-size: 1rem;
    }
  }
  .title {
    font-size: 1.125rem;

    @include media-breakpoint-up(md) {
      font-size: 0.875rem;
    }
  }
}
.name-and-title-mobile {
  display: block;
  width: 100%;
  text-align: center;
  padding-top: 0.5rem;

  @include media-breakpoint-up(md) {
    display: none;
  }
}
.navbar-brand {
  margin-right: 0;

  @include media-breakpoint-up(md) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    margin-right: 1rem;
  }

  .name-and-title {
    display: none;

    @include media-breakpoint-up(md) {
      display: block;
      font-size: 1.25rem;
      text-align: left;
    }
  }

  .logo-img {
    width: 62px;
    border-radius: 50%;
    background-color: $dark;
    // background-image: $rainbow-ellipse-top-right-dark;
    box-shadow: hsl(175, 80%, 80%) 0 1.5px, hsl(58, 100%, 80%) -1.5px 0,
      hsl(240, 80%, 82%) 1.5px 0, hsl(355, 80%, 85%) 0 -1.5px 0;
    display: inline-block;

    @include media-breakpoint-up(md) {
      margin: 10px 1.25rem 10px 0;
      width: 70px;
      height: 70px;
    }
  }
}
// #my-nav-dropdown,
.dropdown-toggle {
  right: -1rem;

  @include media-breakpoint-up(md) {
    display: none;
  }
}
.nav {
  margin-right: 0.9375rem;
  justify-content: space-between;
  margin-right: 0;

  @include media-breakpoint-up(md) {
    min-width: 325px;
    margin-right: auto;
    justify-content: flex-end;
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-left: 0;
  }

  .nav-link {
    color: $dark;
    font-family: $font-family-heading;
    font-weight: 600;
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

  .dropdown-toggle {
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

      &.show {
        @include media-breakpoint-down(sm) {
          width: 32px;
          text-align: center;
        }
      }
    }
  }
}
</style>
