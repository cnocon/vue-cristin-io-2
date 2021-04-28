<template>
  <div class="row pt-5 mt-5 mb-5">
    <div
      v-if="prev"
      :class="next ? 'col-6 btn-col prev' : 'full-width col-6 btn-col prev'"
    >
      <b-button
        variant="outline-primary"
        :to="{
          name: name,
          params: prev.params || null,
          query: prev.query || null,
        }"
      >
        <BIconChevronLeft />
        Prev
      </b-button>
      <span v-if="prev.title">{{ prev.title }}</span>
    </div>
    <div v-else class="col-6 empty-prev"></div>

    <div v-if="next" class="col-6 btn-col next">
      <b-button
        variant="outline-primary"
        :to="{
          name: name,
          params: next.params || null,
          query: next.query || null,
        }"
      >
        Next
        <BIconChevronRight />
      </b-button>
      <span v-if="next.title">{{ next.title }}</span>
    </div>
    <div v-else class="col-md-6 empty-next"></div>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import { BIconChevronLeft, BIconChevronRight } from 'bootstrap-vue'

export default {
  components: {
    BIconChevronLeft,
    BIconChevronRight,
  },
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

  span {
    @include media-breakpoint-down(sm) {
      display: none;
    }
  }

  &.next {
    @include media-breakpoint-up(md) {
      flex-direction: column;
      align-items: flex-end;
      text-align: right;
    }

    a.btn {
      padding-left: 1.5rem;
    }

    span {
      @include media-breakpoint-up(md) {
        padding-left: 20%;
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

    span {
      @include media-breakpoint-up(md) {
        padding-right: 20%;
      }
    }
  }
}
a.btn {
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.5rem;
  vertical-align: middle;

  .b-icon.bi {
    color: inherit;
  }
}

span {
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
