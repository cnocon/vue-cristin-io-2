<template>
  <div :class="'pull-quote ' + alignment">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    alignment: {
      type: String,
      default: 'right',
    },
  },
}
</script>

<style lang="scss">
.pull-quote {
  border-left: 10px solid $color-primary-med;
  padding-left: 1.25rem;
  font-size: 1.35rem;
  font-family: $font-family-heading;
  font-weight: 700;

  &.full {
    width: 85%;
    margin: 2rem auto 3rem;
  }

  &.right {
    float: right;
    width: 50%;
    margin: 0 1.25rem 0.75rem 2rem;
  }

  &.left {
    float: left;
    width: 50%;
    margin: 0 2rem 0.75rem 1.25rem;
    border-left: 10px solid $color-primary-med;
    padding-left: 1.25rem;
    padding-right: 0;
  }
}
</style>
