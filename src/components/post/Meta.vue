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
      const count = categories.length

      switch (count) {
        case 4:
          if (index === 0 || index === 1) {
            return ', '
          } else {
            return index === 2 ? ' and ' : ''
          }
        case 3:
          if (index === 1) {
            return ' and '
          } else {
            return index === 0 ? ', ' : ''
          }
        case 2:
          return index === 0 ? ' and ' : ''
        default:
          return ''
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';
.post-meta {
  font-family: $font-secondary;
  font-weight: 400;
  margin-top: 0.9375rem;
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
  line-height: 1.35rem;
  vertical-align: middle;
  color: hsl(194, 10%, 70%);

  @media all and (max-width: $breakpoint-sm-min) {
    margin-bottom: 0.75rem;
  }
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
  padding: 1px 0.5rem;
  margin: 0 2px;
  font-weight: 800;
  letter-spacing: 1px;
  color: $color-primary;

  @media all and (max-width: $breakpoint-sm-min) {
    line-height: 1.675rem;
    font-size: 0.6875rem;
  }
}

.posted-on time {
  border: 0;
  margin-left: 0;
  padding-left: 0.25rem;
}
</style>
