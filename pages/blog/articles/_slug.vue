<template>
  <div v-if="post" class="blog-slug-page">
    <Breadcrumbs :crumbs="breadcrumbs" classes="hidden-md-down" />
    <Head
      :title="`${post.title}`"
      :description="`${post.title} written by Cristin O'Connor, Front End Engineer`"
      :image="`https://cristin.io/${post.shareimg}`"
      og-type="article"
    ></Head>
    <article>
      <header class="text-center">
        <h1>{{ post.title }}</h1>
        <div class="meta">
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <span class="categories">
            <span
              v-for="(cat, index) in post.categories"
              :key="cat + '-' + index"
              class="badge badge-dark"
              >{{ cat.name }}</span
            >
          </span>
        </div>
      </header>
      <!--TableOfContents v-if="post.toc.length > 0" :contents="post.toc" />
      <br />-->
      <div class="nuxt-content">
        <NuxtContent
          :document="post"
          :class="post.toc.length > 0 ? 'has-toc' : 'no-toc'"
        ></NuxtContent>
      </div>
      <LazyPrevNext
        name="blog-articles-slug"
        :prev="
          prev
            ? { params: { slug: prev.slug }, query: null, title: prev.title }
            : null
        "
        :next="
          next
            ? { params: { slug: next.slug }, query: null, title: next.title }
            : null
        "
      ></LazyPrevNext>
    </article>
  </div>
</template>

<script>
import Prism from '../../../plugins/prism.js'
// import TableOfContents from '../../../components/shared/TableOfContents.vue'

export default {
  // components: {
  //   TableOfContents,
  // },
  // asyncData method for fetching and rendering data on the server
  // $content and params from destructured context object
  // $content: Content module -> articles
  // params: { slug: 'my-blog-post-slug-value' }
  async asyncData({ $content, params }) {
    // fetch article by slug in params object
    const post = await $content('articles', params.slug).fetch()

    // Fetch prev and next slugs and titles
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('date', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      post,
      prev,
      next,
      breadcrumbs: [
        {
          to: { name: 'index' },
          text: 'Home',
        },
        {
          to: { name: 'blog-page', params: { slug: 'blog-page', page: 1 } },
          text: 'Recent Articles',
        },
        {
          to: null,
          text: post.title,
        },
      ],
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    formatDate(date) {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style lang="scss" scoped>
.blog-slug-page {
  @include media-breakpoint-up(sm) {
    margin-top: 2rem;
  }

  @include media-breakpoint-up(md) {
    margin-top: 3rem;
  }

  h1 {
    margin-top: 0.5rem;
    line-height: 1.1em;
  }
}
header {
  @include media-breakpoint-down(md) {
    padding-top: 1rem;
    text-align: center;
  }

  h1 {
    margin-top: 0.5rem;
    line-height: 1.1em;

    @include media-breakpoint-up(md) {
      font-size: 3rem;
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
    font-size: 1.5rem;
    font-family: $font-family-display;
    font-weight: 500;
    text-transform: uppercase;

    &::before {
      content: 'Published on ';
      font-family: $font-family-base;
      font-weight: 400;
      text-transform: uppercase;
      font-size: 1rem;
      display: block;
    }
  }

  .badge:not(:last-of-type) {
    margin-right: 0.4em;
  }
}

.nuxt-content {
  margin-top: 1rem;

  * {
    font-size: 18px;
    line-height: 1.62;
  }
}
</style>
