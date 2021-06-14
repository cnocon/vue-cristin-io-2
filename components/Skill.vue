<template>
  <div class="skill-unit">
    <h4>
      <i :class="skill.icon"></i>
      {{ skill.name }}
    </h4>
    <div class="bar" :data-percent="skill.percent">
      <div class="progress" :style="progressStyle">
        <span class="score">
          {{ skill.percent }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    skill: {
      type: Object,
      default: null,
    },
  },
  computed: {
    progressStyle() {
      return { width: `${this.skill.percent}%` }
    },
  },
}
</script>

<style scoped lang="scss">
.skill-unit {
  padding: 1rem 0 1rem 0.625rem;

  &:last-of-type {
    padding-bottom: 4rem;
  }

  h4 {
    position: relative;
    z-index: 1;
    margin: 0 0 0.25rem;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.4em;
    vertical-align: baseline;
    font-family: $font-family-base;
    color: $primary;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  i {
    margin: 1px 3px 0 0;
    line-height: 1em;
    vertical-align: bottom;
    font-size: 1rem;
  }

  .bar {
    position: relative;
    box-sizing: content-box;
    z-index: 0;
    background-color: $border-light-gray;
    width: 100%;
    height: 6px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    display: block;
    outline: 0;

    .progress {
      position: absolute;
      overflow: visible;
      display: block;
      top: 0;
      left: 0;
      width: 0;
      z-index: 1;
      height: 6px;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      background-color: $border-light-gray;
      // background-image: $pastel-rainbow-bar;
      background-image: $rainbow-gradient-light;
      background-size: cover;
      background-position: center bottom;
      background-repeat: no-repeat;
    }
  }

  .score {
    position: absolute;
    display: block;
    z-index: 3;
    right: 0;
    bottom: 0;
    width: 1.6875rem;
    height: 1.375rem;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
    color: $white;
    line-height: 1.25rem;
    font-weight: 900;
    font-size: 0.875rem;
    font-family: $font-family-heading;
    text-align: center;
    background-color: $primary;
  }
}
</style>
