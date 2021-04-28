<template>
  <div>
    <article>
      <header>
        <h1 class="mb-2">{{ post.title }}</h1>
        <div class="meta text-center mb-2">
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <nuxt-link
            v-for="(cat, index) in post.categories"
            :key="cat + '-' + index"
            :to="{
              name: 'blog-categories-slug',
              params: { slug: cat.slug },
              query: { page: 1 },
            }"
            class="badge badge-dark"
          >
            {{ cat.name }}
          </nuxt-link>
        </div>
      </header>
      <div v-if="post.toc.length > 0" class="row toc-row mb-5">
        <div class="col-12 col-md-9 toc-col">
          <h6 class="font-weight-bolder text-uppercase">Table of Contents</h6>
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
        <div class="col-12 col-md-3 toc-image-col">
          <div class="toc-image">
            <img
              :src="require(`~/assets/images/${post.img}`)"
              :alt="post.alt"
            />
          </div>
        </div>
      </div>
      <div v-else class="row toc-image-row mb-4">
        <div class="toc-col col-md-3 mx-auto mt-2 mb-2">
          <div class="toc-image">
            <img
              :src="require(`~/assets/images/${post.img}`)"
              :alt="post.alt"
            />
          </div>
        </div>
      </div>
      <nuxt-content :document="post" />
      <PrevNext
        name="blog-slug"
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
import PrevNext from '@/components/PrevNext'

export default {
  components: {
    PrevNext,
  },
  async asyncData({ $content, params, query }) {
    // fetch our article here
    const post = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('date', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      post,
      prev,
      next,
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
header {
  text-align: center;

  time {
    display: block;
    font-weight: 800;
    font-size: 1.125rem;
    font-family: $font-family-display;
  }

  .badge:not(:last-of-type) {
    margin-right: 0.4em;
  }
}
.toc-row {
  .toc-image-col {
    // max-width: 200px;

    .toc-image {
      // max-width: 200px;
    }
  }
}
.toc-col {
  h6 {
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
.toc-image {
  border-radius: 50%;
  max-width: 95%;
  overflow: hidden;
  border: 2px solid $border-light-gray;
  margin-left: auto;
  margin-right: auto;

  @include media-breakpoint-down(sm) {
    max-width: 180px;
  }

  img {
    padding: 1.25rem;
    max-width: 100%;
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
  font-weight: 800;
  line-height: 0.8;
  float: left;
  padding: 0 4px 0px 0;
}
</style>
