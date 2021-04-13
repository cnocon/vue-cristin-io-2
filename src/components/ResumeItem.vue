<template>
  <div class="item">
    <div v-if="itemType === 'default'" class="year">{{ item.year }}</div>
    <header>
      <h4>
        {{ item.position }}
        <span v-if="item.positionDetail" class="font-tertiary font-weight-300">|&nbsp;</span>
        <small v-if="item.positionDetail" class="nocase font-tertiary  font-weight-300">
          {{ item.positionDetail }}
        </small>
      </h4>
      <p>
        <span v-html="item.company" class="company"></span>
        <i class="far fa-chevron-double-right"></i>
        <span v-html="item.location" class="location"></span>
        <span class="range">
          {{ item.startDate }} <span class="range-end" v-if="item.endDate"> &mdash; {{ item.endDate }}</span>
        </span>
      </p>
    </header>
    <ul :class="descClass ? descClass : ''">
      <li
        :class="descItemClass ? descItemClass : ''"
        v-for="(desc, index) in item.descList"
        :key="index"
      >
        {{ desc }}
      </li>
    </ul>
    <ul class="awards list-style-none">
      <li
        v-for="(award, index) in item.awards"
        :key="index"
      >
        <i className="fal fa-trophy-alt"></i>
        <div>
          {{ award.name }}
          <span>{{ award.detail }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ResumeItem',
  props: {
    item: Object,
    descItemClass: String,
    descClass: String,
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.item {
  border: 3px solid $border-light-gray;
  padding: 1.875rem 1.875rem 0;
  border-radius: 5px;
  margin-bottom: 3rem;

  &.service-item {
    display: block;
    border: 0;
    padding: 0;
    margin-bottom: 0 !important;

    .year { display: none; }
  }

  &.default {
    margin-left: 66px;
    position: relative;

    .year {
      position: absolute;
      background-color: $color-primary;
      color: $white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      left: -66px;
      top: calc(50% - 25px);
      line-height: 50px;
      text-align: center;
      vertical-align: middle;
      font-size: 14px;
      font-weight: 600;
      font-family: $font-primary;
    }
  }

  header {
    margin-bottom: 1rem;

    h4 {
      font-weight: 700;
      text-transform: uppercase;
      font-family: $font-tertiary;
      font-size: 1rem;
    }
    span {
      display: inline-block;
      font-weight: 400;
      margin-bottom: 0;
      font-family: $font-secondary;
      font-size: 14px;

      &.company {
        font-family: $font-tertiary;
        text-transform: uppercase;
      }

      &.location {
        display: inline-block;
        font-weight: 400;
        font-style: italic;
      }

      &.range {
        display: block;
        font-size: 13px;
        color: $border-dark-gray;
        font-weight: 500;
        font-family: $font-primary;

        .range-end {
          color: $border-dark-gray;
          font-weight: 500;
          font-family: $font-primary;
          font-size: 13px;
        }
      }
    }

    .fa-chevron-right,
    .fa-chevron-double-right {
      display: inline-block;
      padding: 0 5px 0 7px;
      line-height: 1rem;

      &::before {
        vertical-align: top;
        line-height: 1rem;
        color: $border-dark-gray;
        font-size: 12px;
        line-height: 15px;
      }
    }
  }
  ul {
    padding-left: 20px;
    font-size: 14px;
    margin: 0 0 1.5rem;

    &:last-of-type {
      margin-bottom: 0;
    }

    &.awards {
      padding-left: 0;
      padding-bottom: 20px;

      li {
        position: relative;
        list-style: none;
        font-weight: 600;
        font-family: $font-secondary;
        text-transform: uppercase;

        i {
          position: absolute;
          text-shadow: 0 1px 1px hsl(58, 100%, 65%);
          top: 0.5em;
        }

        div {
          display: inline-block;
          padding-left: 25px;
          margin-bottom: 0.9375rem;
        }

        span {
          font-weight: 400;
          font-family: $font-primary;
          display: block;
          font-style: italic;
          line-height: 1em;
          text-transform: none;
        }
      }
    }
  }
}
</style>
