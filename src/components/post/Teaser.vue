<template>
  <div class="col-12 col-md-6 post-summary">
    <div class="teaser">
      <header>
        <h2 class="post-summary-title">
          <router-link :to="{ name: 'post', params: { slug: post.slug } }">
            {{ post.title }}
          </router-link>
        </h2>
        <PostMeta :post="post" />
      </header>
      <p class="summary-content">{{ post.summary }}</p>
    </div>
  </div>
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
.col-md-6 {
  &:nth-of-type(1),
  &:nth-of-type(2) {
    @media all and (min-width: $breakpoint-md-min) {
      padding-bottom: 2rem;
    }
  }
}

.teaser {
  height: 100%;
  padding: 0.5rem 1.5rem 3rem;
  border: 1px solid $border-light-gray;
  box-shadow: $box-shadow-sm;

  @media all and (max-width: $breakpoint-sm) {
    padding: 0.9375rem;
  }
}

.post-summary-title {
  font-size: 1.25rem;
  line-height: 1.15em;
  margin-top: 0.9375rem;
  text-align: center;

  a {
    background-size: 100% 1px;
    font-weight: 700;
    font-family: $font-primary;
    background-image: $rainbow-gradient-radial;
    background-size: 100% 1.5px;
    font-size: 1.35rem;

    @media all and (max-width: $breakpoint-sm) {
      font-size: 1.5rem;
    }
  }
}
.post-summary {
  margin-bottom: 3rem;
}

.post-content {
  display: block;
  text-align: center;

  @media all and (max-width: $breakpoint-sm) {
    text-align: left;
  }
}
.summary-content {
  font-size: 0.875rem;
  font-weight: 400;

  @media all and (max-width: $breakpoint-sm) {
    font-size: 0.875rem;
    padding-bottom: 1rem;
  }
}
</style>
