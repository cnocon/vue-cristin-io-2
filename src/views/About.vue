<template>
  <main v-if="visible" class="about-page site-content">
    <PageHeader
      iconClass="fal fa-user-astronaut"
      text="A Little About Me"
      alignment="left"
    ></PageHeader>
    <div>
      <RotatingHeader />

      <PageHeader
        iconClass="fas fa-concierge-bell"
        text="Services"
        alignment="left"
      ></PageHeader>
      <div class="services-container">
        <div class="services row">
          <div
            v-for="service in data.services"
            :key="service.title"
            class="col-6 col-md-3 col-sm-6 service"
          >
            <Icon classes="service.icon" :style="serviceIconStyle"></Icon>
            <h6>{{ service.title }}</h6>
            <p v-html="service.body"></p>
          </div>
          <div
            v-for="testo in data.testimonials"
            :key="testo.cite"
            class="col-12 col-md-6 testimonial"
          >
            <div>
              <blockquote>
                <i class="fas fa-quote-left"></i>
                <p v-html="testo.content"></p>
                <cite v-html="testo.cite"></cite>
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
          <PostCard :post="post" />
        </div>
      </div>

      <PageHeader
        iconClass="fas fa-handshake"
        text="Connect"
        alignment="left"
      ></PageHeader>
      <ul class="row list-style-none text-center connect">
        <li
          v-for="(profile, index) in globals.profiles"
          :key="index"
          class="col-lg-2 col-md-4 col-6"
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
  </main>
</template>

<script>
import { mapState } from 'vuex'
import RotatingHeader from '@/components/RotatingHeader.vue'
import PostCard from '@/components/post/Card.vue'
import PageHeader from '@/components/shared/PageHeader.vue'
import Icon from '@/components/shared/Icon.vue'
import pageData from './about.js'

export default {
  name: 'About',
  data() {
    return {
      visible: false,
      serviceIconStyle: { marginTop: '25%' },
      data: pageData.data,
    }
  },
  components: {
    PageHeader,
    Icon,
    RotatingHeader,
    PostCard,
  },
  props: {
    globals: {},
  },
  computed: mapState('post', ['posts']),
  created() {
    this.$store.dispatch('post/fetchPosts', {
      page: 1,
      perPage: 6,
      excludeBody: true,
    })
  },
  mounted() {
    this.$nextTick(function() {
      this.visible = true
    })
  }
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
  @media (min-width: 768px) {
    padding: 45px 0;
    position: relative;
    display: flex;
    height: 100%;
  }

  .service {
    padding-right: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h6 {
      font-weight: 700;
      font-family: inherit;
      margin-top: 15px;
    }

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
    background-color: $bg-light-gray;
    border-radius: 4px;
    margin: 30px 30px 10px;
    padding: 0 30px;
    max-width: calc(100% - 60px);

    @media (min-width: 768px) {
      margin: 0 15px 10px;
      padding: 0 15px 10px 30px;
      position: absolute;
      max-width: calc(50% - 30px);
      right: 0;
    }

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

    @media all and (max-width: $breakpoint-sm-min) {
      max-width: 100%;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      &:nth-of-type(even) {
        padding-right: 0;
      }
      &:nth-of-type(odd) {
        padding-left: 0;
      }
    }
  }
}
.connect {
  padding: 30px 15px 15px;
}
</style>
