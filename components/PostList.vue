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
  // eslint-disable-next-line require-await
  async asyncData({ $content, params, query }) {
    // eslint-disable-next-line no-console
    // const postCount = this.posts.length
    // return {
    //   postCount
    // }
    // const categoryArticles = await $content('articles')
    //   .where({
    //     'categories.slug': { $contains: params.slug },
    //   })
    //   .only('title')
    //   .fetch()
    // const posts = await $content('articles')
    //   .where({
    //     'categories.slug': { $contains: params.slug },
    //   })
    //   .limit(2)
    //   .skip((page - 1) * 2)
    //   .sortBy('date', 'desc')
    //   .fetch()
    // const articleCount = categoryArticles.length
    // eslint-disable-next-line no-console
    // console.log('articleCount', articleCount)
    // const currentCategory = posts[0].categories.filter((cat) => {
    //   return cat.slug === params.slug
    // })[0]
    // return {
    //   currentCategory,
    //   posts,
    //   page,
    //   articleCount,
    // }
  },
}
</script>

<style lang="scss" scoped></style>
