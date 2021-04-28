<template>
  <article class="shadow">
    <header>
      <div class="post-image">
        <img :src="require(`~/assets/images/${post.img}`)" :alt="post.alt" />
      </div>

      <nuxt-link
        :to="{ name: 'blog-slug', params: { slug: post.slug } }"
        class="text-primary"
      >
        {{ post.title }}</nuxt-link
      >

      <div class="meta">
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        <nuxt-link
          v-for="(cat, index) in post.categories"
          :key="cat + '-' + index"
          :to="{
            name: 'blog-categories-slug',
            params: { slug: cat.slug },
            query: { page: 1 },
          }"
          class="badge badge-primary text-white mx-1 px-2 py-1 my-1"
        >
          {{ cat.name }}
        </nuxt-link>
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
  // background-color: $lightest-gray;
  padding: 2rem 2rem 1.5rem;
  height: 100%;
  background-image: $pastel-rainbow-bar;
  background-size: 100% 4px;
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
    border-bottom: 0;
  }

  .post-image {
    max-width: 3.75rem;
    margin: 0 auto 1rem;
  }

  img {
    display: inline-block;
    max-width: 3.75rem;
    flex-basis: 3.75rem;
    margin-right: 1.25rem;
  }

  time {
    display: block;
    font-weight: 400;
    font-size: 1rem;
    margin-top: 0.5rem;
    font-family: $font-family-display;
  }
}
.badge:not(:last-of-type) {
  margin-right: 0.4em;
}
</style>
