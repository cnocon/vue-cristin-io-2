<template>
  <div class="row pt-5 mt-5 mb-5">
    <div
      v-if="prev"
      :class="next ? 'col-6 btn-col prev' : 'col-12 btn-col prev'"
    >
      <nuxt-link
        class="btn btn-primary"
        :to="{
          name: name,
          params: prev.params || null,
          query: prev.query || null,
        }"
      >
        <span class="prev-icon-wrapper">
          <font-awesome-icon
            :icon="['far', 'chevron-left']"
          ></font-awesome-icon>
        </span>
        Prev
      </nuxt-link>
      <span v-if="prev.title" class="prev-title">{{ prev.title }}</span>
    </div>
    <div v-else class="col-6 empty-prev"></div>

    <div v-if="next" class="col-6 btn-col next">
      <nuxt-link
        class="btn btn-primary"
        :to="{
          name: name,
          params: next.params || null,
          query: next.query || null,
        }"
      >
        Next
        <span class="next-icon-wrapper">
          <font-awesome-icon
            :icon="['far', 'chevron-right']"
          ></font-awesome-icon>
        </span>
      </nuxt-link>
      <span v-if="next.title" class="next-title">{{ next.title }}</span>
    </div>
    <div v-else class="col-md-6 empty-next"></div>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/pro-regular-svg-icons'

library.add(faChevronLeft, faChevronRight)

export default {
  props: {
    name: {
      type: String,
      default: 'blog-slug',
    },
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-col {
  display: flex;
  justify-content: space-between;

  @include media-breakpoint-up(md) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .next-icon-wrapper,
  .prev-icon-wrapper {
    line-height: 1em;
    vertical-align: bottom;
    font-size: 1.125rem;

    @include media-breakpoint-down(sm) {
      line-height: 1.71rem; // 24px;
      vertical-align: text-bottom;
    }
  }

  .next-icon-wrapper {
    margin-left: 0.25rem;
  }

  .prev-icon-wrapper {
    margin-right: 0.25rem;
  }

  .prev-title,
  .next-title {
    @include media-breakpoint-down(sm) {
      display: none;
    }
  }

  &.next {
    align-items: flex-end;
    text-align: right;
    display: inline-block;

    @include media-breakpoint-up(md) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: right;
    }

    a.btn {
      padding-left: 1.25rem;

      @include media-breakpoint-up(md) {
        padding-bottom: 0.5rem;
      }
    }
  }

  &.prev {
    @include media-breakpoint-up(md) {
      align-items: flex-start;
      flex-direction: column;
      text-align: left;
      justify-content: flex-start;
      align-items: flex-start;
    }

    a.btn {
      padding-right: 1.5rem;
    }

    .prev-title,
    .next-title {
      @include media-breakpoint-up(md) {
        padding-right: 20%;
      }
    }
  }
}
a.btn {
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1em;
  vertical-align: middle;
  font-size: 1.15rem;

  .b-icon.bi {
    color: inherit;
  }
}

.prev-title,
.next-title {
  display: block;
  margin-top: 0.875rem;
  color: $link-underline-gray;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  // max-width: calc(100% - 38px);
  // flex-basis: calc(100% - 38px);
  // white-space: nowrap;
  // text-overflow: ellipsis;
  // border-bottom: 1px solid $link-underline-gray;
}
</style>
