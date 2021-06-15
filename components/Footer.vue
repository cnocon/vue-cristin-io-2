<template>
  <footer class="container">
    <div class="footer-row">
      <div class="footer-column" role="contentinfo">
        <p class="copyright">
          <span class="copyright-symbol">&copy;</span>
          <span class="copyright-year">{{ new Date().getFullYear() }}</span>
          <span class="copyright-owner"> Cristin O'Connor</span>
        </p>
        <p class="built-with-info">
          Built with&nbsp;<a
            href="https://nuxtjs.org/"
            rel="noopener noreferrer"
            target="_blank"
            >NuxtJS</a
          >
        </p>
      </div>
      <div class="footer-column"></div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 2rem 0;
}

.footer-row {
  // display: flex;
  // justify-content: space-between;

  // @include media-breakpoint-down(sm) {
  //   flex-wrap: wrap;
  //   justify-content: center;
  // }
}

.footer-column {
  // display: flex;
  // flex-direction: column;
  // justify-items: flex-start;

  // @include media-breakpoint-down(sm) {
  //   flex-basis: 100%;
  //   width: 100%;
  //   text-align: center;
  // }

  > p {
    text-align: center;
    margin-bottom: 0;

    &.copyright {
      margin-bottom: 0.5rem;
      line-height: 1.875rem;
      vertical-align: middle;
      font-size: 1.375rem;

      > span {
        font-family: $font-family-heading;
        display: inline-block;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        vertical-align: inherit;

        &.copyright-symbol {
          font-size: 20px;
          letter-spacing: -4px;
          color: rgba($primary, 0.3875);
        }

        &.copyright-year {
          font-weight: 500;
          letter-spacing: 0;
          color: rgba($primary, 0.3875);
        }

        &.copyright-owner {
          font-weight: 500;
          letter-spacing: -1px;
          opacity: 0.325;
        }
      }
    }

    &.built-with-info {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 1.25rem; // 20px
      line-height: 1.3125rem; // 21px
      color: rgba($primary, 0.3875);
      font-family: $font-family-display;
      font-weight: 300;

      a {
        display: inline-block;
        font-size: 1.1875rem; // 19px
        line-height: 1em;
        vertical-align: top;
        color: $primary;
        text-decoration: underline;
        letter-spacing: 1px;
        font-family: inherit;
        font-weight: 300;

        &:hover {
          text-decoration: none;
        }

        &::after {
          display: none;
        }
      }
    }
  }
}
</style>
