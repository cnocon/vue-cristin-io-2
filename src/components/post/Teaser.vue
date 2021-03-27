<template>
  <header class="post-summary">
    <h2 class="post-summary-title">
      <router-link :to="{ name: 'post', params: { slug: post.slug } }">
        {{ post.title }}
      </router-link>
    </h2>
    <PostMeta :post="post" />
  </header>
  <p>{{ post.summary }}</p>
</template>

<script>
import moment from 'moment'
import PostMeta from '@/components/post/Meta.vue'

export default {
  name: 'Teaser',
  props: {
    prevText: String,
    nextText: String,
    post: {
      required: true,
    },
  },
  components: {
    PostMeta,
  },
  methods: {
    formattedDate(isoString) {
      return moment(isoString).format('dddd, MMMM D, YYYY')
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.post-summary-title {
  line-height: 1em;
  font-size: 32px;

  a {
    background-size: 100% 1px;
    font-weight: 700;
    font-family: $font-primary;
    background-image: $rainbow-gradient-radial;
    background-size: 100% 1.5px;
  }
}

.post-summary {
  display: block;
  text-align: center;
  margin-top: 60px;

  &:first-of-type {
    margin-top: 30px;
  }
}
</style>
