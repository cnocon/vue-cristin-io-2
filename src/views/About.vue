<template>
  <main class="about-page site-content">
    <PageHeader
      iconClass="fal fa-user-astronaut"
      text="A Little About Me"
      alignment="left"
    ></PageHeader>
    <transition name="fade">
      <div v-if="show">
        <div class="rotate-header">
          <span class="rotate-words">
            Hi. I'm&nbsp;
            <span class="rotate-in active" ref="rotateable0">
              a front end engineer.
            </span>
            <span class="rotate-out" ref="rotateable1">
              a programming tutor.
            </span>
            <span class="rotate-out" ref="rotateable2">
              an advocate for I&D.
            </span>
            <span class="rotate-out" ref="rotateable3">
              a passionate learner.
            </span>
            <!-- <span class="rotate-out short" ref="rotateable4">a freelancer.</span> -->
          </span>
          <br />
          I live and work in beautiful Utah.
          <br />
          <!-- I love <b>coding</b> new things. -->
          I love to code new things.
        </div>
        <PageHeader
          iconClass="fas fa-concierge-bell"
          text="Services"
          alignment="left"
        ></PageHeader>
        <div class="services-container">
          <div class="services row">
            <div class="col-sm-6 col-md-3 service text-center">
              <Icon
                classes="far fa-code icon-dark icon-rainbow-border"
                :style="serviceIconStyle"
              ></Icon>
              <p class="mt-15 font-weight-700">WEB DEVELOPMENT</p>
              <p>
                This is my primary area of expertise. I have
                <strong>10+ years of experience</strong> in the field.
              </p>
            </div>
            <div class="col-sm-6 col-md-3 service text-center">
              <i class=""></i>
              <Icon
                classes="far fa-graduation-cap icon-dark icon-rainbow-border"
                :style="serviceIconStyle"
              ></Icon>
              <p class="mt-15 font-weight-700">CODE TUTORING</p>
              <p>
                I focus on <strong>teaching with compassion</strong>. I love
                tutoring and I can work with all ages.
                <a href="mailto:her@cristin.io">Contact me about tutoring</a>.
              </p>
            </div>
            <div class="col-sm-12 col-md-6 testimonial">
              <div>
                <blockquote>
                  <i class="fas fa-quote-left"></i>
                  <p>
                    <strong>Cristin O'Connor is a lifesaver! </strong>
                    to Gatsby.js, I was having a difficult time finding a
                    solution for a blocker. I scoured documentation, tried every
                    combination of keywords, and went to every forum I could
                    think of to find the solution. I came across Cristin's
                    website and reached out. Cristin was responsive, fast, and
                    knowledgeable. She was also kind and concise which was
                    exactly what a newbie like me needed.
                  </p>
                  <cite>– <b>Mariah W.</b>, Freelance Developer</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <PageHeader
          iconClass="fas fa-rss"
          text="Latest Blog Posts"
          alignment="left"
        ></PageHeader>
        <div v-if="posts" class="row posts">
          <div
            v-for="(post, index) in posts"
            :key="index"
            class="col-lg-4 col-md-6 col-sm-12 post"
          >
            <a :href="post.url" class="post-link" target="_blank">
              <div class="post-header">
                <div class="img-wrapper">
                  <img
                    :src="post.featured_image"
                    :alt="post.featured_image_alt"
                  />
                </div>
                <h6>
                  <span>{{ post.title }}</span>
                </h6>
              </div>
              <p>
                <b>{{ formattedDate(post.published) }}</b>
                {{ post.summary }}
              </p>
            </a>
          </div>
        </div>

        <PageHeader
          iconClass="fas fa-handshake"
          text="Connect"
          alignment="left"
        ></PageHeader>
        <ul v-if="globals?.name" class="row text-center connect">
          <li
            v-for="(profile, index) in globals.profiles"
            :key="index"
            class="col-lg-2 col-md-4 col-sm-6"
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
    </transition>
  </main>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
import { ref } from 'vue'
// import PostService from '@/services/PostService'
import PageHeader from '@/components/shared/PageHeader.vue'
import Icon from '@/components/shared/Icon.vue'

export default {
  name: 'About',
  data() {
    return {
      show: false,
      serviceIconStyle: { marginTop: '25%' },
    }
  },
  components: {
    PageHeader,
    Icon,
  },
  props: {
    globals: {},
  },
  methods: {
    formattedDate(isoString) {
      return moment(isoString).format('MMMM Do YYYY')
    },
  },
  computed: mapState('post', ['posts']),
  created() {
    this.$store.dispatch('post/fetchPosts', {
      page: 1,
      perPage: 6,
      excludeBody: true,
    })
    this.show = true
  },
  mounted() {
    const refs = [
      ref(this.$refs.rotateable0),
      ref(this.$refs.rotateable1),
      ref(this.$refs.rotateable2),
      ref(this.$refs.rotateable3),
    ]
    let active_index = 1
    let prev_index = 0
    let activeEl = refs[active_index].value
    let prevEl = refs[prev_index].value

    setInterval(() => {
      if (activeEl && prevEl) {
        activeEl = refs[active_index].value
        prevEl = refs[prev_index].value

        activeEl.classList.add('rotate-in', 'active')
        activeEl.classList.remove('rotate-out')

        prevEl.classList.add('rotate-out')
        prevEl.classList.remove('rotate-in', 'active')

        prev_index = prev_index >= 3 ? 0 : prev_index + 1
        active_index = active_index >= 3 ? 0 : active_index + 1
      }
    }, 3000)
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.profiles {
  padding: 30px 0 0;
}
.services-container {
  height: auto;
}
.services {
  padding: 45px 0;
  position: relative;
  display: flex;
  height: 100%;

  .service {
    padding-right: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      display: block;
    }

    p {
      margin-top: 5px;
      font-size: 0.875rem;
      font-weight: 400;
    }

    strong {
      font-weight: 600;
    }
  }

  .testimonial {
    position: absolute;
    background-color: darken($bg-light-gray, 1.5%);
    // border: 1px solid $border-light-gray;
    box-shadow: $box-shadow-md;
    border-radius: 5px;
    padding: 0 15px 10px 30px;
    margin: 0 15px 10px;
    max-width: calc(50% - 30px);
    right: 0;

    i {
      position: absolute;
      left: 20px;
      top: 20px;

      &::before,
      &::after {
        color: $color-primary-light;
        font-size: 22px;
      }
    }

    blockquote {
      padding: 20px;
      box-sizing: border-box;
      left: 0;
      top: 0;

      p {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 0;
        padding-bottom: 5px;
      }

      cite {
        font-size: 14px;
      }
    }
  }
}
.posts {
  display: flex;
  justify-content: space-between;
  padding: 30px 15px 0;

  .post {
    flex-direction: column;
    padding: 15px 15px;
    max-width: calc(100% - 30px);

    @media (min-width: 768px) and (max-width: 991px) {
      &:nth-of-type(even) {
        padding-right: 0;
      }
      &:nth-of-type(odd) {
        padding-left: 0;
      }
    }

    a {
      display: flex;
      flex-direction: column;
      padding: 15px;
      box-shadow: $box-shadow-sm;
      height: 100%;
      background-size: 100% 3px;
      transition: all 0.3s ease;

      &:hover {
        box-shadow: $box-shadow-lg;
        transform: scale(1.015);

        span {
          text-decoration: none;
        }
      }
    }

    .post-header {
      overflow: hidden;

      .img-wrapper {
        float: left;
        position: relative;
        height: 42px;
        width: 42px;
        border: 1px solid $color-primary;
        margin: 3px 10px 3px 3px;
        box-shadow: rgba($color-primary, 0.5) 0 1px 1px,
          rgba($color-primary, 0.5) 0 -1px 1px,
          rgba($color-primary, 0.5) 1px 0 1px,
          rgba($color-primary, 0.5) -1px 0 1px;
        border-radius: 50%;
        // margin-right: calc(0.9375rem + 3px);
        text-align: center;
        // box-sizing: content-box;

        img {
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          max-width: 100%;
          height: 30px;
          transform: translate(-50%, -50%);
        }
      }
    }

    h6 {
      text-transform: none;
      font-family: $font-secondary;
      margin-top: 0;
      // width: calc(100% - 72px);

      span {
        display: inline-block;
        font-weight: 800;
        margin: 3px 0 0;
        width: calc(100% - 72px);
      }
    }

    p {
      font-weight: 400;
      font-family: $font-secondary;
      font-size: 14px;
      margin-bottom: 15px;
      line-height: 1.8491428572em;

      b {
        text-transform: uppercase;
        font-weight: 600;
      }
    }
  }
}
.connect {
  padding: 30px 15px 15px;
}
</style>
