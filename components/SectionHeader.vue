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
      border-bottom: 3px solid $light-gray;
    }

    span {
      left: 50%;
      transform: translateX(-50%);
      padding: 0 1rem;
    }

    b {
      // font-size: 1.5rem;
      // font-weight: 800;
      // color: $primary;
    }

    div {
      // color: $color-primary-med;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    // top: calc(50% + 3px);
    top: 3px;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 64px;
    margin: 0;
    width: 100%;
    max-width: none;
    box-sizing: content-box;
    border-bottom: 3px solid $lightest-gray;
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
    font-size: 1.15rem;
    font-family: $font-family-heading;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1.5px;

    @include media-breakpoint-down(sm) {
      font-size: 1.1rem;
    }
  }

  div {
    // color: $border-med-gray;
    color: $border-med-gray;
  }

  .icon-container {
    position: relative;
    display: inline-block;
    line-height: 60px;
    vertical-align: middle;
    border: 3px solid $light-gray;
    border-radius: 50%;
    width: 52px;
    height: 52px;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 30px;
      height: 30px;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
