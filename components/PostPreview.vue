<template>
  <article class="post-preview">
    <NuxtLink
      class="post-preview-link"
      :to="{ name: 'blog-articles-slug', params: { slug: post.slug } }"
    >
      <div class="title text-center">{{ post.title }}</div>
      <header>
        <div class="meta">
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <b-badge
            v-for="(cat, index) in post.categories"
            :key="cat + '-' + index"
            >{{ cat.name }}</b-badge
          >
        </div>
      </header>
      <section>
        <p>{{ post.summary }}</p>
      </section>
    </NuxtLink>
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
  max-width: calc(100% - 15px);
  margin-left: auto;
  margin-right: auto;
  border: 1px solid $border-light-gray;
  border-radius: 8px;
  background-color: lighten($lightest-gray, 0.5%);
  background-image: $pastel-rainbow-bar;
  background-size: 100% 4.5px;
  background-position: center bottom;
  background-repeat: no-repeat;
  box-shadow: $box-shadow-lg;
  transform: scale(1);
  transition: scale 1s ease-in-out;

  @include media-breakpoint-down(sm) {
    padding: 1.25rem 1.25rem 0.5rem;
  }

  &:hover,
  &:focus {
    transform: scale(0.95);
    background-color: darken($lightest-gray, 2.5%);
    cursor: pointer;
  }

  .post-preview-link {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    text-align: center;
    border: 0;

    .title {
      font-weight: 400;
      line-height: 1.35;
      font-size: calc(1.275rem + 0.3vw);
      font-family: $font-family-display;
    }

    header {
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1rem;
      font-weight: normal;
      text-align: left;
      text-decoration: none;
    }

    time {
      display: block;
      font-size: 1rem;
      margin-top: 0.5rem;
      font-family: $font-family-display;
    }

    .badge {
      background-color: $primary;
      color: $white;

      &:not(:last-of-type) {
        margin-right: 0.4em;
      }
    }
  }
}
</style>
