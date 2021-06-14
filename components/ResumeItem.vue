<template>
  <div :class="itemClasses">
    <div class="year">{{ item.year }}</div>
    <header>
      <h4>
        {{ item.position }}

        <span v-if="item.positionDetail" class="median-pipe">|</span>
        <small
          v-if="item.positionDetail"
          class="nocase font-tertiary font-weight-300"
        >
          {{ item.positionDetail }}
        </small>
      </h4>
      <p>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span class="company" v-html="item.company"></span>
        <!-- eslint-enable -->
        <font-awesome-icon
          :icon="['fal', 'chevron-double-right']"
          size="2x"
        ></font-awesome-icon>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span class="location" v-html="item.location"></span>
        <!-- eslint-enable -->
        <span class="range">
          {{ item.startDate }}
          <span v-if="item.endDate" class="range-end">
            &mdash; {{ item.endDate }}
          </span>
        </span>
      </p>
    </header>
    <ul :class="descClass ? descClass : ''">
      <li
        v-for="(desc, index) in item.descList"
        :key="index"
        :class="descItemClass ? descItemClass : ''"
      >
        {{ desc }}
      </li>
    </ul>
    <ul v-if="item.awards.length > 0" class="awards list-style-none">
      <li v-for="(award, index) in item.awards" :key="index">
        <font-awesome-icon
          :icon="['fal', 'trophy-alt']"
          size="2x"
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
/* eslint-disable prettier/prettier */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDoubleRight, faTrophyAlt } from '@fortawesome/pro-light-svg-icons'
library.add(faChevronDoubleRight, faTrophyAlt)
/* eslint-enable prettier/prettier */

export default {
  name: 'ResumeItem',
  props: {
    item: {
      type: Object,
      default: null,
    },
    itemClass: {
      type: String,
      default: '',
    },
    descItemClass: {
      type: String,
      default: '',
    },
    descClass: {
      type: String,
      default: '',
    },
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
  padding: 1.875rem 1.875rem 0 2.625rem;
  border-radius: 0.3125rem;
  position: relative;

  @include media-breakpoint-down(md) {
    padding: 0 1.5rem 1.5rem;
  }

  .left-column & {
    margin-bottom: 2rem;
  }

  .right-column & {
    padding-left: 0.625rem;

    &.edu-item {
      margin-bottom: 2rem;

      header {
        p {
          @include media-breakpoint-down(md) {
            display: flex;
            flex-wrap: wrap;
          }
        }
      }
    }
  }

  ul {
    &.list-style-none {
      padding-left: 0;
    }
  }

  li {
    margin-bottom: 0.3125rem;
    font-size: 1rem;
    font-weight: 400;

    @include media-breakpoint-down(md) {
      font-size: 0.875rem;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    @include media-breakpoint-down(md) {
      font-size: 0.875rem;
    }
  }

  p {
    display: block;
  }

  .median-pipe {
    font-family: $font-family-display;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1em;
    color: $border-dark-gray;
  }

  &.edu-item {
    .year {
      display: none;
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

      @include media-breakpoint-up(md) {
        display: block;
        position: absolute;
        left: -4.5rem;
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

  &.edu-item,
  &.service-item,
  &.work-item {
    header {
      > p {
        // display: flex;
        // justify-content: flex-start;
        // align-items: center;
        // flex-wrap: wrap;
        // margin-top: 0;
      }
    }
  }

  &.service-item {
    display: block;
    border: 0;
    padding-bottom: 2rem;
    padding-top: 1rem;

    @include media-breakpoint-down(md) {
      padding-bottom: 1rem;
    }

    &:last-of-type {
      padding-top: 0;
    }

    .year {
      display: none;
    }
  }

  header {
    margin-bottom: 1rem;

    h4 {
      font-weight: 600;
      text-transform: uppercase;
      font-family: $font-family-display;
      font-size: 1.15rem;
      letter-spacing: 1px;
      margin-bottom: 0;

      @include media-breakpoint-up(md) {
        margin-top: 0;
      }
    }

    span {
      display: inline-block;
      font-weight: 400;
      margin-bottom: 0;
      font-family: $font-family-heading;
      font-size: 0.875rem;

      &.company {
        font-family: $font-family-heading;
        font-size: 1.15rem;
        line-height: 2rem;
        font-weight: 400;

        @include media-breakpoint-down(md) {
          display: inline-block;
          font-size: 0.925rem;
        }
      }

      &.location {
        font-family: $font-family-base;
        font-size: 0.875rem;
        line-height: 2rem;
        vertical-align: middle;
        text-transform: uppercase;
        font-style: normal;
        color: $border-dark-gray;
      }

      &.range {
        display: block;
        font-weight: 500;
        width: 100%;
        font-size: 0.9rem;
        color: darken($border-dark-gray, 5%);
        font-family: $font-family-base;
        line-height: 1.25em;

        @include media-breakpoint-down(md) {
          font-size: 0.875rem;
        }

        .range-end {
          color: inherit;
          font-weight: inherit;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
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
    padding-left: 1.25rem;
    font-size: 0.875;
    margin: 0 0 2rem;

    &.awards {
      padding-left: 0;

      li {
        position: static;
        display: flex;
        align-items: flex-start;
        padding-bottom: 0.46875rem;
        padding-top: 0.46875rem;
        position: relative;
        list-style: none;
        font-weight: 600;
        font-family: $font-family-heading;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        margin-bottom: 0.9375rem;

        @include media-breakpoint-down(md) {
          margin-bottom: 0;
        }

        .fa-trophy-alt {
          color: gold;
          max-height: 1.5rem;
          width: auto;
        }

        div {
          display: inline-block;
          padding-left: 1rem;
          font-size: 0.875rem;

          @include media-breakpoint-down(md) {
            font-size: 0.75rem;
            padding-left: 1rem;
          }
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
