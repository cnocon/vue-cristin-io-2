<template>
  <div class="resume-page app-container site-content container-fluid">
    <!-- <PageHeader iconClass="fad fa-file-user" text="Resumé"></PageHeader> -->
    <div v-if="show && data.jobTitle" class="row">
      <div class="col-lg-7 col-md-12">
        <span class="rule"></span>
        <div class="work-history">
          <div class="rule"></div>
          <h3 class="mt-3">
            <i class="fal fa-briefcase"></i>
            Work History
          </h3>
          <div class="timeline">
            <ResumeItem
              :item="job"
              :key="index"
              v-for="(job, index) in data.experience"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-12">
        <h3 class="mt-3">
          <i class="fal fa-hands-heart"></i>
          Service
        </h3>
        <div class="service">
          <ResumeItem
            v-for="(service, index) in data.volunteering"
            class="service-item"
            descItemClass="list-style-none"
            descClass="pl-0"
            :item="service"
            :key="index"
          />
        </div>

        <h3>
          <i class="fal fa-code"></i>
          Skills
        </h3>
        <div class="skills pb-3">
          <Skill
            v-for="(skill, index) in data.skills"
            :skill="skill"
            :key="index"
          />
        </div>

        <h3>
          <i class="fal fa-gem adjust-top"></i>
          Assets
        </h3>
        <div class="assets pb-3">
          <ul>
            <li
              v-for="(asset, index) in data.assets"
              :key="index"
              class="asset-item"
            >
              <i class="fal fa-plus"></i>
              <span v-html="asset"></span>
            </li>
          </ul>
        </div>

        <h3>
          <i class="fal fa-graduation-cap"></i>
          Education
        </h3>
        <div>
          <ResumeItem
            :item="edu"
            :key="index"
            v-for="(edu, index) in data.education"
          />
        </div>

        <div class="quote">
          <blockquote>
            <p>
              <i class="fas fa-quote-left"></i>
              <span>How we spend our days is, of course, how we spend our lives. What we do with this hour, and that one, is what we are doing.</span>
            </p>
            <cite title="Annie Dillard">— Annie Dillard</cite>
          </blockquote>
        </div>

        <ul class="row connect">
          <li
            v-for="(profile, index) in globals.profiles"
            :key="index"
            class="col-lg-2 col-md-4 col-sm-4 col-6"
          >
            <br />
            <Icon
              :classes="profile.icon + ` icon-dark icon-rainbow-dark-border`"
              :text="profile.text"
              :url="profile.link"
            ></Icon>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/shared/Icon'
import resumeData from '@/data/resume'
import ResumeItem from '@/components/ResumeItem'
import Skill from '@/components/Skill'

export default {
  name: 'Resume',
  components: {
    ResumeItem,
    Skill,
    Icon
  },
  props: {
    globals: {},
  },
  data() {
    return {
      data: {},
      show: false,
    }
  },
  created() {
    this.data = resumeData
  },
  mounted() {
    this.show = true
  },
}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
.timeline { padding-left: 68px; }
.work-history {
  position: relative;
  z-index: 1;
  margin-bottom: 5rem;
  padding-right: 30px;

  .rule {
    position: absolute;
    display: block;
    top: 33px;
    left: 26.5px;
    z-index: 0;
    width: 3px;
    height: calc(100% - 33px);
    background-color: $border-light-gray;
  }
}
.col-lg-7,
.col-lg-5 {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.assets {
  padding-left: calc(2.125rem - 12px);

  ul { list-style: none; }

  .asset-item {
    padding: 5px 0 10px;

    i {
      display: inline-block;
      margin-top: 5px;
      width: 2rem;
      vertical-align: top;
      color: $border-blue-vivid;
    }

    span {
      display: inline-block;
      font-weight: 300;
      width: calc(100% - 2rem);

      b {
        // color: darken($border-blue-vivid, 10%);
        font-weight: 500;
      }
    }
  }
}

h3 {
  position: relative;
  height: 48px;
  margin: 2rem 0 1rem;
  padding-left: 4.25rem;
  font-size: 1.5rem;
  font-weight: 300;
  font-family: $font-secondary;
  text-transform: uppercase;

  i {
    position: absolute;
    left: 0;
    top: -10px;
    font-size: 28px;
    height: 56px;
    width: 56px;
    border-radius: 50%;
    border: 2px solid $color-primary-light;
    background-color: $white;
    z-index: 1;

    &::before {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: $color-primary-med;
      background-color: $white;
    }

    &.adjust-top {
      &::before {
        top: calc(50% + 2px);
      }
    }
  }
}

.quote {
  padding: 0 0 2rem;
  max-width: 600px;
  margin: 0 auto;

  blockquote {
    background-color: $black;
    // box-shadow: $box-shadow-sm;
    padding: 30px;
    padding-bottom: 10px;
    border-radius: 5px;
    left: 0;
    top: 0;

    p {
      color: $white;

      i {
        display: inline-block;
        color: lighten($color-primary, 10%);
        font-size: 20px;
        width: 13px;
      }

      span {
        display: inline-block;
        padding: 5px 0 0 18px;
        margin-top: -25px;
        font-size: 22px;
        line-height: 1.3em;
        font-family: $font-primary;
        font-weight: 700;
        text-align: center;
      }
    }

    cite {
      display: block;
      color: $white;
      text-align: center;
      font-weight: 500;
      padding-bottom: 20px;
    }
  }
}
.connect {
  list-style: none;

  [class^='col-'] {
    text-align: center;
    padding: 0 0 1rem;
  }
}
</style>
