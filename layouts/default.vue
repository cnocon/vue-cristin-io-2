<template>
  <div class="app-container mb-0">
    <Navbar />
    <div class="container content-container">
      <Nuxt />
    </div>
    <Footer />
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
      text-decoration: none !important;
      border-bottom: 0 !important;

      &::after {
        display: none !important;
      }
    }
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
