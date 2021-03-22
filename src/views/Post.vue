<template>
  <main class="post-page site-content">
    <PageHeader
      iconClass="fal fa-user-astronaut"
      :text="'Level: ' + post.tags[0].name"
      v-if="post.tags"
    ></PageHeader>
    <transition name="fade">
      <div class="row" v-if="post.body">
        <div class="col-md-9 col-sm-12">
          <article>
            <header>
              <h1>{{ post.title }}</h1>
            </header>
            <div v-html="post.body"></div>
          </article>
        </div>
        <div class="col-md-3 col-sm-12">
          <p>I'm a side column</p>
        </div>
      </div>
    </transition>
  </main>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
import PageHeader from '@/components/shared/PageHeader.vue'

export default {
  name: 'Post',
  props: ['slug'],
  components: {
    PageHeader,
  },
  methods: {
    formattedDate(isoString) {
      return moment(isoString).format('MMMM Do YYYY')
    },
  },
  computed: mapState('post', ['post']),
  created() {
    this.$store.dispatch('post/getPost', this.slug)
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';
</style>
