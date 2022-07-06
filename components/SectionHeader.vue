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
  min-height: 64px;
  margin-bottom: 0.5rem;
  text-align: center;

  @include media-breakpoint-down(md) {
    text-align: left;
    margin-bottom: 2rem;
    display: block;
    left: 0;
    transform: none;
    min-height: unset;
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
    z-index: 1;
    left: 0;

    @include media-breakpoint-down(md) {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
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
    white-space: nowrap;
    text-transform: uppercase;
    margin-left: 0.5rem;
    letter-spacing: 2px;
    font-weight: 300;
    font-size: 1rem;

    @include media-breakpoint-down(md) {
      white-space: initial;
      margin-left: 0;
    }
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
      display: none;
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
