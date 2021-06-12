<template>
  <div :class="itemClasses">
    <div class="year">{{ item.year }}</div>
    <header>
      <h4>
        {{ item.position }}

        <span v-if="item.positionDetail" class="font-tertiary font-weight-300">
          |&nbsp;
        </span>
        <small
          v-if="item.positionDetail"
          class="nocase font-tertiary font-weight-300"
        >
          {{ item.positionDetail }}
        </small>
      </h4>
      <p>
        <span v-html="item.company" class="company"></span>
        <font-awesome-icon
          :icon="['fal', 'chevron-double-right']"
          size="2x"
          class="top-icon"
        ></font-awesome-icon>
        <span v-html="item.location" class="location"></span>
        <span class="range">
          {{ item.startDate }}
          <span class="range-end" v-if="item.endDate">
            &mdash; {{ item.endDate }}
          </span>
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
    <ul class="awards list-style-none" v-if="item.awards.length > 0">
      <li v-for="(award, index) in item.awards" :key="index">
        <font-awesome-icon
          :icon="['fal', 'trophy-alt']"
          size="2x"
          class="top-icon"
        ></font-awesome-icon>
        <div>
          {{ award.name }}
          <span>{{ award.detail }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
// import {  } from '@fortawesome/pro-solid-svg-icons'
import {
  faChevronDoubleRight,
  faTrophyAlt,
} from '@fortawesome/pro-light-svg-icons'
library.add(faChevronDoubleRight, faTrophyAlt)

export default {
  name: 'ResumeItem',
  props: {
    item: Object,
    itemClass: String,
    descItemClass: String,
    descClass: String,
  },
  computed: {
    itemClasses() {
      return 'item ' + this.itemClass
    },
  },
}
</script>

<style scoped lang="scss">
.item {
  border: 3px solid $border-light-gray;
  padding: 1.875rem 1.875rem 0;
  border-radius: 0.3125rem;
  margin-bottom: 3rem;
  position: relative;

  @media all and (max-width: $breakpoint-sm) {
    padding: 0 1.5rem 1.5rem;
  }

  header {
    h4 {
      margin-bottom: 0;
    }

    @media all and (min-width: $breakpoint-sm-min) {
      h4 {
        margin-top: 0;
      }

      p span,
      p span.range {
        font-size: 12px;
      }
    }
  }

  p {
    margin-top: 0;
  }

  ul {
    @media all and (max-width: $breakpoint-sm) {
      margin-bottom: 0 !important;
    }
  }

  li {
    margin-bottom: 0.3125rem;
    font-size: 14px;
    font-weight: 400;

    &:last-of-type {
      margin-bottom: 0;
    }

    @media all and (max-width: $breakpoint-sm) {
      font-size: 0.875rem;
    }
  }
  &.edu-item {
    .year {
      display: none;
    }
  }

  &.service-item {
    &:last-of-type {
      padding-bottom: 1rem;
    }
  }

  &.work-item {
    &:first-of-type {
      .year {
        background-color: $primary;
        color: $white;
      }
    }

    .year {
      display: none;

      @media all and (min-width: $breakpoint-sm-min) {
        display: block;
        position: absolute;
        left: -4.125rem;
        top: calc(50% - 1.5625rem);
        width: 3.125rem;
        height: 3.125rem;
        font-size: 0.875rem;
        line-height: 3.125rem;
        vertical-align: middle;
        font-weight: 700;
        text-align: center;
        font-family: $font-family-base;
        color: $white;
        background-color: $border-light-gray;
        color: $primary;
        border-radius: 50%;
      }
    }
  }

  &.service-item {
    display: block;
    border: 0;
    padding: 0;
    margin-bottom: 0 !important;

    .year {
      display: none;
    }
  }

  header {
    margin-bottom: 1rem;

    h4 {
      font-weight: 700;
      text-transform: uppercase;
      font-family: $font-family-display;
      font-size: 1rem;
    }
    span {
      display: inline-block;
      font-weight: 400;
      margin-bottom: 0;
      font-family: $font-family-heading;
      font-size: 0.875rem;

      &.company {
        font-family: $font-family-display;
        text-transform: uppercase;
        font-size: 0.875rem;

        @media all and (max-width: $breakpoint-sm) {
          display: block;
          font-size: 0.8125rem;
        }

        + i {
          @media all and (max-width: $breakpoint-sm) {
            display: none;
          }
        }
      }

      &.location {
        display: inline-block;
        font-weight: 400;
        font-style: italic;
        font-size: 0.875rem;

        @media all and (max-width: $breakpoint-sm) {
          vertical-align: top;
          font-size: 0.8125rem;
        }
      }

      &.range {
        display: block;
        font-size: 0.8125rem;
        color: $border-dark-gray;
        font-weight: 500;
        font-family: $font-family-base;

        @media all and (max-width: $breakpoint-sm) {
          font-size: 0.75rem;
          line-height: 1em;
        }

        .range-end {
          color: $border-dark-gray;
          font-weight: 500;
          font-family: $font-family-base;
          font-size: 0.8125rem;

          @media all and (max-width: $breakpoint-sm) {
            font-size: 0.75rem;
            line-height: 1em;
          }
        }
      }
    }

    .fa-chevron-double-right {
      color: $border-med-gray;
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

    &.awards {
      padding-left: 0;
      // padding-bottom: 1.5rem;

      @media all and (max-width: $breakpoint-sm) {
        padding: 1.5rem 0;

        li {
          display: flex;
          align-items: center;

          div {
            font-size: 12px;
          }
        }
      }

      li {
        position: relative;
        list-style: none;
        font-weight: 600;
        font-family: $font-family-heading;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        margin-bottom: 0.9375rem;

        .fa-trophy-alt {
          color: gold;
        }

        div {
          display: inline-block;
          padding-left: 25px;
          font-size: 0.875rem;
        }

        span {
          font-weight: 400;
          font-family: $font-family-base;
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