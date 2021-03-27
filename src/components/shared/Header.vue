<template>
  <header v-if="globals" class="app-container text-center">
    <div class="logo">
      <img
        src="@/assets/images/global/square-portrait.png"
        alt="globals.name"
      />
    </div>
    <div class="site-title">
      <h2 class="title">
        <router-link :to="{ name: 'about' }">
          {{ globals.name }}
        </router-link>
      </h2>
      <p class="subtitle">{{ globals.jobTitle }}</p>
    </div>
    <Nav></Nav>
  </header>
</template>

<script lang="ts">
import Nav from '@/components/shared/Nav.vue'

export default {
  name: 'Header',
  props: {
    globals: {},
  },
  components: {
    Nav,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/scss/_variables.scss';
.logo {
  margin: 1.5rem auto 0.75rem;
  width: 100%;
  text-align: center;

  img {
    height: 9.375rem;
    width: 9.375rem;
    border-radius: 50%;
    vertical-align: middle;
    margin: 0 auto;
    border-radius: 50%;
    display: block;
    border: 1px solid $border-med-gray;
    box-shadow: $rainbow-box-shadow-dark;
  }
}
.site-title {
  .title,
  .title a,
  .subtitle {
    margin: 0;
    font-family: Oswald, sans-serif;
    color: $color-primary;
  }
  .title a {
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1.45rem;
    line-height: 1.25rem;
    text-decoration: none;
    letter-spacing: 1px;
    padding: 0;
    background-image: none;
    vertical-align: bottom;
    transition: all 0.4s ease-in-out;

    &:hover {
      text-decoration: underline;
      // );
      // z-index: 0;
      // color: transparent;
      // -webkit-background-clip: text;
      // background-clip: text;
      // background-image: linear-gradient(
      //   90deg,
      //   rgba(158, 118, 244, 60%) 0%,
      //   hsla(197, 78%, 39%, 60%) 20%,
      //   hsla(175, 74%, 43%, 60%) 40%,
      //   hsla(49, 100%, 60%, 60%) 55%,
      //   rgba(240, 85, 85, 60%) 95%
      // );
    }
  }
  .subtitle {
    font-style: italic;
    font-weight: 300;
    margin: 0.4688rem 0;
    display: inline-block;
    padding: 0 0.1875rem;
    color: $color-primary;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-family: Oswald, sans-serif;
    letter-spacing: 1px;
    background-color: $highlight-yellow;
  }
}
</style>
