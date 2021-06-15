<template>
  <div class="connect">
    <div class="row">
      <ul class="list-style-none row">
        <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
          <a
            href="https://github.com/cnocon"
            target="_blank"
            rel="noopener noreferrer"
            class="d-inline-block text-center plain"
          >
            <div class="rainbow-border rounded-circle p-2 d-inline-block mb-2">
              <font-awesome-icon
                :icon="['fab', 'github']"
                size="2x"
              ></font-awesome-icon>
            </div>
            <span class="d-block">GitHub</span>
          </a>
        </li>
        <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
          <a
            href="https://codepen.io/cnocon"
            target="_blank"
            rel="noopener noreferrer"
            class="plain"
          >
            <div class="rainbow-border rounded-circle p-2 d-inline-block mb-2">
              <font-awesome-icon
                :icon="['fab', 'codepen']"
                size="2x"
              ></font-awesome-icon>
            </div>
            <span class="d-block">CodePen</span>
          </a>
        </li>
        <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
          <a
            href="https://stackoverflow.com/users/2187039/cnocon"
            target="_blank"
            rel="noopener noreferrer"
            class="plain"
          >
            <div class="rainbow-border rounded-circle p-2 d-inline-block mb-2">
              <font-awesome-icon
                :icon="['fab', 'stack-overflow']"
                class="fa-w-16"
                size="2x"
              ></font-awesome-icon>
            </div>
            <span class="d-block">Stack Overflow</span>
          </a>
        </li>
        <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
          <a
            href="https://twitter.com/cnocon"
            target="_blank"
            rel="noopener noreferrer"
            class="plain"
          >
            <div class="rainbow-border rounded-circle p-2 d-inline-block mb-2">
              <font-awesome-icon
                :icon="['fal', 'hashtag']"
                class="fa-w-16"
                size="2x"
              ></font-awesome-icon>
            </div>
            <span class="d-block">Twitter</span>
          </a>
        </li>
        <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
          <a
            href="https://www.linkedin.com/in/cristinoconnor"
            target="_blank"
            rel="noopener noreferrer"
            class="plain"
          >
            <div class="rainbow-border rounded-circle p-2 d-inline-block mb-2">
              <font-awesome-icon
                :icon="['fab', 'linkedin-in']"
                class="fa-w-16"
                size="2x"
              ></font-awesome-icon>
            </div>
            <span class="d-block">LinkedIn</span>
          </a>
        </li>
        <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
          <a
            href="mailto:her@cristin.io"
            target="_blank"
            rel="noopener noreferrer"
            class="plain"
          >
            <div class="rainbow-border rounded-circle p-2 d-inline-block mb-2">
              <font-awesome-icon
                :icon="['fal', 'envelope']"
                size="2x"
              ></font-awesome-icon>
            </div>
            <span class="d-block">Email</span></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.connect {
  padding-top: 2rem;

  @media all and (max-width: $breakpoint-sm) {
    padding-bottom: 2rem;
  }

  [class^='col-'] {
    text-align: center;
    padding: 0 0 1rem;
  }

  > .row {
    @include media-breakpoint-down(md) {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }

  .row {
    justify-content: center;

    @include media-breakpoint-down(lg) {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

  li {
    @include media-breakpoint-up(md) {
      padding-left: 1rem !important;
      padding-left: 1rem !important;
    }

    &:first-of-type {
      padding-left: 0 !important;
    }

    &:last-of-type {
      padding-right: 0 !important;
    }
  }

  span {
    font-size: 14px;
    line-height: 1.25em;
    font-family: $font-family-display;
  }
}
</style>
