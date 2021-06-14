<template>
  <div :class="`post-list ${classes}`">
    <div class="row">
      <div v-for="post in posts" :key="post.slug" :class="columnClasses">
        <PostPreview :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from '@/components/PostPreview'

export default {
  components: {
    PostPreview,
  },
  props: {
    posts: {
      type: Array,
      default: () => null,
    },
    columnClasses: {
      type: String,
      default: 'post-preview-container col-12',
    },
    classes: {
      type: String,
      default: '',
    },
    page: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style lang="scss">
.post-list {
  max-width: 100%;
  overflow: hidden;

  .post-preview-container {
    max-width: 100%;
    overflow: hidden;

    @include media-breakpoint-xxs-down {
      max-width: 92%;
      overflow: hidden;
      margin-left: auto;
      margin-right: auto;
    }

    .post-preview {
      @include media-breakpoint-up(sm) {
        max-width: 525px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid $border-light-gray;
        border-radius: 5px;
        border-bottom: 0;
      }
    }
  }
}
</style>
