<template>
  <div class="navbar-container">
    <div class="navbar-inner container">
      <NuxtLink :to="{ name: 'index' }" class="navbar-brand">
        <nuxt-img
          src="/components/square-portrait-white.png"
          alt="Cristin O'Connor"
          class="logo-img"
        ></nuxt-img>

        <div class="name-and-title">
          <div :class="`name ${homepageClasses()}`">Cristin O'Connor</div>
          <div class="title">Front End Engineer</div>
        </div>

        <div class="name-and-title-mobile">
          <div :class="`name ${homepageClasses()}`">Cristin O'Connor</div>
          <div class="title">Front End Engineer</div>
        </div>
      </NuxtLink>

      <ul class="nav ml-0 mb-0">
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
              isActive('blog') ? 'nuxt-link-active' : ''
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
            id="navbarDropdownLink"
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
              size="2x"
            ></font-awesome-icon>
            <font-awesome-icon
              v-else
              :icon="['fal', 'bars']"
            ></font-awesome-icon>
          </a>

          <ul
            v-show="showMenu"
            id="dropdownMenu"
            :class="
              showMenu
                ? 'dropdown-menu dropdown-menu-right show'
                : 'dropdown-menu dropdown-menu-right'
            "
            aria-labelledby="#navbarDropdownLink"
          >
            <li class="nav-item" role="presentation">
              <NuxtLink
                to="/resume"
                :active="isActive('resume')"
                class="dropdown-item"
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
                  isActive('blog') ? 'nuxt-link-active' : ''
                }`"
                role="menuitem"
                >Blog</NuxtLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
        ? 'nuxt-link-active nuxt-link-exact-active'
        : ''
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-container {
  width: 100%;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  background-color: $dark;
  box-shadow: $box-shadow-sm;

  @include media-breakpoint-xxs-up {
    margin-bottom: 1rem;
  }

  @include media-breakpoint-up(sm) {
    margin-bottom: 0;
  }
}
.navbar-container-inner {
  @include media-breakpoint-up(sm) {
    max-width: 540px;
  }
}
.nav {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
  margin-left: auto;

  @include media-breakpoint-up(md) {
    min-width: 20.3125rem; // 325px
    margin-right: auto;
    justify-content: flex-end;
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-left: 0;
  }

  @include media-breakpoint-down(md) {
    width: 3rem; // 48px
    height: 3rem; // 48px
    margin-right: 0.4688rem; // 7.5px
  }

  .dropdown-menu.dropdown-menu-right {
    &.show {
      position: absolute;
      border-top: 1px solid $white;
      margin-top: 1.25rem; // 25px
      width: 100%;
      right: 0;
      padding: 0;
      background-color: $dark;
      color: $white;
      box-shadow: $box-shadow-md;
      z-index: 10;

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
            text-decoration: none;
          }
        }

        &:last-of-type {
          border-bottom: 0;
        }

        a {
          color: $white;
          font-weight: 700;
          text-transform: uppercase;
          font-family: $font-family-heading;
          letter-spacing: 2px;
          text-align: center;
          text-decoration: none;

          &:hover {
            color: $dark;
            background-color: $white;
          }

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

  .dropdown-toggle {
    @include media-breakpoint-up(md) {
      display: none;
    }

    &.nav-link {
      color: $white;

      &:hover {
        color: $white;
        text-decoration: underline;
      }
    }

    &::after {
      display: none;
    }

    .svg-inline--fa {
      width: 48px !important;
      height: 48px !important;
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

    &.dropdown {
      &.show {
        @include media-breakpoint-down(md) {
          text-align: center;
        }
      }
    }

    a {
      font-family: $font-family-heading;
      text-align: center;
      font-weight: 700;
    }
  }
}

.nav-link {
  display: block;
  font-size: 1.125rem; // 18px
  color: $white;
  text-decoration: none;
  font-family: $font-family-base;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  @include transition($nav-link-transition);

  @include media-breakpoint-up(md) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  &:hover {
    text-decoration: underline;
    color: $white;
  }
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

.name {
  font-size: 1rem;
  line-height: 1em;
  font-family: $font-family-display;
  text-transform: uppercase;
  color: $white;
  font-weight: 300;
  letter-spacing: 3px;

  @include media-breakpoint-xxs-up {
    font-size: 1.25rem;
  }

  @include media-breakpoint-up(md) {
    font-size: 1.8438rem;
  }

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

.title {
  font-size: 0.9rem;
  font-family: $font-family-heading;
  white-space: nowrap;
  line-height: 1.725em;
  font-weight: 700;
  color: $white;
  text-transform: uppercase;
  text-indent: 2px;
  letter-spacing: 1px;

  @include media-breakpoint-xxs-up {
    font-size: 0.9rem;
  }

  @include media-breakpoint-up(sm) {
    font-size: 1.2rem;
  }

  @include media-breakpoint-up(md) {
    font-size: 1.15rem;
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

  @include media-breakpoint-xxs-down {
    justify-content: flex-start;
    text-align: left;
    align-items: flex-start;

    .name {
      font-size: 22px;
    }

    .title {
      font-size: 14px;
    }
  }

  @include media-breakpoint-xxs-up {
    padding: 0.5rem 0;
  }

  @include media-breakpoint-up(sm) {
    display: none;
  }
}
.navbar-brand {
  padding: 5px 0 5px 3px; // 3px left for -2px box shadow on img container
  margin-right: 1rem;
  text-decoration: none;
  white-space: nowrap;
  margin-right: 0;
  width: calc(100% - 48px);
  display: flex;
  align-items: center;

  @include media-breakpoint-up(md) {
    justify-content: flex-start;
    text-align: left;
    margin-right: 1rem;
  }

  &.hover {
    cursor: pointer;

    .name {
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: $rainbow-text-angled;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .name-and-title {
    display: none;

    @include media-breakpoint-up(sm) {
      display: flex;
      flex-wrap: wrap;
      margin-left: 15px;
      justify-content: flex-start;
      align-items: center;
      max-width: 50%;
    }
  }

  .logo-img {
    width: 3rem;
    border-radius: 50%;
    display: inline-block;
    box-shadow: $rainbow-box-shadow-dark;
    background-color: $lightest-gray;

    @include media-breakpoint-xxs-down {
      display: none;
    }

    @include media-breakpoint-up(md) {
      margin: 1rem 0.5rem 1rem 0;
      width: 3.875rem; // 62px
    }
  }
}
.navbar-nav {
  display: flex;
  flex-direction: column; // cannot use `inherit` to get the `.navbar`s value
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  .dropdown-menu {
    position: static;
  }
}
</style>
