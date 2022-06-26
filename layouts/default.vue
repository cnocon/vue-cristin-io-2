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
</style>
