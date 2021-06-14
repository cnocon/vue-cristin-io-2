<template>
  <div class="navbar-inner container">
    <NuxtLink :to="{ name: 'index' }" class="navbar-brand">
      <nuxt-img
        src="/square-portrait-white.png"
        alt="Cristin O'Connor"
        class="logo-img"
      ></nuxt-img>

      <div class="name-and-title">
        <div :class="`${homepageClasses()}`">Cristin O'Connor</div>
        <div class="title">Front End Engineer</div>
      </div>

      <div class="name-and-title-mobile">
        <div :class="`${homepageClasses()}`">Cristin O'Connor</div>
        <div class="title">Front End Engineer</div>
      </div>
    </NuxtLink>

    <ul class="nav ml-0">
      <li class="nav-item">
        <NuxtLink
          :active="isActive('resume')"
          to="/resume"
          class="rounded nav-link"
          >Résumé</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink
          :active="isActive('portfolio')"
          to="/portfolio"
          class="rounded nav-link"
          >Portfolio</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink
          :active="isActive('blog')"
          :to="{ name: 'blog-page', params: { slug: 'blog-page', page: 1 } }"
          :class="`rounded nav-link ${
            isActive('blog') ? 'nuxt-link-active nuxt-link-exact-active' : ''
          }`"
          >Blog</NuxtLink
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
            :icon="['fal', 'times']"
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
            <NuxtLink
              to="/resume"
              :active="isActive('resume')"
              :class="`dropdown-item ${
                isActive('resume')
                  ? 'nuxt-link-active nuxt-link-exact-active'
                  : ''
              }`"
              role="menuitem"
              >Résumé</NuxtLink
            >
          </li>
          <li class="nav-item" role="presentation">
            <NuxtLink
              to="/portfolio"
              :active="isActive('portfolio')"
              class="dropdown-item"
              role="menuitem"
              >Portfolio</NuxtLink
            >
          </li>
          <li class="nav-item" role="presentation">
            <NuxtLink
              :to="{
                name: 'blog-page',
                params: { slug: 'blog-page', page: 1 },
              }"
              :active="isActive('blog')"
              :class="`dropdown-item ${
                isActive('blog')
                  ? 'nuxt-link-active nuxt-link-exact-active'
                  : ''
              }`"
              role="menuitem"
              >Blog</NuxtLink
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHomeLgAlt, faBars } from '@fortawesome/pro-solid-svg-icons'
import { faTimes } from '@fortawesome/pro-light-svg-icons'
library.add(faHomeLgAlt, faBars, faTimes)

export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    isActive(path) {
      if (this.$route.name.match(/blog/)) {
        return (
          this.$route.name === 'blog-page' ||
          this.$route.name === 'blog-articles-slug'
        )
      } else {
        return this.$route.name === path
      }
    },
    homepageClasses() {
      return this.$route.name === 'index'
        ? 'name nuxt-link-active nuxt-link-exact-active'
        : 'name'
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
      width: 175px;
      left: -150px;
      padding: 0;
      background-color: $black;
      border-color: $dark;
      box-shadow: $box-shadow-md;
      color: $white;

      li {
        padding-bottom: 0.85rem;
        padding-top: 0.85rem;
        margin-bottom: 0;
        border-bottom: 1px solid rgba($lightest-gray, 0.5);

        &:hover {
          background-color: $white;
          border-bottom: 1px solid $dark;

          a {
            color: $dark;
            background-color: $white;
          }
        }

        &:last-of-type {
          border-bottom: 0;
        }

        a {
          color: $white;
          font-weight: 900;
          text-transform: uppercase;
          font-family: $font-family-heading;
          letter-spacing: 2px;
          text-align: center;

          &:hover {
            color: $dark;
            background-color: $white;
          }
        }
      }
    }
  }

  .nav-item:not(.dropdown) {
    @include media-breakpoint-down(md) {
      display: none;
    }
  }
  .show .nav-item:not(.dropdown) {
    @include media-breakpoint-down(md) {
      display: block;
    }
  }
}
.navbar-inner {
  &.container {
    display: flex;
    flex-wrap: nowrap !important;
    max-width: 1140px;

    @include media-breakpoint-down(md) {
      width: 100%;
      align-items: center;
      padding: 0.5rem 1rem;
    }
  }
}

.name-and-title-mobile,
.name-and-title {
  .name {
    font-size: 1.125rem;
    line-height: 1em;
    font-family: $font-family-display;
    text-transform: uppercase;
    font-weight: 500;
    color: $white;

    @include media-breakpoint-xxs-up {
      font-size: 1.35rem;
    }

    @include media-breakpoint-up(xs) {
      font-size: 1.5rem;
    }

    @include media-breakpoint-up(md) {
      font-size: 1.8438rem;
    }
  }

  .title {
    font-size: 0.8125rem;
    font-family: $font-family-heading;
    white-space: nowrap;
    line-height: 1.5em;
    font-weight: 400 !important;
    color: $white;
    text-transform: uppercase;
    text-indent: 2px;

    @include media-breakpoint-up(xs) {
      font-size: 0.85rem;
      letter-spacing: 1px;
    }

    @include media-breakpoint-up(sm) {
      font-size: 1rem;
    }

    @include media-breakpoint-up(md) {
      font-size: 1.15rem;
    }
  }
}

.name-and-title-mobile,
.name-and-title {
  .name {
    &.nuxt-link-active,
    &.nuxt-link-exact-active {
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: $rainbow-gradient-med;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}

.name-and-title-mobile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 1.25rem 0;

  @include media-breakpoint-up(md) {
    display: none;
  }
}
.navbar-brand {
  margin-right: 0;
  width: 100%;
  display: flex;
  align-items: center;

  @include media-breakpoint-up(md) {
    // width: unset;
    justify-content: flex-start;
    text-align: left;
    margin-right: 1rem;
  }

  &.hover {
    cursor: pointer;

    .name-and-title,
    .name-and-title-mobile {
      .name {
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: $rainbow-text-angled;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }

  .name-and-title {
    display: none;

    @include media-breakpoint-up(md) {
      display: block;
      text-align: left;
    }
  }

  .logo-img {
    width: 42px;
    border-radius: 50%;
    display: inline-block;
    box-shadow: $rainbow-box-shadow-dark;
    background-color: $lightest-gray;
    margin-right: 0.25rem;

    @include media-breakpoint-up(md) {
      margin: 1rem 0.5rem 1rem 0;
      width: 62px;
    }
  }
}

.dropdown-toggle {
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
    color: $white;
    font-family: $font-family-base;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 0.5rem 0;

    @include media-breakpoint-up(md) {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    &:hover {
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: $rainbow-text-angled;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .dropdown-toggle {
    &.nav-link {
      color: $white;

      &:hover {
        color: $white;
      }
    }

    &::after {
      display: none;
    }

    .svg-inline--fa {
      width: 20px !important;
      height: 24px !important;
    }
  }

  .nav-item {
    margin-bottom: 0;

    &:last-of-type {
      .nav-link {
        @include media-breakpoint-up(md) {
          padding-right: 0;
        }
      }
    }

    &.dropdown.show {
      @include media-breakpoint-down(md) {
        text-align: center;
      }

      .nuxt-link-active,
      .nuxt-link-exact-active {
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: $rainbow-text-angled;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    a {
      font-family: $font-family-heading;
      text-align: center;
      font-weight: 900;

      &.nuxt-link-active,
      &.nuxt-link-exact-active {
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: $rainbow-gradient-med;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>
