<template>
  <div :class="'quote ' + classes">
    <blockquote>
      <p><slot name="quote"></slot></p>
      <cite><slot name="cite"></slot></cite>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.quote {
  padding: 2rem 3rem 1rem 1.75rem;
  border-radius: 4px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: $box-shadow-sm;
  background-color: $lightest-gray;

  &.dark {
    background-color: $primary;

    blockquote {
      p {
        color: $white;
      }

      cite {
        color: $white;
      }
    }
  }

  blockquote {
    display: flex;
    flex-wrap: wrap;

    &::before {
      content: url('~assets/images/fas-quote-left.svg');
      width: 1.5rem;
      flex-basis: 1.5rem;
      margin-right: 0.625rem;
    }

    p {
      flex-basis: calc(100% - 1.5rem - 10px);
      font-size: 1.5rem;
      line-height: 1.5;
      font-family: $font-family-display;
      font-weight: 800;
      margin-bottom: 0;
    }

    cite {
      display: block;
      flex-basis: 100%;
      width: 100%;
      text-align: right;
      margin-top: 1.25rem;
    }
  }

  &.subtle {
    blockquote {
      p {
        font-family: $font-family-sans-serif;
        font-weight: 500;
        font-size: 1.15rem;
      }
    }
  }
}
</style>
