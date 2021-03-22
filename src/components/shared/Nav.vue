<template>
  <nav id="nav">
    <router-link :to="{ name: 'About' }"><span>About</span></router-link>
    <router-link :to="{ name: 'Docs' }"><span>Docs</span></router-link>
    <!-- | <router-link to="/blog">Blog</router-link> -->
    <router-link :to="{ name: 'Resume' }"><span>Resumé</span></router-link>
    <!-- | <router-link to="/portfolio">Portfolio</router-link> -->
  </nav>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../scss/_variables.scss';

$nav-text-hover: lighten($black, 17.5%);
$nav-text: lighten($border-dark-gray, 7.5%);

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
        // transform: scale(1.075);
        // font-size: 0.9302325581rem;
        // background-color: lighten($bg-med-gray, 1%);
        box-shadow: $box-shadow-md;
        color: $nav-text-hover;
        border: 1px solid lighten($color-primary, 30%);
      }
    }

    span {
      color: $nav-text;
      background-color: $white;
      text-transform: uppercase;
      line-height: $line-height-gr;
      border: 1px solid transparent;
      font-weight: 900;
      font-family: $font-secondary;
      box-shadow: $box-shadow-md-transparent;
      letter-spacing: 2px;
      text-align: center;
      display: inline-block;
      padding: 1px 7px;
      border-radius: 4px;
      // transform: scale(1);
      transition: all 0.3s ease;
      // margin: 0 0.03488372095em;
      box-sizing: border-box;
    }

    &.router-link-exact-active {
      span {
        color: $black;
        font-weight: 800;
        box-shadow: $box-shadow-md;
        // transform: scale(1.075);
        border: 1px solid lighten($color-primary, 5%);
        border-radius: 4px;
      }
    }
  }
}
</style>
