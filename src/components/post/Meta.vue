<template>
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
</template>

<script>
import moment from 'moment'

export default {
  name: 'Meta',
  props: {
    post: {},
  },
  methods: {
    formattedDate(isoString) {
      return moment(isoString).format('dddd, MMMM D, YYYY')
    },
    getJoinString(index) {
      const { categories } = this.post
      return categories.length > 1 && index < categories.length - 1
        ? ' and '
        : ''
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';
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
</style>
