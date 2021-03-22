<template>
  <Header :globals="globals"></Header>
  <div v-if="globals?.name" class="app-container">
    <router-view :globals="globals" :key="$route.fullPath"></router-view>
  </div>
  <Footer :globals="globals"></Footer>
</template>

<script>
import JSONBinService from '@/services/JSONBinService'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      globals: {},
    }
  },
  created() {
    JSONBinService.getGlobals().then((res) => {
      this.globals = res.data
    })
  },
}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_grid.scss';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 16px;
  position: relative;
  position: relative;
}
body {
  font-family: 'Open Sans', sans-serif;
  flex-direction: column;
  margin: 0;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
  line-height: $line-height-gr;
}
#app > div:first-of-type {
  min-height: 100vh;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
}
header + .app-container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
.app-container {
  padding: 0 0.9375rem;
  margin: 0;
  width: 100%;
}
.app-container-inner {
  max-width: 62.5rem;
  margin: 0 auto;
}
.text-center {
  text-align: center;
}
.font-weight-300 {
  font-weight: 300 !important;
}
.font-weight-500 {
  font-weight: 500 !important;
}
.font-weight-600 {
  font-weight: 600 !important;
}
.font-weight-700 {
  font-weight: 700 !important;
}
.font-primary {
  font-family: $font-primary !important;
}
.font-secondary {
  font-family: $font-secondary !important;
}
.font-tertiary {
  font-family: $font-tertiary !important;
}
.inline-block {
  display: inline-block !important;
}
.block {
  display: block !important;
}
.mt-0 {
  margin-top: 0 !important;
}
.mt-15 {
  margin-top: 15px !important;
}
header.app-container {
  height: 21.125rem;
}
footer.app-container {
  height: 7.875rem;
}
.site-content {
  min-height: calc(100vh - (19.25rem + 7.875rem + 30px));
  display: flex;
  flex-direction: column;
  padding-bottom: 3.75rem;

  p,
  li,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  a,
  nav,
  i,
  b {
    line-height: $line-height-gr;
  }

  p,
  li {
    font-size: 1rem;
    font-family: $font-primary;
    font-weight: 400;
  }
  p,
  ul,
  ol {
    margin-top: 0.9375rem;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.875rem;
    margin-bottom: 10px;
  }
  h2 {
    font-family: $font-secondary;
    font-weight: 900;
    font-size: 2.375rem;
  }
  h3 {
    font-family: $font-secondary;
    font-weight: 900;
    font-size: 1.875rem;
  }
  h4 {
    font-family: $font-secondary;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0;
  }
  h5,
  h6 {
    font-family: $font-tertiary;
    margin-top: 1.25rem;
    margin-bottom: 5px;
  }
  h5 {
    font-size: 1.25rem;
    font-weight: 500;
  }
  h6 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
  }
  a,
  a:link,
  a:visited {
    color: $color-primary;
    font-weight: 500;
    text-decoration: none;
    background-image: $rainbow-gradient-dark;
    background-size: 100% 1px;
    background-position: center bottom;
    background-repeat: no-repeat;

    &:hover {
      background-size: 0;
    }
  }
  ol,
  ul {
    margin: 0.9375rem 0 0.3125rem;
    padding: 0 0 0 2.8125rem;

    &.circle {
      list-style: circle;
    }

    &.inline {
      display: flex;
      padding-left: 0;

      li {
        flex-direction: column;
        margin: 0 15px 10px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      &.text-center {
        justify-content: center;
      }
    }
  }
  ul {
    list-style: none;
  }
}
// This SCSS is in the Global Stylesheet because it has to exist prior
// to the component that needs it, the About view, running its scripts
.rotate-header {
  padding-top: 15px;
  position: relative;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.5em;
  font-family: $font-secondary;
  text-transform: none;
  color: $color-primary;
  font-weight: 300;
  margin-bottom: 0;
  text-align: center;

  .rotate-words {
    font-size: inherit;
    min-height: 22px;
    line-height: 34px;
    display: inline-block;
    min-width: 290px;
    text-align: left;

    span {
      font-size: inherit;
      line-height: 1.4;
      display: inline-block;
      position: absolute;
      opacity: 0;
      font-family: $font-secondary;
      font-weight: 300;

      &:first-of-type {
        opacity: 1;
      }

      &.rotate-in {
        font-size:inherit;
        line-height: 1.4;
        animation: rotateInWord 0.5s linear forwards;
        -webkit-animation: rotateInWord 0.5s linear forwards;
        font-weight: 800;
        font-family: $font-secondary;
      }

      &.rotate-out {
        font-size: inherit;
        animation: rotateOutWord 0.5s linear forwards;
        -webkit-animation: rotateOutWord 0.5s linear forwards;
        position: absolute;
        opacity: 0;
        font-weight: 800;
        font-family: $font-secondary;
        line-height: inherit;
      }
    }

    @-webkit-keyframes rotateInWord {
      0% {
        opacity: 0;
        -webkit-transform: translateY(-39px);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateY(0px);
      }
    }
    @-webkit-keyframes rotateOutWord {
      0% {
        opacity: 1;
        -webkit-transform: translateY(0px);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateY(39px);
      }
    }
    @keyframes rotateInWord {
      0% {
        opacity: 0;
        transform: translateY(-39px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
    @keyframes rotateOutWord {
      0% {
        opacity: 1;
        transform: translateY(0px);
      }
      100% {
        opacity: 0;
        transform: translateY(39px);
      }
    }
  }
}
</style>
