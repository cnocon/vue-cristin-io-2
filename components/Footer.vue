<template>
  <div class="footer-container">
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
  </div>
</template>

<style lang="scss" scoped>
.footer-container {
  background-color: #f5f7f8;
  justify-self: flex-end;
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid $border-light-gray;

  @include media-breakpoint-up(sm) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-top: 4rem;
  }
}
footer {
  padding: 2rem 0;
}
.footer-column {
  > p {
    text-align: center;
    margin-bottom: 0;

    &.copyright {
      margin-bottom: 0.5rem;
      line-height: 1.875rem;
      vertical-align: middle;
      font-size: 1.375rem;

      > span {
        font-family: $font-family-base;
        display: inline-block;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        vertical-align: inherit;

        &.copyright-symbol {
          font-size: 20px;
          letter-spacing: -4px;
          color: $primary;
        }

        &.copyright-year {
          font-weight: 300;
          color: $primary;
        }

        &.copyright-owner {
          font-family: $font-family-brand;
          text-shadow: 1px 0 rgba(0, 0, 0, 1);
          font-weight: 400;
          @include perfect-rainbow-text;
          background-image: $rainbow-ellipse-bottom-left-dark;
        }
      }
    }

    &.built-with-info {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 1.25rem; // 20px
      line-height: 1.3125rem; // 21px
      color: $primary;
      font-weight: 300;

      a {
        display: inline-block;
        font-size: 1.1875rem; // 19px
        line-height: 1em;
        vertical-align: top;
        color: $primary;
        text-decoration: underline;
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
