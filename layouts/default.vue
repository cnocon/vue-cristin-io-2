<template>
  <div class="app-container mb-0">
    <div class="navbar-container">
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

<style lang="scss">
.container {
  @include media-breakpoint-up(md) {
    max-width: 1140px !important;
  }
}

.content-container {
  min-height: calc(100vh - 150px - 75px - 64px);

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
  // background-color: $primary;
  background-color: $bg-gray;
  box-shadow: $box-shadow-sm;

  @include media-breakpoint-xxs-up {
    margin-bottom: 1rem;
  }
}

.footer-container {
  background-color: $lightest-gray;
  justify-self: flex-end;
  margin-top: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @include media-breakpoint-up(sm) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
