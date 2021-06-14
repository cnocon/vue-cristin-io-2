<template>
  <div class="post-list">
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
      default: 'col-12',
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
  .post-preview {
    max-width: 525px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
