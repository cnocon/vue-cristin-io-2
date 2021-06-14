<template>
  <ol :class="`breadcrumbs breadcrumb ${classes ? classes : ''}`">
    <li
      v-for="(crumb, index) in crumbs"
      :key="'crumb-' + index"
      :class="crumb.href ? 'breadcrumb-item' : 'breadcrumb-item active'"
    >
      <a v-if="crumb.href" :href="crumb.href">
        {{ crumb.text }}
      </a>
      <span v-else aria-current="location">
        {{ crumb.text }}
      </span>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      default: () => null,
    },
    classes: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.flex-center {
  @include media-breakpoint-down(md) {
    flex-wrap: wrap;
  }

  .breadcrumb-item {
    &.active {
      @include media-breakpoint-down(md) {
        width: 100%;
        text-align: center;
      }
    }
  }
}
.breadcrumb {
  margin: 2rem 0 0;
  padding: 0;
  background-color: transparent;

  .breadcrumb-item {
    margin-bottom: 0;
    font-size: 0.9375rem;
    color: lighten($link-underline-gray, 10%);
    font-weight: 500;
    font-family: $font-family-heading;

    + .breadcrumb-item::before {
      float: left;
      padding-right: 0.5rem;
      color: #a5adb6 !important;
      content: '/';
      color: lighten($link-underline-gray, 20%) !important;
    }

    &.active {
      color: #6c757d;
    }

    a,
    span {
      color: lighten($link-underline-gray, 10%);
      text-decoration: none;
    }

    a {
      border-bottom-color: lighten($link-underline-gray, 25%) !important;
    }
  }

  + h1 {
    margin-top: 0;
  }
}
</style>
