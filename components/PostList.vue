<template>
  <div :class="`post-list ${classes}`">
    <div class="row">
      <div
        v-for="post in posts"
        :key="post.slug"
        :class="`post-preview-container ${columnClasses}`"
      >
        <PostPreview :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => null,
    },
    columnClasses: {
      type: String,
      default: 'col-12',
    },
    classes: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.post-list {
  max-width: 100%;
  overflow: hidden;
  margin-top: 2rem;

  @include media-breakpoint-down(sm) {
    margin-top: 1rem;
  }

  .post-preview-container {
    max-width: 100%;
    overflow: hidden;
    padding-bottom: 1.5rem;
    margin-bottom: 2rem;

    @include media-breakpoint-xxs-down {
      max-width: 92%;
      overflow: hidden;
      margin-left: auto;
      margin-right: auto;
    }

    .post-preview {
      @include media-breakpoint-up(sm) {
        max-width: 32.8125rem; // 525px
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
        border: 1px solid $border-lightest-gray;
        box-shadow: $box-shadow-lg;
        border-bottom: 0;
      }
    }
  }
}
</style>
