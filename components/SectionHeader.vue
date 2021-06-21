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
  margin-bottom: 2rem;

  @include media-breakpoint-down(md) {
    text-align: center;
    margin-bottom: 2rem;
    display: block;
    left: 0;
    transform: none;
  }

  @include media-breakpoint-down(sm) {
    margin-bottom: 0;
  }

  span {
    position: absolute;
    display: inline-block;
    background-color: $white;
    vertical-align: middle;
    padding: 0 1rem 0 0;
    z-index: 10;

    @include media-breakpoint-down(md) {
      position: relative;
    }
  }

  &::before {
    display: none;

    @include media-breakpoint-xxs-up {
      content: '';
      display: block;
      box-sizing: border-box;
      position: absolute;
      left: 0;
      background-color: $border-light-gray;
      width: 100%;
      height: 1px;
      vertical-align: middle;
      bottom: 50%;
    }
  }

  b {
    font-family: $font-family-display;
    white-space: nowrap;
    text-transform: uppercase;
    margin-left: 0.5rem;
    font-weight: 500;
    font-size: 1.125rem;
    letter-spacing: 2px;
  }

  .icon-container {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    border: 2px solid $light-gray;
    border-radius: 50%;
    width: 3.625rem; // 58px
    height: 3.625rem; // 58px
    color: lighten($border-med-gray, 5%);

    @include media-breakpoint-down(md) {
      margin-right: 0.25rem;
      margin-left: 12px;
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
