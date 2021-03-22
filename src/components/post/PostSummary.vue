<template>
  <header class="post-summary">
    <h3 class="post-summary-title">{{ post.title }}</h3>
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
      return moment(isoString).format('MMMM Do YYYY')
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.post-header {
  .post-title {
    background-image: linear-gradient(
      205deg,
      rgb(255, 249, 77) 10%,
      rgb(77, 255, 240) 30%,
      rgb(77, 255, 240) 40%,
      rgb(184, 235, 255) 52%,
      rgb(184, 235, 255) 62%,
      rgb(189, 189, 255) 70%,
      rgb(255, 214, 218) 90%
    );
  }
}
</style>
