<template>
  <div :class="`quote quote-right ${classes}`">
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
  padding: 2rem 3.5rem 2rem 2rem;
  margin: 0 auto 1.5rem;
  border-radius: 8px;
  max-width: 600px;
  box-shadow: $box-shadow-sm;
  // background-color: #1e2b38;
  // color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);

  &.quote-right {
    margin-left: 2rem;
  }

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
      margin-bottom: 0;
      font-family: $font-family-sans-serif;
      font-weight: 400;
      font-style: italic;
      margin-top: 1rem;
      font-size: 1rem;
      line-height: 1.75em;
    }

    cite {
      display: block;
      flex-basis: 100%;
      width: 100%;
      text-align: right;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      font-size: 1rem;

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
