<template>
  <div class="search">
    <input
      v-model="query"
      type="search"
      autocomplete="off"
      :placeholder="placeholder"
    />
    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Search',
    },
  },
  data() {
    return {
      query: '',
      articles: [],
    }
  },
  watch: {
    async query(query) {
      if (!query) {
        this.articles = []
        return
      }

      this.articles = await this.$content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(query)
        .fetch()
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  text-align: center;

  @include media-breakpoint-up(md) {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
}
input + ul {
  padding-top: 1.25rem;
  text-align: left;
}
input[type='search']::placeholder {
  color: $border-dark-gray;
}
input[type='search'] {
  display: block;
  border: 1px solid darken($border-light-gray, 3%);
  border-radius: 4px;
  text-indent: 4px;
  font-family: $font-family-display;
  font-weight: 300;
  color: $dark;
  letter-spacing: 1px;
  min-width: 22.5rem; // 360px

  @include media-breakpoint-down(lg) {
    width: 100%;
    min-width: unset;
  }
}
a {
  text-decoration: none;
}
</style>
