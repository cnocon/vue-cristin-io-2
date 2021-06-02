<template>
  <footer class="container">
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
          <a
            href="https://v3.vuejs.org"
            rel="noopener noreferrer"
            target="_blank"
            >Vue 3</a
          >
          and
          <a
            href="https://nuxtjs.org/"
            rel="noopener noreferrer"
            target="_blank"
            >Nuxt</a
          >
        </p>
      </div>
      <div class="footer-column">
        <div>
          <p>Blog Powered By</p>
          <img
            src="~assets/images/buttercms.png"
            alt="ButterCMS"
            class="logo"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  padding: 2rem 0 1.5rem;
}
.footer-row {
  display: flex;
  justify-content: space-between;

  @include media-breakpoint-down(sm) {
    flex-wrap: wrap;
    justify-content: center;
  }
}
.footer-column {
  display: flex;
  flex-direction: column;
  justify-items: flex-start;

  @include media-breakpoint-down(sm) {
    flex-basis: 100%;
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
  }
}
.footer-column:first-of-type {
  p {
    font-family: $font-family-heading;
    font-size: 0.9375rem;
    margin-bottom: 0;

    &:last-of-type {
      margin-top: 0;
      font-weight: 500;
      font-size: 0.8125rem;
    }
  }
  a {
    color: $dark;
    font-weight: 500;
    border-bottom: 1px solid $dark;
    text-decoration: none;
    background-image: none;

    &:hover {
      border-bottom: none;
    }
  }
}
.footer-column:last-of-type {
  div {
    text-align: right;
    max-width: 180px;

    @include media-breakpoint-down(sm) {
      text-align: center;
      max-width: 120px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  img {
    max-width: 175px;

    @include media-breakpoint-down(sm) {
      max-width: 120px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  p {
    text-transform: lowercase;
    text-align: right;
    font-size: 0.8125rem;
    margin-bottom: 0;
  }
}
</style>
