<template>
  <figure>
    <div>
      <NuxtImg :src="src" :alt="alt" provider="static" deefer></NuxtImg>
    </div>
    <figcaption v-show="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
figure {
  display: block;
  text-align: center;
  margin: 1.25rem auto;
  width: 100%;
  max-width: 900px;

  div {
    margin-bottom: 0;
    display: flex;
    justify-content: center;

    @include media-breakpoint-down(lg) {
      max-width: 100%;
      justify-content: flex-start;
      overflow-x: scroll;
    }
  }

  img {
    display: block;
    max-width: 100%;
    border: 2px solid $border-light-gray;
    padding: 0.625rem;
    border-radius: 0.25rem;

    @include media-breakpoint-down(sm) {
      min-width: 500px;
    }
  }

  figcaption {
    font-style: italic;
    font-family: $font-family-base;
    font-size: 0.875rem;
  }
}
</style>
