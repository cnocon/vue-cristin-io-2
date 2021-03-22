<template>
  <header class="post-summary">
    <h2 class="post-summary-title">
      <router-link :to="{ name: 'post', params: { slug: post.slug } }">
        {{ post.title }}
      </router-link>
    </h2>
    <p class="post-summary-pubinfo">{{ formattedDate(post.published) }}</p>
  </header>

  <p>{{ post.summary }}</p>
</template>

<script>
import moment from 'moment'
// import { mapState } from 'vuex'

export default {
  name: 'PostSummary',
  props: {
    post: {
      required: true,
      type: Object,
    },
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
    font-weight: 300;
    background-image: $rainbow-gradient-radial;
  }
}

.post-summary-pubinfo {

}

</style>
