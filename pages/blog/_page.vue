<template>
  <div class="blog-index-page">
    <Head
      title="Blog"
      description="Cristin O'Connor's Front End Software Engineering Blog"
    ></Head>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1 class="mt-0">Recent Articles</h1>
    <SectionHeader
      v-if="page"
      :text="'Showing Page ' + page + ' of ' + lastPage"
      alignment="center"
      header-classes="mb-5 mt-3"
    >
      <template #section-header-icon>
        <font-awesome-icon :icon="['fas', 'rss']"></font-awesome-icon>
      </template>
    </SectionHeader>
    <PostList
      :posts="pagePosts"
      column-classes="col-12 col-lg-6 mb-5"
    ></PostList>

    <PrevNext
      name="blog-page"
      :prev="
        page - 1 >= 1
          ? {
              params: { slug: 'blog-page', page: page - 1 },
            }
          : null
      "
      :next="
        page + 1 <= Math.ceil(postsCount / limit)
          ? {
              params: { slug: 'blog-page', page: page + 1 },
            }
          : null
      "
    ></PrevNext>
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import Head from '@/components/Head'
import Breadcrumbs from '@/components/Breadcrumbs'
import PrevNext from '@/components/PrevNext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRss } from '@fortawesome/pro-solid-svg-icons'

library.add(faRss)

export default {
  components: {
    PrevNext,
    PostList,
    Breadcrumbs,
    Head,
  },
  async asyncData({ $content, query, params }) {
    const page = parseInt(params.page) || 1
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
        href: '/blog/1',
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
  watchParams: ['page'],
}
</script>

<style lang="scss" scoped></style>