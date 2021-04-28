<template>
  <div class="category-page">
    <h1 class="mb-5">Posted in {{ currentCategory.name }}</h1>
    <div class="row">
      <div v-for="post in posts" :key="post.slug" class="col-12 col-lg-6 mb-5">
        <PostPreview :post="post" />
      </div>
    </div>
    <PrevNext
      name="blog-categories-slug"
      :prev="
        page - 1 >= 1
          ? {
              params: { slug: currentCategory.slug },
              query: { page: page - 1 },
            }
          : null
      "
      :next="
        page + 1 <= Math.ceil(articleCount / 2)
          ? {
              params: { slug: currentCategory.slug },
              query: { page: page + 1 },
            }
          : null
      "
    ></PrevNext>
  </div>
</template>

<script>
import PostPreview from '@/components/PostPreview'
import PrevNext from '@/components/PrevNext'

export default {
  components: {
    PrevNext,
    PostPreview,
  },
  async asyncData({ $content, params, query }) {
    const page = query.page || 1
    const categoryArticles = await $content('articles')
      .where({
        'categories.slug': { $contains: params.slug },
      })
      .only('title')
      .fetch()

    const posts = await $content('articles')
      .where({
        'categories.slug': { $contains: params.slug },
      })
      .limit(2)
      .skip((page - 1) * 2)
      .sortBy('date', 'desc')
      .fetch()

    const articleCount = categoryArticles.length

    const currentCategory = posts[0].categories.filter((cat) => {
      return cat.slug === params.slug
    })[0]

    return {
      currentCategory,
      posts,
      page,
      articleCount,
    }
  },
  watchQuery: ['page'],
}
</script>

<style lang="scss" scoped></style>
