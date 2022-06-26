<template>
  <client-only placeholder="Loading...">
    <div class="navbar-wrapper">
      <div class="navbar-wrapper-inner container">
        <NuxtLink :to="{ name: 'index' }" class="navbar-brand-and-logo">
          <NuxtImg
            src="/components/square-portrait-white.png"
            alt="Cristin O'Connor"
            class="navbar-logo"
            provider="static"
          ></NuxtImg>
          <div class="navbar-brand">
            <h2
              :class="`${
                $route.name === 'index'
                  ? 'nuxt-link-active nuxt-link-exact-active'
                  : ''
              }`"
            >
              Cristin O'Connor
            </h2>
            <h3>Front End Engineer</h3>
          </div>
        </NuxtLink>

        <!-- formerly .nav -->
        <ul class="nav-item-list" role="navigation">
          <li class="nav-item">
            <NuxtLink to="/resume" class="nav-link">Résumé</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/portfolio" class="nav-link">Portfolio</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              :active="isActiveNavItem('blog-page')"
              :to="{
                name: 'blog-page',
                params: { slug: 'blog-page', page: 1 },
              }"
              :class="navItemClasses(['blog-page'])"
              >Blog</NuxtLink
            >
          </li>

          <li
            :class="`nav-item dropdown ${showMenu ? 'show' : ''}`"
            @click.stop.prevent="toggleMenu"
          >
            <button
              id="navbarDropdown"
              href="#dropdownMenu"
              role="button"
              :aria-label="`${
                showMenu
                  ? 'Close Mobile Navigation Button'
                  : 'Mobile Navigation Button'
              }`"
              :aria-expanded="`${showMenu ? 'true' : 'false'}`"
              :class="`nav-link dropdown-toggle ${showMenu ? 'show' : ''}`"
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
            </button>

            <ul
              v-show="showMenu"
              id="dropdownMenu"
              :class="`dropdown-item-list dropdown-menu ${
                showMenu ? 'show' : ''
              }`"
              role="navigation"
              aria-label="Mobile Navigation Menu"
              aria-labelledby="#navbarDropdown"
            >
              <li class="dropdown-nav-item" role="presentation">
                <NuxtLink
                  to="resume/"
                  :active="isActiveNavItem('resume')"
                  class="dropdown-link"
                  role="menuitem"
                  >Résumé</NuxtLink
                >
              </li>
              <li class="dropdown-nav-item" role="presentation">
                <NuxtLink
                  to="/portfolio"
                  :active="isActiveNavItem('portfolio')"
                  class="dropdown-link"
                  role="menuitem"
                  >Portfolio</NuxtLink
                >
              </li>
              <li class="dropdown-nav-item" role="presentation">
                <NuxtLink
                  :to="{
                    name: 'blog-page',
                    params: { slug: 'blog-page', page: 1 },
                  }"
                  :active="isActiveNavItem('blog-page')"
                  :class="navItemClasses(['blog-page', true])"
                  role="menuitem"
                  >Blog</NuxtLink
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    isExactActiveNavItem(linkedRouteName) {
      return this.$route.name === linkedRouteName
    },
    isActiveNavItem(linkedRouteName) {
      /**
       * If its one of the special blog route cases check if its not a
       * different not-nested blog route (blog-articles-slug)
       */
      return linkedRouteName.match(/blog/) !== null
        ? this.$route.name.match(/blog/)
        : this.isExactActiveNavItem(linkedRouteName)
    },
    navItemClasses([linkedRouteName, isDropdown = false]) {
      // This only has to determine classes if it's not an exact Route match, because Nuxt can do that on its own
      const str = isDropdown ? 'dropdown-link' : 'nav-link'
      if (this.isExactActiveNavItem(linkedRouteName)) {
        return str
      } else if (
        linkedRouteName === 'blog-page' &&
        this.$route.name === 'blog-articles-slug'
      ) {
        return `${str} nuxt-link-active`
      } else {
        return str
      }
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  width: 100%;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  background-color: $dark;
  box-shadow: $box-shadow-sm;

  @include media-breakpoint-xxs-up {
    margin-bottom: 1rem;
  }

  @include media-breakpoint-up(md) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  @include media-breakpoint-up(sm) {
    margin-bottom: 0;
  }

  a[aria-current='page'] {
    @include perfect-rainbow-text;
  }
}

.navbar-wrapper-inner {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.9375rem;

  @include media-breakpoint-up(md) {
    padding: 0 0.9375rem;
  }
}

.navbar-brand-and-logo {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;

  @include media-breakpoint-up(md) {
    padding: 0 0.9375rem;
    display: flex;
    flex-wrap: wrap;
    min-width: unset;
    margin: 0;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1em;
    text-transform: capitalize;
    color: $white;
    font-weight: 300;
    letter-spacing: 1px;
    margin: 0 0 0.5rem;
    font-family: $font-family-brand;

    @include media-breakpoint-xxs-up {
      font-size: 1.5rem;
    }

    @include media-breakpoint-up(sm) {
      font-size: 1.685rem; // 28px
      line-height: 1.1em;
      font-weight: 300;
      letter-spacing: 1px;
      font-size: 22px;
      margin-bottom: 0.5rem;
    }

    @include media-breakpoint-up(md) {
      font-size: 30px;
      letter-spacing: 2px;
    }

    @include media-breakpoint-up(lg) {
      font-size: 42px;
    }
  }

  h3 {
    text-transform: uppercase;
    font-family: $font-family-display;
    letter-spacing: 3px;
    font-size: 1.25rem;
    line-height: 1em;
    color: $white;
    margin: 0;

    @include media-breakpoint-up(sm) {
      font-size: 1.325rem;
      line-height: 1.1em;
    }

    @include media-breakpoint-up(md) {
      margin-top: 5px;
      font-size: 1.5rem;
    }
  }
}

.navbar-logo {
  display: none;

  @include media-breakpoint-up(sm) {
    display: block;
    width: 48px; // 48px
    height: 48px; // 48px
    border-radius: 50%;
    box-shadow: hsl(175, 80%, 60%) 0 3px, hsl(58, 100%, 60%) -3px 0,
      hsl(240, 80%, 69%) 3px 0, hsl(355, 80%, 72.5%) 0 -3px 0;
    background-color: $lightest-gray;
    margin: 0 0.9375rem 0 0;
  }

  @include media-breakpoint-up(sm) {
    margin-right: 0.75rem;
  }

  @include media-breakpoint-up(md) {
    width: 3.375rem; // 54px
    height: 3.375rem; // 54px
    margin: 1rem 0.5rem 1rem 0;
  }

  @include media-breakpoint-up(lg) {
    margin: 0 1.25rem 0 0;
    width: 4.875rem; // 78px
    height: 4.875rem; // 78px
  }
}

.nav-item-list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 0;

  @include media-breakpoint-down(md) {
    padding-left: 0;
  }

  .nav-item {
    display: none;

    @include media-breakpoint-up(md) {
      display: inline-block;
      margin-bottom: 0;
      padding-left: 0.45rem;
      padding-right: 0.45rem;
    }

    @include media-breakpoint-up(lg) {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    &.dropdown {
      display: inline-block;
      width: 48px;
      height: 48px;
      margin: 0;

      @include media-breakpoint-up(md) {
        display: none;
      }
    }

    .nuxt-link-active {
      @include perfect-rainbow-text;
      &:hover {
        @include perfect-rainbow-text;
      }
    }
  }
}

.nav-link {
  font-family: $font-family-display;
  text-align: center;
  display: block;
  font-size: 1.5rem; // 18px
  color: $white;
  text-decoration: none;
  // font-family: $font-family-base;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: lowercase;
  @include transition($nav-link-transition);

  @include media-breakpoint-up(md) {
    padding-left: 0;
    padding-right: 0;
    // font-size: 1.1875rem; // 19px
    line-height: 1em;
  }

  @include media-breakpoint-up(lg) {
    padding-right: 0;
    letter-spacing: 0;
  }

  &:not(.dropdown-toggle):hover,
  &:not(.dropdown-toggle):focus {
    @include perfect-rainbow-text;
  }
}

// The button
.dropdown-toggle {
  background-color: transparent;
  color: $white;
  outline-color: transparent;
  border-color: transparent;
  height: 48px; // 48px
  width: 48px; // 48px
  display: block;
  padding: 0;
  -webkit-appearance: none;

  @include media-breakpoint-up(md) {
    display: none;
  }

  &:hover,
  &:focus {
    color: $white;
  }

  &::after {
    display: none;
  }

  .svg-inline--fa {
    width: 2.625rem; // 42px
    height: 2.625rem; // 42px
  }
}

.dropdown-item-list {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
  margin-left: 0;
  background-color: darken($primary, 2.5%);
  color: $white;

  @include media-breakpoint-down(md) {
    padding-left: 0;
    margin-left: 0;
  }

  @include media-breakpoint-up(md) {
    display: none;
  }

  &.show {
    display: block;
    position: absolute;
    top: calc(100% + 4px);
    right: unset;
    left: 0;
    z-index: 2;
    min-width: 0;
    max-width: 100%;
    height: auto;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    border-top: 3px solid $primary-light;

    &:hover,
    &:focus {
      text-decoration: none;
      border-bottom: 0;
      background-repeat: no-repeat;
      background-position: bottom left;
      background-size: 100% 2px;
      background-image: $rainbow-ellipse-bottom-right;
    }
  }

  .dropdown-nav-item {
    margin-bottom: 0;
    border-bottom: 1px solid $primary-light;
    display: block;

    @include media-breakpoint-up(md) {
      display: none;
    }

    &:last-of-type {
      border-bottom: 0;
    }

    a {
      color: $white;
      display: block;
      text-transform: lowercase;
      font-family: $font-family-display;
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 2px;
      text-align: center;
      padding-bottom: 1.5rem;
      padding-top: 1.5rem;
      text-decoration: none;

      &:hover,
      &:focus {
        @include perfect-rainbow-text;
        background-image: $perfect-radial-rainbow-two;
      }
    }
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

  &.nav-link,
  &.dropdown-link {
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: $rainbow-gradient-med;
    background-repeat: no-repeat;
    background-size: cover;

    &:hover,
    &:focus {
      color: $white;
      background-size: cover;
    }
  }

  h2 {
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: $rainbow-text-angled-dark;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
