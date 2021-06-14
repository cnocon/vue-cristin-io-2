<template>
  <div class="navbar-inner container">
    <nuxt-link to="/" class="navbar-brand">
      <img
        :src="require(`~/assets/images/square-portrait-white.png`)"
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
          :active="isActive('blog')"
          :to="{ name: 'blog-page', params: { slug: 'blog-page', page: 1 } }"
          :class="`rounded nav-link ${
            isActive('blog') ? 'nuxt-link-active nuxt-link-exact-active' : ''
          }`"
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
              :active="isActive('blog')"
              :class="`dropdown-item ${
                isActive('blog')
                  ? 'nuxt-link-active nuxt-link-exact-active'
                  : ''
              }`"
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
          (this.$route.name.match(/blog/) &&
            this.$route.name.match(/blog/).length > 0) ||
          (this.$route.name.match(/blog-articles-slug/) &&
            this.$route.name.match(/blog-articles-slug/).length > 0)
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
      width: 175px;
      left: -150px;
      padding: 0;
      background-color: $dark;
      border-color: $primary;
      box-shadow: $box-shadow-md;

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
          font-weight: 700;
          text-transform: uppercase;
          font-family: $font-family-display;
          letter-spacing: 1px;
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
    font-size: 1.75rem;
    line-height: 1em;
    font-family: $font-family-heading;
    text-transform: lowercase;
    color: $white;
    // color: transparent;
    // background-clip: text;
    // -webkit-background-clip: text;
    // background-image: linear-gradient(
    //   130deg,
    //   #bca2f6,
    //   #cdb9f8 5%,
    //   #66d4ff 17%,
    //   #66d4ff 25%,
    //   #76f9ee 35%,
    //   #ffe366 55%,
    //   #ffe366 60%,
    //   #f7baba 80%
    // );
    // background-repeat: no-repeat;
    // background-size: cover;
    font-weight: 400;

    @include media-breakpoint-up(md) {
      font-size: 2.0625rem;
    }
  }
  .title {
    font-size: 1.15rem;
    font-family: $font-family-heading;
    white-space: nowrap;
    line-height: 1em;
    font-weight: 400 !important;
    letter-spacing: 1px;
    color: $white;
    text-transform: uppercase;
    text-indent: 2px;
  }
}
.name-and-title-mobile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  margin-left: 0.5rem;
  padding: 1.25rem 0;

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
      text-align: left;
      height: 62px;
    }
  }

  .logo-img {
    width: 62px;
    border-radius: 50%;
    display: inline-block;
    box-shadow: $rainbow-box-shadow;
    background-color: $lightest-gray;
    // background-image: $rainbow-ellipse-bottom-left;
    // border: 1px solid $primary;
    // box-shadow: $box-shadow-sm;
    // border: 0.5px solid $light-gray;
    // border: 1px solid $light-gray;

    @include media-breakpoint-up(md) {
      // margin: 1rem 1.25rem 1rem 0;
      margin: 1rem 0.5rem 1rem 0;
    }
  }
}
// #my-nav-dropdown,
.dropdown-toggle {
  // right: -1rem;

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
    font-family: $font-family-heading;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;

    @include media-breakpoint-up(md) {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    &:hover {
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(
        130deg,
        #bca2f6,
        #cdb9f8 5%,
        #66d4ff 17%,
        #66d4ff 25%,
        #76f9ee 35%,
        #ffe366 55%,
        #ffe366 60%,
        #f7baba 80%
      );
      background-repeat: no-repeat;
      background-size: cover;
    }

    &.nuxt-link-exact-active,
    &.nuxt-link-active {
      color: transparent;
      font-weight: 500;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(
        130deg,
        #bca2f6,
        #cdb9f8 5%,
        #66d4ff 17%,
        #66d4ff 25%,
        #76f9ee 35%,
        #ffe366 55%,
        #ffe366 60%,
        #f7baba 80%
      );
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .dropdown-toggle {
    font-size: 150%;
    color: $white;

    &::after {
      display: none;
    }
  }

  .nav-item {
    margin-bottom: 0;

    .nav-link {
      padding-left: 1rem;
      padding-right: 1rem;

      &.show {
        font-size: 200%;

        @include media-breakpoint-down(sm) {
          padding: 0 1rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
