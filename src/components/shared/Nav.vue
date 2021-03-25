<template>
  <nav id="nav">
    <router-link :to="{ name: 'about' }"><span>About</span></router-link>
    <router-link
      :to="{ name: 'posts', query: { page: '1' } }"
      :class="manualActiveClass"
    >
      <span>Blog</span>
    </router-link>
    <router-link :to="{ name: 'docs' }"><span>Docs</span></router-link>
    <!-- | <router-link to="/blog">Blog</router-link> -->
    <router-link :to="{ name: 'resume' }"><span>Resumé</span></router-link>
    <!-- | <router-link to="/portfolio">Portfolio</router-link> -->
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  computed: {
    manualActiveClass() {
      return this.$route.fullPath.split('posts').length > 1
        ? 'router-link-active router-link-exact-active'
        : ''
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../scss/_variables.scss';

#nav {
  padding: 1.5rem 0 0;
  text-align: center;
  color: $border-med-gray;

  a {
    text-decoration: none;
    margin: 0 0.875rem;
    text-align: center;

    &:hover {
      &.router-link-exact-active {
        span {
          background-color: $white;
        }
      }

      span {
        box-shadow: $box-shadow-md;
        text-decoration: none;
        color: $nav-text-hover;
      }
    }

    span {
      color: $color-primary;
      // text-decoration: underline;
      background-color: $white;
      text-transform: uppercase;
      font-weight: 900;
      font-family: $font-secondary;
      box-shadow: $box-shadow-md-transparent;
      letter-spacing: 2px;
      text-align: center;
      display: inline-block;
      padding: 4px 7px;
      border-radius: 4px;
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    &.router-link-exact-active {
      span {
        color: $black;
        font-weight: 800;
        text-decoration: none;
        box-shadow: $box-shadow-md;
        // border: 1px solid lighten($color-primary, 5%);
        border-radius: 4px;
      }
    }
  }
}
</style>
