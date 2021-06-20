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

      <ul class="nav">
        <li class="nav-item">
          <NuxtLink :active="isActive('resume')" to="/resume" class="nav-link"
            >Résumé</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink
            :active="isActive('portfolio')"
            to="/portfolio"
            class="nav-link"
            >Portfolio</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink
            :active="isActive('blog')"
            :to="{ name: 'blog-page', params: { slug: 'blog-page', page: 1 } }"
            :class="`nav-link ${isActive('blog') ? 'nuxt-link-active' : ''}`"
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

  @include media-breakpoint-up(md) {
    padding-top: 2rem;
    padding-bottom: 2rem;
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
  // min-width: 20.3125rem; // 325px
  // margin-right: auto;
  // justify-content: flex-end;
  // width: 100%;
  // flex-direction: row;
  // align-items: center;
  // margin-left: 0;

  @include media-breakpoint-down(md) {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-between;
    margin-left: 0;
  }

  @include media-breakpoint-down(sm) {
    position: absolute;
    left: calc(100% - 42px + 7.5px);
    width: 100%;
    display: block;
    margin: 0;
    padding: 0;
  }

  .dropdown-menu.dropdown-menu-right {
    &.show {
      background-color: $dark;
      color: $white;

      @include media-breakpoint-down(md) {
        position: absolute;
        top: 74px;
        z-index: 10;
        right: calc(-100% - 56px);
        min-width: calc(100vw + 15px);
        width: 100%;
        padding: 3px 0 0;
        margin: 0;
        box-shadow: $box-shadow-md;
        @include rainbow-link-decoration;
        background-size: 100% 3px;
        background-position: top left;
        transition: none !important;
      }

      @include media-breakpoint-down(sm) {
        right: calc(-50% - 15px);
        min-width: calc(100vw + 15px);
        width: 100%;
        padding: 3px 0 0;
        margin: 0;
      }

      li {
        padding-bottom: 0.85rem;
        padding-top: 0.85rem;
        margin-bottom: 0;
        border-bottom: 1px solid $white;

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

          &:hover,
          &:focus {
            text-decoration: none;
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            background-image: $rainbow-gradient-med;
            background-repeat: no-repeat;
            background-size: cover;
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
    @include media-breakpoint-up(lg) {
      display: none;
    }

    &.nav-link {
      color: $white;

      &:hover {
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: $rainbow-ellipse-bottom-left;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    &::after {
      display: none;
    }

    .svg-inline--fa {
      width: 2.625rem; // 42px
      height: 2.625rem; // 42px
    }
  }

  .nav-item:not(#navbarDropdown) {
    margin-bottom: 0;

    &:last-of-type {
      .nav-link {
        @include media-breakpoint-up(md) {
          padding-right: 0;
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

.nav-link:not(#navbarDropdownLink) {
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
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: radial-gradient(
      ellipse at bottom left,
      hsl(259, 83%, 70%) 30%,
      hsl(197, 100%, 70%) 40%,
      hsl(175, 92%, 67%) 50%,
      hsl(49, 100%, 80%) 60%,
      hsl(0, 80%, 75%) 75%
    );
    background-repeat: no-repeat;
    background-size: cover;
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.9375rem;

  @include media-breakpoint-up(md) {
    display: flex;
    flex-wrap: nowrap;
    padding: 1.75rem 1rem;
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
    // background-image: $rainbow-gradient-med;
    background-image: $rainbow-text-angled-dark;
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
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // width: 100%;
  display: none;

  @include media-breakpoint-down(sm) {
    display: inline-flex;
    flex-wrap: wrap;
    padding: 0.5rem 0 0.5rem 0.5rem;
  }

  @include media-breakpoint-xxs-down {
    justify-content: flex-start;
    text-align: left;
    align-items: flex-start;
  }

  .name {
    @include media-breakpoint-xxs-down {
      font-size: 22px;
    }
  }

  .title {
    @include media-breakpoint-xxs-down {
      font-size: 14px;
    }
  }
}
.navbar-brand {
  text-decoration: none;
  // display: flex;
  // align-items: center;
  // margin-right: 0;
  // width: 100%;
  // justify-content: space-around;
  min-width: calc(100% - 42px);
  display: flex;
  flex-wrap: wrap;
  max-width: unset;
  margin: 0;

  @include media-breakpoint-up(md) {
    margin-right: 1rem;
    justify-content: flex-start;
    text-align: left;
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
      // display: flex;
      // flex-wrap: wrap;
      // margin-left: 15px;
      // justify-content: flex-start;
      // align-items: center;
      // max-width: 50%;
      display: inline-block;
      max-width: calc(100% - 62px - 15px - 12px);
      margin: 0 !important;
    }
  }

  .logo-img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: inline-block;
    box-shadow: $rainbow-box-shadow-dark;
    background-color: $lightest-gray;
    margin-right: 0;

    @include media-breakpoint-xxs-down {
      display: none;
    }

    @include media-breakpoint-up(sm) {
      margin-right: 0.75rem;
      width: 3rem; // 48px
      height: 3rem; // 48px
    }

    @include media-breakpoint-up(md) {
      margin: 1rem 0.5rem 1rem 0;
      width: 3.875rem; // 62px
      height: 3.875rem; // 62px
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

#navbarDropdownLink {
  color: $white;

  @include media-breakpoint-down(sm) {
    font-size: unset;
    height: 2.625rem; // 42px
    width: 2.625rem; // 42px
    display: block;
    padding: 0;
  }
}
#navbarDropdown {
  @include media-breakpoint-down(md) {
    position: relative;
    right: 0.9375rem; // 15px
  }

  &.show {
    @include media-breakpoint-down(md) {
      text-align: center;
    }
  }
}
</style>
