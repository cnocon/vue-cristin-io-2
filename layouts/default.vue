<template>
  <CThemeProvider>
    <div class="app-container">
      <Navbar />
      <div class="container content-container">
        <Nuxt />
      </div>
      <LazyFooter></LazyFooter>
    </div>
  </CThemeProvider>
</template>

<script>
import { CThemeProvider } from '@chakra-ui/vue'

export default {
  name: 'DefaultLayout',
  components: {
    CThemeProvider,
  },
}
</script>

<style lang="scss">
.container {
  @include media-breakpoint-up(md) {
    max-width: 80rem !important; // 1280px
  }
}

.drop-cap:first-letter {
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 0.8;
  float: left;
  padding: 0 4px 0px 0;
}
.content-container {
  min-height: calc(100vh - 150px - 75px - 64px);
  margin-bottom: 2rem;

  a {
    border-bottom: 1px solid lighten($link-underline-gray, 20%);
    text-decoration: none;

    &:hover {
      &:not(.btn) {
        border-bottom: 0;
      }
    }

    &.plain {
      text-decoration: none;
      border-bottom: 0;

      &::after {
        display: none;
      }
    }
  }
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  animation: 0.4s appear;
  margin: auto auto 0;
}
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
    @include perfect-rainbow-text;
    background-image: $rainbow-ellipse-bottom-right;

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

    // .nuxt-link-active {
    //   @include perfect-rainbow-text;
    //   &:hover {
    //     @include perfect-rainbow-text;
    //   }
    // }
  }
}

.nav-link {
  // font-family: $font-family-display;
  text-align: center;
  background-color: transparent;
  display: block;
  font-size: 1rem;
  color: $white;
  text-decoration: none;
  max-width: calc(100% - 2px);
  text-transform: uppercase;
  font-weight: 800;
  border-radius: 4px;
  padding: 0 0.5rem;
  @include transition($nav-link-transition);

  &:hover,
  &:focus,
  &:active,
  &.nuxt-link-active {
    @include media-breakpoint-up(md) {
      color: var(--chakra-colors-brand-800);
      background-color: $white;
      vertical-align: baseline;
      line-height: 2rem;
    }
  }

  &.nuxt-link-active:not(:hover),
  &.nuxt-link-active:not(:focus) {
    @include perfect-rainbow-text;
    background-image: $rainbow-ellipse-bottom-right;
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

    // &:hover,
    // &:focus {
    //   text-decoration: none;
    //   border-bottom: 0;
    //   background-repeat: no-repeat;
    //   background-position: bottom left;
    //   background-size: 100% 2px;
    //   background-image: $rainbow-ellipse-bottom-right;
    // }
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
      // font-family: $font-family-display;
      font-size: 1rem;
      font-weight: 800;
      text-transform: uppercase;
      // letter-spacing: 2px;
      text-align: center;
      padding-bottom: 1.5rem;
      padding-top: 1.5rem;
      text-decoration: none;

      &:hover,
      &:focus {
        // @include perfect-rainbow-text;
        // background-image: $perfect-radial-rainbow-two;
      }
    }
  }
}
</style>
