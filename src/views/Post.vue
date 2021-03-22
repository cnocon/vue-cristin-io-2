<template>
  <main class="post-page site-content app-container">
    <PageHeader
      iconClass="fas fa-chart-bar"
      :text="'Level: ' + post.tags[0].name"
      v-if="post.tags"
    ></PageHeader>
    <transition name="fade">
      <article v-show="post" class="post-content">
        <header class="post-header">
          <h1>{{ post.title }}</h1>
          <div class="post-meta">
            <span class="posted-in">
              Posted in
              <span v-for="(cat, index) in post.categories" :key="cat.slug">
                <b>{{ cat.name }}</b>
                {{ getJoinString(index) }}
              </span>
            </span>
            <span class="posted-on">
              on
              <time class="entry-date" :datetime="post.published">
                {{ formattedDate(post.published) }}
              </time>
            </span>
          </div>
        </header>
        <div v-html="post.body" class="post-body"></div>
      </article>
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

.post-meta {
  font-family: $font-secondary;
  font-weight: 400;
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.35rem;
  vertical-align: middle;
  color: hsl(194, 10%, 70%);
}

.posted-in b,
.posted-on time {
  background-color: $white;
  border: 1px solid $color-primary;
  color: hsl(200, 10%, 45%);
  border: 1px solid hsl(210, 15%, 80%);
  font-size: 12px;
  text-transform: uppercase;
  line-height: 1.8em;
  border-radius: 4px;
  padding: 1px 8px;
  margin: 0 2px;
  font-weight: 800;
  letter-spacing: 1px;
  color: $color-primary;
}

.posted-on time {
  border: 0;
  margin-left: 0;
  padding-left: 4px;
}

h1 {
  color: $color-primary;
  font-size: 36px;
  line-height: 1.25em;
  font-family: $font-secondary;
  font-weight: 900;
}

h2 {
  margin-top: 0;
  line-height: 1.25em;
  text-transform: uppercase;
}

.post-body {
  max-width: 900px;
  margin: 0 auto;

  h2 {
    line-height: 1em !important;
  }
}
</style>
