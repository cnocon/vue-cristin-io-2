<template>
  <h2 :class="`section-header ${headerClasses}`">
    <span>
      <div class="icon-container">
        <slot name="section-header-icon"></slot>
      </div>
      <b>{{ text }}</b>
    </span>
  </h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    headerClasses: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.section-header {
  position: relative;
  height: 64px;
  margin-bottom: 0.5rem;

  @include media-breakpoint-down(md) {
    text-align: center;
    margin-bottom: 0.25rem;
    display: block;
    left: 0;
    transform: none;
  }

  @include media-breakpoint-down(md) {
    text-align: center;
  }

  span {
    position: absolute;
    display: inline-block;
    background-color: $white;
    vertical-align: middle;
    padding: 0 1rem 0 0;
    line-height: 64px;
    height: 64px;

    @include media-breakpoint-down(md) {
      position: relative;
      line-height: 42px;
      height: 42px;
      background-color: $white;
      z-index: 1;
    }

    @include media-breakpoint-xxs-down {
      line-height: 32px;
    }
  }

  &::before {
    display: none;

    @include media-breakpoint-xxs-up {
      content: '';
      display: inline-block;
      position: absolute;
      top: 2px;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
      height: 42px;
      margin: 0;
      width: 100%;
      max-width: none;
      box-sizing: content-box;
      border-bottom: 1px solid $light-gray;
    }

    @include media-breakpoint-up(md) {
      height: 64px;
    }
  }

  b {
    font-size: 1rem;
    font-family: $font-family-heading;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1.5px;
    color: $primary-light;
  }

  .icon-container {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    border: 2px solid $light-gray;
    border-radius: 50%;
    width: 3.625rem; // 58px
    height: 3.625rem; // 58px
    color: $border-med-gray;

    @include media-breakpoint-down(md) {
      width: 2.625rem; // 42px
      height: 2.625rem; // 42px
      margin-right: 0.25rem;
      margin-left: 12px;
    }

    @include media-breakpoint-xxs-down {
      height: 2rem; // 32px
      width: 2rem; // 32px
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &.portfolio-section-header {
    > span {
      @include media-breakpoint-down(md) {
        position: static;
        transform: none;
      }
    }
  }
  &.dark {
    .icon-container {
      color: $dark;
    }

    b {
      color: $dark;
      font-weight: 500;
      font-size: 1.125rem;
      font-family: $font-family-display;
      letter-spacing: 2px;
    }
  }
}
</style>
