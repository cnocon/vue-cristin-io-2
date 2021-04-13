<template>
  <h2 :class="alignment ? `page-header align-${alignment}` : 'page-header'">
    <span>
      <i :class="iconClass"> </i>
      <b>{{ text }}</b>
    </span>
  </h2>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    iconClass: String,
    text: String,
    alignment: String,
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.fad,
.fal,
.far,
.fas {
  color: rgba($color-primary, 0.625);
}

h2.page-header {
  position: relative;
  margin-bottom: 4.75rem !important;
  white-space: nowrap;

  @media all and (max-width: $breakpoint-md) {
    margin-top: 1rem !important;

    i {
      display: none !important;
    }
  }

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: calc(50% + 3px);
    left: 50%;
    transform: translate(-50%, -50%);
    height: 64px;
    margin: 0;
    width: 100%;
    max-width: none;
    box-sizing: content-box;
    border-bottom: 3px solid $border-lightest-gray;

    @media all and (max-width: $breakpoint-sm-min) {
      top: calc(50% + 4px);
    }
  }

  &.align-left {
    &::before {
      @media all and (min-width: $breakpoint-sm-min) {
        left: 0;
        transform: translateY(-50%);
      }
    }

    span {
      @media all and (min-width: $breakpoint-sm-min) {
        left: 0;
        transform: none;
      }
    }

    i {
      margin-left: 0;

      &::before,
      &::after {
        color: darken($border-light-gray, 5%);
      }
    }
  }

  span {
    position: absolute;
    display: block;
    top: 0;
    left: calc(50% - 28px);
    transform: translateX(-50%);
    background-color: $white;

    @media all and (max-width: $breakpoint-sm) {
      left: 50%;
    }
  }

  b {
    display: inline-block;
    // text-transform: uppercase;
    line-height: 60px;
    vertical-align: middle;
    padding: 0 0.75rem;
    background: $white;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: $font-secondary;
    color: $color-primary;
  }

  i {
    position: relative;
    display: inline-block;
    font-size: 22px;
    line-height: 60px;
    vertical-align: middle;
    border: 3px solid $border-lightest-gray;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-left: 1rem;

    &::before,
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $border-med-gray;
    }

    &.darker {
      &::before,
      &::after {
        color: $color-primary;
      }
    }
  }
}
</style>
