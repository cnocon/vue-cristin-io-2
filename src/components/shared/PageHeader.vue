<template>
  <h2 :class="alignment ? `align-${alignment}` : ''">
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
h2 {
  position: relative;
  margin-bottom: 3.75rem;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 60px;
    margin: 0;
    width: 100%;
    max-width: none;
    box-sizing: content-box;
    border-bottom: 4px solid $border-lightest-gray;
  }

  &.align-left {
    &::before {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    span {
      left: 0;
      transform: none;
    }

    i {
      margin-left: 0;

      &::before,
      &::after {
        color: darken($border-light-gray, 5%);
      }
    }

    b {
      font-size: 14px;
    }
  }

  span {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: $white;
  }

  b {
    display: inline-block;
    text-transform: uppercase;
    line-height: 60px;
    vertical-align: middle;
    padding: 0 0.75rem;
    background: $white;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
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
  }
}
</style>
