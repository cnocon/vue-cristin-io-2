<template>
  <main class="posts-page site-content">
    <PageHeader iconClass="fad fa-rss" text="Blog"></PageHeader>
    <transition name="fade">
      <div class="container app-container">
        <div class="row" v-if="posts">
          <div class="col-12 post-summary-list">
            <PostSummary
              v-for="post in posts"
              class="post-summary"
              :post="post"
              :key="post.slug"
              prevText="Newer Posts"
              nextText="Older Posts"
            />
            <Pagination
              :perPage="perPage"
              :currentPage="page"
              :totalItems="totalPosts"
              routeName="posts"
            />
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import PageHeader from '@/components/shared/PageHeader.vue'
import PostSummary from '@/components/post/PostSummary.vue'
import Pagination from '@/components/shared/Pagination.vue'

export default {
  name: 'Posts',
  data() {
    return {
      perPage: 3,
    }
  },
  components: {
    PageHeader,
    PostSummary,
    Pagination,
  },
  computed: {
    page() {
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
        console.log('what am i doing', !!response)
      })
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';
</style>
