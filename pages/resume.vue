<template>
  <div class="resume-page app-container site-content container-fluid">
    <Head
      title="Résumé and Coursework"
      description="Cristin O'Connor's Front End Software Engineering Résumé and Coursework"
    ></Head>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1 class="mt-0">Résumé & Coursework</h1>

    <div v-if="data.jobTitle" class="row resume-row">
      <div class="col-lg-7 col-md-12 left-column">
        <div class="first-icon">
          <font-awesome-icon
            :icon="['fal', 'briefcase']"
            size="2x"
          ></font-awesome-icon>
        </div>
        <span class="rule"></span>

        <div class="work-history">
          <div class="rule"></div>
          <h3>
            <span>Work History</span>
          </h3>
          <div class="timeline">
            <ResumeItem
              v-for="(job, index) in data.experience"
              :key="index"
              :item="job"
              item-class="work-item"
            />
          </div>
        </div>
      </div>

      <!-- BEGIN RIGHT COLUMN -->
      <div class="col-lg-5 col-md-12 right-column">
        <h3>
          <span>Service</span>
        </h3>
        <div class="service">
          <ResumeItem
            v-for="(service, index) in data.volunteering"
            :key="index"
            item-class="service-item"
            desc-item-class="list-style-none"
            desc-class="list-style-none"
            :item="service"
          />
        </div>

        <h3>
          <span>Skills</span>
        </h3>
        <div class="skills">
          <Skill
            v-for="(skill, index) in data.skills"
            :key="index"
            :skill="skill"
          />
        </div>

        <h3>
          <span>Assets</span>
        </h3>
        <div class="assets pb-3">
          <ul>
            <li
              v-for="(asset, index) in data.assets"
              :key="index"
              class="asset-item"
            >
              <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
              <!-- eslint-disable vue/no-v-html -->
              <span v-html="asset"></span>
              <!--eslint-enable-->
            </li>
          </ul>
        </div>

        <h3>
          <span>Education</span>
        </h3>
        <div class="education mt-3">
          <ResumeItem
            v-for="(edu, index) in data.education"
            :key="index"
            :item="edu"
            item-class="edu-item"
            desc-item-class="list-style-none"
          />
        </div>

        <quote classes="subtle text-lg text-center dark rounded-lg pr-5">
          <template #quote>
            How we spend our days is, of course, how we spend our lives. What we
            do with this hour, and that one, is what we are doing.
          </template>
          <template #cite>– Annie Dillard</template>
        </quote>

        <div class="connect">
          <div class="row">
            <ul class="list-style-none row">
              <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
                <a
                  href="https://github.com/cnocon"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="d-inline-block text-center plain"
                >
                  <div
                    class="
                      rainbow-border
                      rounded-circle
                      p-2
                      d-inline-block
                      mb-2
                    "
                  >
                    <font-awesome-icon
                      :icon="['fab', 'github']"
                      size="2x"
                    ></font-awesome-icon>
                  </div>
                  <span class="d-block">GitHub</span>
                </a>
              </li>
              <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
                <a
                  href="https://codepen.io/cnocon"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="plain"
                >
                  <div
                    class="
                      rainbow-border
                      rounded-circle
                      p-2
                      d-inline-block
                      mb-2
                    "
                  >
                    <font-awesome-icon
                      :icon="['fab', 'codepen']"
                      size="2x"
                    ></font-awesome-icon>
                  </div>
                  <span class="d-block">CodePen</span>
                </a>
              </li>
              <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
                <a
                  href="https://stackoverflow.com/users/2187039/cnocon"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="plain"
                >
                  <div
                    class="
                      rainbow-border
                      rounded-circle
                      p-2
                      d-inline-block
                      mb-2
                    "
                  >
                    <font-awesome-icon
                      :icon="['fab', 'stack-overflow']"
                      class="fa-w-16"
                      size="2x"
                    ></font-awesome-icon>
                  </div>
                  <span class="d-block">Stack Overflow</span>
                </a>
              </li>
              <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
                <a
                  href="https://twitter.com/cnocon"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="plain"
                >
                  <div
                    class="
                      rainbow-border
                      rounded-circle
                      p-2
                      d-inline-block
                      mb-2
                    "
                  >
                    <font-awesome-icon
                      :icon="['fal', 'hashtag']"
                      class="fa-w-16"
                      size="2x"
                    ></font-awesome-icon>
                  </div>
                  <span class="d-block">Twitter</span>
                </a>
              </li>
              <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
                <a
                  href="https://www.linkedin.com/in/cristinoconnor"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="plain"
                >
                  <div
                    class="
                      rainbow-border
                      rounded-circle
                      p-2
                      d-inline-block
                      mb-2
                    "
                  >
                    <font-awesome-icon
                      :icon="['fab', 'linkedin-in']"
                      class="fa-w-16"
                      size="2x"
                    ></font-awesome-icon>
                  </div>
                  <span class="d-block">LinkedIn</span>
                </a>
              </li>
              <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
                <a
                  href="mailto:her@cristin.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="plain"
                >
                  <div
                    class="
                      rainbow-border
                      rounded-circle
                      p-2
                      d-inline-block
                      mb-2
                    "
                  >
                    <font-awesome-icon
                      :icon="['fal', 'envelope']"
                      size="2x"
                    ></font-awesome-icon>
                  </div>
                  <span class="d-block">Email</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <SectionHeader text="Recent Coursework">
      <template #section-header-icon>
        <font-awesome-icon :icon="['fal', 'pencil']"></font-awesome-icon>
      </template>
    </SectionHeader>
    <div v-if="courseData" class="row">
      <div
        v-for="(course, cIndex) in courseData"
        :key="cIndex"
        class="col-12 col-sm-6 col-md-6 col-lg-4 course"
      >
        <figure>
          <nuxt-img :src="course.img" :alt="course.name"></nuxt-img>
        </figure>
        <h3>
          <a :href="course.url" target="_blank" rel="noopener noreferrer">
            {{ course.name }}
          </a>
        </h3>
        <h4>
          <span class="company">{{ course.company }}</span>
          <span v-if="course.instructor">
            <span class="instructor">&nbsp;|&nbsp;{{ course.instructor }}</span>
          </span>
        </h4>
        <p class="description">
          {{ course.description }}
          <a
            v-if="course.certificate_url"
            :href="course.certificate_url"
            class="btn-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import resumeData from '@/data/resume'
import courseData from '@/data/courses'
/* eslint-disable prettier/prettier */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileUser } from '@fortawesome/pro-duotone-svg-icons'
import { faBriefcase, faHashtag, faEnvelope, faHandsHeart, faPencil } from '@fortawesome/pro-light-svg-icons'
import { faGraduationCap, faCheck } from '@fortawesome/pro-solid-svg-icons'
import { faLinkedinIn, faStackOverflow, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add( faPencil, faHandsHeart, faFileUser, faGraduationCap, faLinkedinIn, faStackOverflow, faCodepen, faGithub, faBriefcase, faCheck, faHashtag, faEnvelope )
/* eslint-enable prettier/prettier */

export default {
  props: {
    globals: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      visible: false,
      data: resumeData,
      breadcrumbs: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Résumé & Coursework',
          href: null,
        },
      ],
      courseData,
    }
  },
  head() {
    return {
      title: 'Résumé and Coursework',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Cristin O'Connor's Résumé and Coursework Related to Front End Software Engineering",
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.visible = true
    })
  },
}
</script>

<style scoped lang="scss">
.timeline {
  @include media-breakpoint-up(md) {
    padding-left: 4.5rem;
  }
}
.work-history {
  position: relative;
  z-index: 1;
  margin-bottom: 5rem;

  @include media-breakpoint-up(md) {
    padding-right: 30px;
  }

  .rule {
    position: absolute;
    display: none;
    top: 2.0625rem;
    left: 1.6563rem;
    z-index: 0;
    width: 3px;
    height: calc(100% - 2.0625rem);
    background-color: $border-light-gray;

    @include media-breakpoint-up(md) {
      display: block;
    }
  }
}

.resume-row {
  margin-top: 20px;
  h3 {
    position: relative;
    padding: 0 0 1rem 4.5rem;
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 900;
    font-family: $font-family-display;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 1rem;

    @media all and (max-width: $breakpoint-sm) {
      &.mt-3 {
        margin-top: -1rem !important;
      }
    }

    i {
      position: absolute;
      left: 0;
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
      border: 2px solid $light;
      background-color: $white;
      z-index: 1;

      &::before {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: lighten($primary, 15%);
        background-color: $white;
        font-size: 1.625rem;
      }

      &.adjust-top {
        &::before {
          top: calc(50% + 2px);
        }
      }
    }
  }
  .left-column,
  .right-column {
    @include media-breakpoint-down(md) {
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .first-icon {
    z-index: 20;
    position: absolute;
    left: 0.3125rem;
    top: -1.5rem;
    padding: 1rem;
    border-radius: 50%;
    border: 3px solid $light;
    background-color: $white;

    @include media-breakpoint-down(md) {
      display: none;
    }
  }
  .fa-briefcase {
  }
  .left-column {
    @include media-breakpoint-up(sm) {
      position: relative;
    }

    h3 {
      @include media-breakpoint-down(md) {
        padding-left: 0;
        // line-height: inherit;
        // padding-bottom: 2rem;
        // margin-top: 0.5rem;
      }

      span {
        background-color: $primary;
        color: $white;
        border-radius: 4px;
        padding-left: 0.625rem;
        width: 100%;
        display: inline-block;
      }
    }
  }
  .right-column {
    h3 {
      padding-left: 0;
      margin-bottom: 0;

      @media all and (max-width: $breakpoint-sm) {
        line-height: inherit;
        padding-bottom: 0;
        margin-top: 0;
      }

      span {
        display: inline-block;
        width: 100%;
        z-index: 2;
        background-color: $white;
        padding-left: 0.75rem;
        color: $white;
        background-color: $primary;
        border-radius: 4px;

        @media all and (max-width: $breakpoint-sm) {
          text-align: center;
        }
      }
    }
  }
}
.service {
  @media all and (max-width: $breakpoint-sm) {
    padding-bottom: 3rem;
  }
}
.education {
  @media all and (max-width: $breakpoint-sm) {
    padding-top: 2rem;
  }

  .item {
    padding-left: 2.625rem;
  }
}
.assets {
  @include media-breakpoint-down(md) {
    padding-top: 2rem;
  }

  > ul {
    list-style: none;
    padding-left: 0;
    margin-left: 0;

    .asset-item {
      font-size: 1rem;
      position: relative;
      padding: 5px 0 1rem 0.625rem;
      margin-bottom: 0;

      .fa-check {
        display: inline-block;
        width: 2rem;
        vertical-align: top;
        color: $border-blue-vivid;
        position: absolute;
        left: 0.3125rem;
        top: 10px;
        margin-right: 0.625rem;
        color: $link-green;
        display: inline-block;

        @include media-breakpoint-down(md) {
          // margin-top: 0.75rem;
        }
      }
    }

    span {
      display: inline-block;
      font-weight: 300;
      width: calc(100% - 2rem);
      padding-left: 30px;

      b {
        font-weight: 500;
      }
    }
  }
}
.connect {
  padding-top: 2rem;

  @media all and (max-width: $breakpoint-sm) {
    padding-bottom: 2rem;
  }

  [class^='col-'] {
    text-align: center;
    padding: 0 0 1rem;
  }

  > .row {
    @include media-breakpoint-down(md) {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }

  .row {
    justify-content: center;

    @include media-breakpoint-down(lg) {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

  li {
    @include media-breakpoint-up(md) {
      padding-left: 1rem !important;
      padding-left: 1rem !important;
    }

    &:first-of-type {
      padding-left: 0 !important;
    }

    &:last-of-type {
      padding-right: 0 !important;
    }
  }

  span {
    font-size: 14px;
    line-height: 1.25em;
    font-family: $font-family-display;
  }
}
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

      &:hover {
        background-image: none;
      }
    }
  }

  h4 {
    font-family: $font-family-heading;
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
