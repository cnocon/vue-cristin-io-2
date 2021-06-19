<template>
  <div v-if="post" class="blog-slug-page">
    <Breadcrumbs :crumbs="breadcrumbs" classes="flex-center-md-down" />
    <Head
      :title="`${post.title} by Cristin O'Connor`"
      :description="`${post.title} by Cristin O'Connor`"
      :image="`https://cristin.io/${post.shareimg}`"
    ></Head>
    <article>
      <header>
        <h1 class="mb-2">{{ post.title }}</h1>
        <div class="meta mb-2">
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <span
            v-for="(cat, index) in post.categories"
            :key="cat + '-' + index"
            class="badge badge-dark"
            >{{ cat.name }}</span
          >
        </div>
      </header>
      <div v-if="post.toc.length > 0" class="row toc-row mb-5">
        <div class="col-12 toc-col">
          <div class="toc-image">
            <nuxt-img :src="`/${post.img}`" :alt="post.alt"></nuxt-img>
          </div>
          <h6>TABLE OF CONTENTS</h6>
          <ul class="toc">
            <li
              v-for="item in post.toc"
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
      <div v-else class="no-toc-image">
        <nuxt-img :src="`/${post.img}`" :alt="post.alt"></nuxt-img>
      </div>
      <NuxtContent
        :document="post"
        :class="post.toc.length > 0 ? 'has-toc' : 'no-toc'"
      ></NuxtContent>
      <PrevNext
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
      ></PrevNext>
    </article>
  </div>
</template>

<script>
export default {
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
  margin-top: 2rem;

  @include media-breakpoint-up(md) {
    margin-top: 3rem;
  }

  a {
    text-decoration: none;
  }
}
header {
  @include media-breakpoint-down(md) {
    padding-top: 1rem;
    text-align: center;
  }

  h1 {
    margin-top: 0.5rem;

    @include media-breakpoint-up(md) {
      font-size: 3rem;
    }
  }

  time {
    display: block;
    font-weight: 700;
    font-size: 1.125rem;
    font-family: $font-family-display;
  }

  .badge:not(:last-of-type) {
    margin-right: 0.4em;
  }
}
.toc-col {
  h6 {
    font-weight: 600;

    @include media-breakpoint-down(sm) {
      text-align: center;
    }
  }

  h6,
  ul {
    @include media-breakpoint-down(sm) {
      max-width: 72.5%;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
.toc-image-col {
  display: flex;
  align-items: center;

  @include media-breakpoint-down(sm) {
    margin-top: 1.25rem;
  }
}
.toc-image,
.no-toc-image {
  border-radius: 50%;
  max-width: 180px;
  overflow: hidden;
  border: 2px solid $border-light-gray;
  margin-left: auto;
  margin-right: auto;

  img {
    padding: 1.25rem;
    max-width: 100%;
  }
}
.toc-image {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  @include media-breakpoint-up(md) {
    float: right;
    margin: 0;
  }
}
.no-toc-image {
  margin: 1.25rem 0 1.25rem 1.25rem;
  float: right;

  @include media-breakpoint-down(md) {
    margin: 1.25rem auto;
    float: none;
  }
}

.toc {
  li {
    margin-bottom: 1rem;

    &.depth-3 {
      list-style-type: circle;
      margin-left: 2rem;
    }
  }
}

.drop-cap:first-letter {
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 0.8;
  float: left;
  padding: 0 4px 0px 0;
}

.nuxt-content-container {
  &.no-toc {
    @include media-breakpoint-up(md) {
      margin-top: 2rem;
    }
  }
}
</style>
