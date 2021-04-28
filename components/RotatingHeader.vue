<template>
  <!-- prettier-ignore -->
  <div class="rotate-header">
    <span class="rotate-words">
      Hi. I'm&nbsp;
      <span
        :class="
          activeIndex === 0 ?
          'active' :
          (activeIndex === 1 && !initialLoad ? 'fading' : null)
        "
      >
        a front end engineer.
      </span>
      <span
        :class="
          activeIndex === 1 ?
          'active' :
          (activeIndex === 2 && !initialLoad ? 'fading' : null)
        "
      >
        a programming tutor.
      </span>
      <span
        :class="
          activeIndex === 2 ?
          'active' :
          (activeIndex === 3 && !initialLoad ? 'fading' : null)
        "
      >
        an advocate for I&D.
      </span>
      <span
        :class="
          activeIndex === 3 ?
          'active' :
          (activeIndex === 0 && !initialLoad ? 'fading' : null)
        "
      >
        a passionate learner.
      </span>
    </span>
    <br />
    I live and work in beautiful Utah.
    <br />
    I love to code new things.
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  data() {
    return {
      activeIndex: 0,
      initialLoad: true,
    }
  },
  mounted() {
    setInterval(() => {
      this.activeIndex = this.activeIndex === 3 ? 0 : this.activeIndex + 1
      this.initialLoad = false
    }, 4000)
  },
}
</script>

<style scoped lang="scss">
.rotate-header {
  padding-top: 15px;
  position: relative;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.5em;
  font-family: $font-family-heading;
  text-transform: none;
  color: $dark;
  font-weight: 300;
  margin-bottom: 0;
  text-align: center;

  @include media-breakpoint-down(sm) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  span {
    @include media-breakpoint-down(sm) {
      min-width: 230px;

      &.rotate-in {
        line-height: 34px;
      }
    }
  }

  .rotate-words {
    line-height: 34px;
    display: inline-block;
    min-width: 280px;
    text-align: left;

    @include media-breakpoint-down(sm) {
      min-width: 215px;
      line-height: 22px;
    }

    span {
      font-size: inherit;
      display: inline-block;
      position: absolute;
      font-weight: 300;
      margin: auto;
      opacity: 1;

      &.active {
        opacity: 1;
        animation: 1s appear;
        font-weight: 600;
      }

      &.fading {
        opacity: 0;
        animation: 1s disappear;
      }

      &:not(.active):not(.fading) {
        opacity: 0;
      }
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(39px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes disappear {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      transform: translateY(-39px);
    }
  }
}
</style>
