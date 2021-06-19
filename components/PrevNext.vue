<template>
  <div class="prev-next-container row pt-5 mt-5 mb-5">
    <div
      v-if="prev"
      :class="next ? 'col-6 btn-col prev' : 'col-12 btn-col prev'"
    >
      <NuxtLink
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
      </NuxtLink>
      <span v-if="prev.title" class="prev-title">{{ prev.title }}</span>
    </div>
    <div v-else class="col-6 empty-prev"></div>

    <div v-if="next" class="col-6 btn-col next">
      <NuxtLink
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
      </NuxtLink>
      <span v-if="next.title" class="next-title">{{ next.title }}</span>
    </div>
    <div v-else class="col-md-6 empty-next"></div>
  </div>
</template>

<script>
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
.prev-next-container {
  align-items: flex-start;
}

.btn-col {
  display: flex;
  justify-content: space-between;

  @include media-breakpoint-up(md) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .next-icon-wrapper,
  .prev-icon-wrapper {
    line-height: 1.65em;
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
    display: block;
    width: 100%;
    margin-top: 0.875rem;
    color: $link-underline-gray;

    @include media-breakpoint-down(sm) {
      font-size: 0.95rem;
      line-height: 1.25em;
    }
  }

  .prev-title {
    padding-right: 0.5rem;

    @include media-breakpoint-up(md) {
      padding-right: 1rem;
    }
  }

  .next-title {
    padding-left: 0.5rem;

    @include media-breakpoint-up(md) {
      padding-left: 1rem;
    }
  }

  &.prev,
  &.next {
    // display: inline-block;
    display: flex;
    flex-wrap: wrap;

    @include media-breakpoint-up(md) {
      display: flex;
      flex-direction: column;
    }
  }

  &.next {
    align-items: flex-end;
    text-align: right;
    justify-content: flex-end;

    a.btn {
      padding-left: 1.25rem;
    }
  }

  &.prev {
    text-align: left;
    justify-content: flex-start;
    align-items: flex-start;

    a.btn {
      padding-right: 1.25rem;
    }
  }
}
a.btn {
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.5em;
  vertical-align: middle;
  font-size: 1.15rem;
  text-decoration: none;
  border-bottom: 0;

  .b-icon.bi {
    color: inherit;
  }
}
</style>
