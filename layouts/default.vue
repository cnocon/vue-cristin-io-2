<template>
  <div class="app-container mb-0">
    <div class="navbar-container mb-5">
      <Navbar />
    </div>
    <div class="container content-container mb-4">
      <Nuxt />
    </div>
    <div class="footer-container">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-container {
  a {
    border-bottom: 1px solid lighten($link-underline-gray, 20%);
    text-decoration: none;

    &:hover {
      &:not(.btn) {
        border-bottom: 0;
      }
    }

    &.plain {
      text-decoration: none !important;
      border-bottom: 0 !important;

      &::after {
        display: none !important;
      }
    }
  }
}

.navbar-container {
  width: 100%;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;

  @include media-breakpoint-down(sm) {
    margin-bottom: 1rem !important;
  }
}

.footer-container {
  background-color: $lightest-gray;
  justify-self: flex-end;
  margin-top: auto;

  @include media-breakpoint-up(md) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

.content-container {
  min-height: calc(100vh - 150px - 75px - 64px);
}

.rainbow-ellipse {
  background-image: $rainbow-ellipse-bottom-left;
  background-size: cover;
}

.rainbow-border {
  background-image: $rainbow-gradient-light;
  background-size: 100% 2px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-position: center bottom;
  background-repeat: no-repeat;
}

[target='_blank']::after {
  content: '';
  display: block;
  margin-left: 0.5rem;
  background-image: url('~assets/images/box-arrow-up-right.svg');
  display: inline-block;
  width: 0.8125rem;
  height: 0.8125rem;
  background-size: 0.8125rem 0.8125rem;
}
.nuxt-content-highlight {
  margin: 1.25rem 0;
  border-radius: 0.25rem !important;

  @include media-breakpoint-down(sm) {
    max-width: 100%;
    overflow-x: scroll;
  }

  code {
    @include media-breakpoint-down(sm) {
      min-width: 450px !important;
    }
  }
}
.app-container {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
