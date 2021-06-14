<template>
  <!-- prettier-ignore -->
  <h2 :class="'section-header align-' + alignment + ' ' + headerClasses">

    <span>
      <div class="icon-container">
        <slot name="section-header-icon"></slot>
      </div>
      <!-- <i class="fal fa-user-astronaut"></i> -->
      <b>{{ text }}</b>
    </span>
  </h2>
</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  props: {
    alignment: {
      type: String,
      default: 'left',
    },
    text: {
      type: String,
      default: '',
    },
    headerClasses: {
      type: String,
      default: 'mb-5',
    }
  },
}
</script>

<style scoped lang="scss">
.section-header {
  position: relative;
  white-space: nowrap;
  height: 64px;

  &.align-center {
    &::before {
      border-bottom: 1px solid $light-gray;
    }

    span {
      left: 50%;
      transform: translateX(-50%);
      padding: 0 1rem;
    }
  }

  &.dark {
    .icon-container {
      color: $primary;
    }

    b {
      color: $primary;
      font-weight: 500 !important;
      font-size: 1.125rem;
      font-family: $font-family-display;
      letter-spacing: 2px;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 2px;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 72px;
    margin: 0;
    width: 100%;
    max-width: none;
    box-sizing: content-box;
    border-bottom: 1px solid $light-gray;
  }

  span {
    position: absolute;
    display: inline-block;
    background-color: $white;
    line-height: 64px;
    height: 64px;
    vertical-align: middle;
    padding: 0 1rem 0 0;
  }

  b {
    font-size: 1rem;
    font-family: $font-family-heading;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 400 !important;
    letter-spacing: 1.5px;
    color: $border-dark-gray;

  }

  .icon-container {
    position: relative;
    display: inline-block;
    line-height: 46px;
    vertical-align: middle;
    border: 2px solid $light-gray;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    color: lighten($border-med-gray, 5%);

    @include media-breakpoint-down(md) {
      margin-right: 0.5rem;
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      padding: 0 2.5px;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
