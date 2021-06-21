<template>
  <ol :class="`breadcrumbs breadcrumb ${classes ? classes : ''}`">
    <li
      v-for="(crumb, index) in crumbs"
      :key="'crumb-' + index"
      :class="crumb.href ? 'breadcrumb-item' : 'breadcrumb-item active'"
    >
      <NuxtLink v-if="crumb.to" :to="crumb.to">
        {{ crumb.text }}
      </NuxtLink>
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
.flex-center-md-down {
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
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-bottom: 1rem;
  list-style: none;

  @include media-breakpoint-down(md) {
    display: none;
  }

  &.breadcrumbs {
    margin-left: 0;
    margin-bottom: 0;

    @include media-breakpoint-up(sm) {
      margin-top: 2rem;
    }
  }

  .breadcrumb-item {
    margin-bottom: 0;
    font-size: 0.9375rem;
    color: $primary;
    font-weight: 400;
    font-family: $font-family-base;

    + .breadcrumb-item {
      padding-left: 0.5rem;
      color: $primary;

      &::before {
        float: left;
        padding-right: 0.5rem;
        content: '/';
        color: $primary;

        @include media-breakpoint-xxs-down {
          display: none;
        }
      }
    }

    &.active {
      color: $primary;
    }

    a,
    span {
      color: $primary;
      text-decoration: none;
    }

    a {
      border-bottom-color: $primary;
    }
  }

  + h1 {
    margin-top: 0;
    line-height: 1.1em;
  }
}
</style>
