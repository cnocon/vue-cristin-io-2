<template>
  <article class="post-preview">
    <header>
      <div class="post-image">
        <nuxt-img
          :src="`/${post.img}`"
          :alt="post.alt"
          :height="60"
          :width="60"
          provider="static"
        ></nuxt-img>
      </div>

      <NuxtLink
        :to="{ name: 'blog-articles-slug', params: { slug: post.slug } }"
        >{{ post.title }}</NuxtLink
      >

      <div class="meta">
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        <span
          v-for="(cat, index) in post.categories"
          :key="cat + '-' + index"
          class="badge badge-dark"
          >{{ cat.name }}</span
        >
      </div>
    </header>
    <section>
      <p>{{ post.summary }}</p>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => null,
    },
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
article {
  padding: 2rem 2rem 1.5rem;
  height: 100%;
  background-image: $pastel-rainbow-bar;
  background-size: 100% 4.5px;
  background-position: center bottom;
  background-repeat: no-repeat;

  @include media-breakpoint-down(sm) {
    padding: 1.25rem 1.25rem 0.5rem;
  }
}
header {
  margin-bottom: 1.5rem;
  text-align: center;

  a {
    font-size: 1.5rem;
    font-family: $font-family-display;
    font-weight: 700;
    @include rainbow-link-decoration-on-hover;
  }

  .post-image {
    max-width: 3.75rem;
    margin: 0 auto 1rem;

    img {
      display: block;
      max-width: 100%;
    }
  }

  time {
    display: block;
    font-size: 1rem;
    margin-top: 0.5rem;
    font-family: $font-family-display;
  }
}
.badge:not(:last-of-type) {
  margin-right: 0.4em;
}
</style>
