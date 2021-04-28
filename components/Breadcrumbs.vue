<template>
  <b-breadcrumb :items="crumbs" class="breadcrumbs"></b-breadcrumb>
</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      default: () => null,
    },
  },
}
</script>

<style lang="scss">
.breadcrumbs {
  &.breadcrumb {
    margin: 2rem 0 0;
    padding: 0;
    background-color: transparent;
  }
}
.breadcrumb-item {
  margin-bottom: 0;
  font-size: 0.9375rem;
  color: lighten($link-underline-gray, 10%);
  font-weight: 500;
  // font-style: italic;
  font-family: $font-family-heading;
  // text-transform: uppercase;

  a,
  span {
    color: lighten($link-underline-gray, 10%);
  }

  a {
    border-bottom-color: lighten($link-underline-gray, 25%) !important;
  }
}
.breadcrumb-item + .breadcrumb-item::before {
  // content: url('~/assets/images/chevron-double-right-14.svg') !important;
  color: lighten($link-underline-gray, 20%) !important;
  // display: block;
  // padding-right: 0.3125rem;
}
.breadcrumb + h1 {
  margin-top: 0;
}
</style>
