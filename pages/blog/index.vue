<template>
  <div class="blog-index-page">
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1 class="mb-0">Blog</h1>
    <SectionHeader
      v-if="page"
      :text="'Page ' + page + ' of ' + lastPage"
      alignment="center"
      header-classes="mb-5"
    >
      <template #section-header-icon>
        <font-awesome-icon :icon="['fal', 'rss']"></font-awesome-icon>
      </template>
    </SectionHeader>
    <PostList
      :posts="pagePosts"
      column-classes="col-12 col-lg-6 mb-5"
    ></PostList>

    <PrevNext
      name="blog"
      :prev="
        page - 1 >= 1
          ? {
              params: { slug: 'blog' },
              query: { page: page - 1 },
            }
          : null
      "
      :next="
        page + 1 <= Math.ceil(postsCount / limit)
          ? {
              params: { slug: 'blog' },
              query: { page: page + 1 },
            }
          : null
      "
    ></PrevNext>
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import Breadcrumbs from '@/components/Breadcrumbs'
import PrevNext from '@/components/PrevNext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRss } from '@fortawesome/pro-light-svg-icons'

library.add(faRss)

export default {
  components: {
    PrevNext,
    PostList,
    Breadcrumbs,
  },
  async asyncData({ $content, query }) {
    // eslint-disable-next-line prettier/prettier
    const page = parseInt(query.page) || 1
    const limit = 4
    const posts = await $content('articles').sortBy('date', 'desc').fetch()
    const postsCount = posts.length

    const breadcrumbs = [
      {
        text: 'Home',
        href: '/',
      },
      {
        text: 'Blog',
        href: '/blog?page=1',
      },
      {
        text: `Page ${page}`,
        href: null,
      },
    ]

    const pagePosts = posts.slice(limit * (page - 1), page * limit)
    const lastPage = Math.ceil(posts.length / limit)

    return {
      lastPage,
      page,
      postsCount,
      pagePosts,
      limit,
      breadcrumbs,
    }
  },
  watchQuery: ['page'],
}
</script>

<style lang="scss" scoped></style>
