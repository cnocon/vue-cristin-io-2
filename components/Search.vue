<template>
  <div>
    <input
      v-model="query"
      type="search"
      autocomplete="off"
      :placeholder="placeholder"
    />
    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">{{
          article.title
        }}</NuxtLink>
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
input + ul {
  padding-top: 1.25rem;
  text-align: left;
}
input[type='search']::placeholder {
  color: $border-dark-gray;
}
input[type='search'] {
  border: 1px solid $border-med-gray;
  text-indent: 4px;
  font-family: $font-family-display;
  font-weight: 300;
  color: $dark;
  letter-spacing: 1px;
}
a {
  text-decoration: none;
}
</style>
