<template>
  <div :class="`quote ${classes}`">
    <blockquote>
      <p><slot name="quote"></slot></p>
      <cite v-if="!hideCitation"><slot name="cite"></slot></cite>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    hideCitation: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.quote {
  padding: 2rem 3rem 2rem 1.5rem;
  margin: 0 auto 1.5rem;
  border-radius: 4px;
  max-width: 600px;
  box-shadow: $box-shadow-sm;
  background-color: $border-lightest-gray;

  &.dark {
    background-color: $dark;

    blockquote {
      p,
      cite {
        color: $white;
      }
    }
  }

  &.text-size-large {
    blockquote {
      p {
        font-size: 1.35rem;
        font-weight: 700;
      }
    }
  }

  &.text-center {
    cite {
      text-align: center;
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
      line-height: 1.5;
      margin-bottom: 0;
      font-family: $font-family-sans-serif;
      font-weight: 500;
      font-size: 1.15rem;
    }

    cite {
      display: block;
      flex-basis: 100%;
      width: 100%;
      text-align: right;
      margin-top: 1.25rem;
      margin-bottom: 0;

      &::before {
        content: '\2014\00A0'; // em dash, nbsp
      }
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
