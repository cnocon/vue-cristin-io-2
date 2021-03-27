<template>
  <footer v-if="globals" class="app-container">
    <div class="footer-inner app-container-inner">
      <div class="footer-row">
        <div class="footer-column" role="contentinfo">
          <p class="copyright">
            <span class="copyright-year">
              &copy;{{ new Date().getFullYear() }}
            </span>
            <span class="copyright-owner"> Cristin O'Connor</span>
          </p>
          <p class="built-with-info">
            Built using&nbsp;
            <a href="https://www.gatsbyjs.org" rel="noopener" target="_blank"
              >Vue</a
            >,
            <a href="https://sass-lang.org" rel="noopener" target="_blank"
              >SCSS</a
            >, and
            <a
              href="https://www.typescriptlang.org/"
              rel="noopener"
              target="_blank"
            >
              TypeScript
            </a>
          </p>
        </div>
        <div class="footer-column">
          <div>
            <p>Blog Powered By</p>
            <img src="@/assets/images/logos/buttercms.png" alt="ButterCMS" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    globals: {},
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../scss/_variables.scss';

footer.app-container {
  position: relative;
  z-index: 3;
  justify-self: flex-end;
  align-self: flex-end;
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
  width: 100%;
  background-color: hsl(200, 16%, 97%);
}
.footer-inner {
  width: 100%;
  margin: 0 auto;
  font-size: 0.875rem;
  display: block;
}
.footer-row {
  display: flex;
  justify-content: space-between;
}
.footer-column {
  flex-direction: column;
}
.footer-column:first-of-type {
  p {
    font-family: $font-secondary;
    font-size: 0.9375rem;

    &:last-of-type {
      margin-top: 0;
      font-weight: 500;
      font-size: 0.8125rem;
    }
  }
  a {
    color: $color-primary;
    font-weight: 500;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
}
.footer-column:last-of-type {
  div {
    text-align: right;
    max-width: 180px;
  }

  img {
    max-width: 175px;
  }

  p {
    text-transform: lowercase;
    text-align: right;
    font-size: 0.8125rem;
  }
}
p {
  margin-bottom: 0;

  &:first-of-type {
    font-weight: 300;
  }
}
</style>
