<template>
  <main class="post-page site-content app-container">
    <PageHeader
      iconClass="fas fa-chart-bar"
      :text="'Level: ' + post.tags[0].name"
      v-if="post.tags"
    ></PageHeader>
    <article v-show="post" class="post-content">
      <header class="post-header">
        <h1>{{ post.title }}</h1>
        <PostMeta :post="post" />
      </header>
      <div v-html="post.body" class="post-body"></div>
    </article>
  </main>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
import PageHeader from '@/components/shared/PageHeader.vue'
import PostMeta from '@/components/post/Meta.vue'

export default {
  name: 'Post',
  props: ['slug'],
  components: {
    PageHeader,
    PostMeta,
  },
  methods: {
    formattedDate(isoString) {
      return moment(isoString).format('MMMM Do, YYYY')
    },
    getJoinString(index) {
      const { categories } = this.post
      return categories.length > 1 && index < categories.length - 1
        ? ' and '
        : ''
    },
  },
  computed: {
    ...mapState('post', ['post']),
  },
  created() {
    this.$store.dispatch('post/getPost', this.slug)
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.post-header {
  text-align: center;
  margin: 30px auto;
}

h1 {
  color: $color-primary;
  font-size: 36px;
  line-height: 1.25em;
  font-family: $font-secondary;
  font-weight: 900;
}
</style>
