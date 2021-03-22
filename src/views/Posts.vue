<template>
  <main class="posts-page site-content">
    <PageHeader iconClass="fad fa-rss" text="Blog"></PageHeader>
    <transition name="fade">
      <div class="container app-container" v-if="posts">
        <div class="row">
          <div class="col-sm-6">
            <router-link
              :to="{
                name: 'posts',
                query: { page: parseInt(page) - 1 },
              }"
            >
              Previous Posts
            </router-link>
          </div>
          <div class="col-sm-6">
            <router-link
              :to="{
                name: 'posts',
                query: { page: parseInt(page) + 1 },
              }"
              >Next Posts</router-link
            >
          </div>
        </div>
        <div class="row" v-if="posts">
          <div class="col-md-9 col-sm-12">
            <article v-for="post in posts" :key="post.slug">
              <header>
                <h3>{{ post.title }}</h3>
              </header>
              <p>{{ post.summary }}</p>
            </article>
          </div>
          <div class="col-md-3 col-sm-12">
            <aside>
              <p>I'm a side column</p>
            </aside>
          </div>
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
  name: 'Posts',
  data() {
    return {
      perPage: 4,
    }
  },
  components: {
    PageHeader,
  },
  methods: {
    formattedDate(isoString) {
      return moment(isoString).format('MMMM Do YYYY')
    },
  },
  computed: {
    page() {
      console.log('this.$route', this.$route)
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState('post', ['posts', 'totalPosts']),
  },
  created() {
    // const currentPage = parseInt(parseInt(this.$route.params.page)) || 1
    this.$store
      .dispatch('post/fetchPosts', {
        page: this.page,
        perPage: this.perPage,
        excludeBody: true,
      })
      .then((response) => {
        console.log('in component', response)
      })
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';
</style>
