<template>
  <div v-if="contents" class="table-of-contents">
    <div class="toc-col">
      <h5>Table of Contents</h5>
      <ul>
        <li
          v-for="item in contents"
          :key="item.id"
          :class="{
            'depth-3': item.depth === 3,
          }"
        >
          <NuxtLink :to="`#${item.id}`">{{ item.text }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableOfContents',
  props: {
    contents: {
      type: Array,
      required: true,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.table-of-contents {
  max-width: 40rem; // 640px;
  border-radius: 0.5rem;
  padding: 1.25rem;
  margin: 2rem auto;
  display: block;
  background-color: $primary-dark;
  color: white;

  .toc-col {
    h5 {
      text-align: center;
      margin-top: 0;
      font-weight: 300;
      color: $primary-light !important;
      font-weight: 400;
      font-size: 1rem;
      font-family: $font-family-display;
    }
  }

  li {
    margin-bottom: 0.25rem;
    list-style-type: upper-roman;

    &.depth-3 {
      list-style-type: circle;
      margin-left: 2rem;
      margin-bottom: 1rem;
    }

    a {
      text-decoration: none;
      color: white;
      font-size: 300;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .meta {
    margin-bottom: 0.25rem;

    time {
      display: block;
      font-weight: 700;
      font-size: 1.125rem;
      font-family: $font-family-display;
      margin-bottom: 0.75rem;

      @include media-breakpoint-up(md) {
        font-size: 1.75rem;
      }

      &::before {
        content: 'Published on ';
        font-family: $font-family-base;
        font-weight: 400;
        text-transform: uppercase;
        color: darken($border-dark-gray, 10%);
        font-size: 1rem;
        display: block;
      }
    }

    .badge:not(:last-of-type) {
      margin-right: 0.4em;
    }
  }
}
</style>
