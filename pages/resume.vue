<template>
  <div class="resume-page container-fluid">
    <Head
      title="Résumé and Coursework"
      image="https://cristin.io/sharing/resume-screenshot.jpg"
      image-alt="Screenshot of Cristin O'Connor's online résumé and courses webpage"
      share-img-width="1200"
      share-img-height="627"
      description="Cristin O'Connor's online résumé, including recent coursework"
      og-type="website"
    ></Head>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1>Résumé &amp; Coursework</h1>
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
            <div v-for="(job, index) in data.experience" :key="`work-${index}`">
              <ResumeItem
                v-if="index < 2"
                :item="job"
                item-class="work-item"
              ></ResumeItem>
              <LazyResumeItem
                v-else
                :item="job"
                item-class="work-item"
              ></LazyResumeItem>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-5 col-md-12 right-column">
        <h3>
          <span>Service</span>
        </h3>
        <div class="service">
          <div
            v-for="(service, index) in data.volunteering"
            :key="`service-${index}`"
          >
            <ResumeItem
              v-if="index < 2"
              item-class="service-item"
              desc-item-class="list-style-none"
              desc-class="list-style-none"
              :item="service"
            ></ResumeItem>
            <LazyResumeItem
              v-else
              item-class="service-item"
              desc-item-class="list-style-none"
              desc-class="list-style-none"
              :item="service"
            ></LazyResumeItem>
          </div>
        </div>

        <h3>
          <span>Skills</span>
        </h3>
        <div class="skills">
          <LazySkill
            v-for="(skill, index) in data.skills"
            :key="index"
            :skill="skill"
          >
            <template #skill-icon>
              <font-awesome-icon
                :icon="[skill.iconType, skill.skillIcon]"
              ></font-awesome-icon>
            </template>
          </LazySkill>
        </div>

        <h3>
          <span>Assets</span>
        </h3>
        <div class="assets">
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
        <div class="education">
          <LazyResumeItem
            v-for="(edu, index) in data.education"
            :key="`edu-${index}`"
            :item="edu"
            item-class="edu-item"
            desc-item-class="list-style-none"
          ></LazyResumeItem>
        </div>

        <div class="xxl-margin-bottom">
          <LazyQuote classes="subtle text-size-large text-center dark">
            <template #quote>
              How we spend our days is, of course, how we spend our lives. What
              we do with this hour, and that one, is what we are doing.
            </template>
            <template #cite>Annie Dillard</template>
          </LazyQuote>
        </div>

        <LazyConnect />
      </div>
    </div>

    <LazySectionHeader
      text="Recent Coursework"
      header-classes="courses-section-header"
    >
      <template #section-header-icon>
        <font-awesome-icon :icon="['fal', 'pencil']"></font-awesome-icon>
      </template>
    </LazySectionHeader>

    <div v-if="coursesData" class="courses-row row">
      <LazyCourse
        v-for="(course, cIndex) in coursesData"
        :key="cIndex"
        :course-data="course"
        :index="cIndex"
        classes="col-12 col-sm-6 col-lg-4"
      ></LazyCourse>
    </div>
  </div>
</template>

<script>
import resumeData from '@/data/resume'
import coursesData from '@/data/courses'

export default {
  props: {
    skillIcon: {
      default: null,
      type: String,
    },
    skillIconType: {
      default: null,
      type: String,
    },
  },
  data() {
    return {
      data: resumeData,
      breadcrumbs: [
        {
          text: 'Home',
          to: { name: 'index' },
        },
        {
          text: 'Résumé & Coursework',
          to: null,
        },
      ],
      coursesData,
    }
  },
}
</script>

<style scoped lang="scss">
.resume-page {
  -webkit-animation: 1s appear;
  animation: 1s appear;
  margin: 3rem auto 0;

  h1 {
    line-height: 1.1em;

    @include media-breakpoint-up(lg) {
      margin-top: 1rem;
      margin-bottom: 4rem;
    }
  }
}
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
  margin-top: 2rem; // 32px

  h3 {
    position: relative;
    padding: 0 0 1rem 4.5rem;
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 700;
    font-family: $font-family-display;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 1rem;
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
  margin-top: 1rem;

  @media all and (max-width: $breakpoint-sm) {
    padding-top: 2rem;
  }
}
.assets {
  padding-bottom: 1.25rem;
  padding-top: 1rem;

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
.xxl-margin-bottom {
  margin-bottom: 2.5rem !important;

  @include media-breakpoint-down(sm) {
    margin-bottom: 0.5rem !important;
  }
}
</style>
