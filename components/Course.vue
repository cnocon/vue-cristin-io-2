<template>
  <div v-if="courseData" :class="`course ${classes}`">
    <figure>
      <NuxtImg
        :height="80"
        :quality="80"
        :src="courseData.img"
        :alt="courseData.name"
        class="rounded"
        provider="static"
      ></NuxtImg>
    </figure>
    <h3>
      <a :href="courseData.url" target="_blank" rel="noopener noreferrer">
        {{ courseData.name }}
      </a>
    </h3>
    <h4>
      <span class="company">{{ courseData.company }}</span>
      <span v-if="courseData.instructor">
        <span class="instructor">&nbsp;|&nbsp;{{ courseData.instructor }}</span>
      </span>
    </h4>
    <p class="description">
      {{ courseData.description }}
      <a
        v-if="courseData.certificate_url"
        :href="courseData.certificate_url"
        class="btn-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Certificate
      </a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    courseData: {
      default: null,
      type: Object,
    },
    classes: {
      default: '',
      type: String,
    },
    index: {
      default: 0,
      type: Number,
    },
  },
}
</script>

<style lang="scss" scoped>
.course {
  margin-bottom: 4rem;
  text-align: center;

  figure {
    display: inline-block;
    text-align: center;
    height: 80px;
    padding-bottom: 1.5rem;
  }
  img {
    text-align: center;
    max-height: 80px;
  }

  h3 {
    margin-top: 0.5rem;
    line-height: 1em;
    margin-bottom: 1rem;

    a {
      color: $primary;
      font-weight: 700;
      font-size: 1.45rem;
      line-height: 1.25em;
      font-family: $font-family-base;
      background-image: $rainbow-gradient-med;
      background-size: 100% 2px;
      background-position: center bottom;
      background-repeat: no-repeat;
      text-decoration: none;
      border-bottom: 0 !important;

      &:hover {
        background-image: none;
      }
    }
  }

  h4 {
    font-family: $font-family-base;
    margin-top: 0;
    font-size: 1.125rem;
  }

  .description {
    font-weight: 400;
    margin-top: 0;
  }

  .instructor {
    font-family: $font-family-display;
    font-weight: 400;
  }

  .btn-link {
    display: inline-block;
    line-height: 1.25em;
    font-weight: 400;
    border-bottom: 1px solid $border-med-gray;
    background-image: none;
    text-decoration: none;

    &:hover {
      border-bottom: 0;
    }

    i {
      font-size: 0.875rem;
      color: lighten($primary, 20%);
      line-height: inherit;
      vertical-align: top;
    }
  }
}
</style>
