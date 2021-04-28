<template>
  <div>
    <Head />
    <header class="text-center">
      <h1 class="page-title">This is <b>Me.</b></h1>
      <p class="page-subtitle">
        I'm a <span>Front End Software Engineer</span>.
      </p>
    </header>
    <main>
      <Section
        header-icon-type="fal"
        header-icon="user-astronaut"
        header-text="A Little About Me"
        header-alignment="left"
        header-classes="mb-3"
      >
        <RotatingHeader />
      </Section>

      <Section
        header-icon-type="fal"
        header-icon="concierge-bell"
        header-text="Services"
        header-alignment="left"
      >
        <div class="row d-flex align-items-center">
          <div class="col-sm-6 col-lg-3 text-center mb-5">
            <div class="rainbow-border rounded-circle p-2 d-inline-block mb-2">
              <font-awesome-icon
                :icon="['fal', 'code']"
                size="2x"
              ></font-awesome-icon>
            </div>
            <h4>WEB DEVELOPMENT</h4>
            <p>
              This is my primary area of expertise after 10+ years in the field.
              <a href="mailto:her@cristin.io">Contact me</a> about web
              development.
            </p>
          </div>
          <div class="col-sm-6 col-lg-3 text-center mb-5">
            <div class="rainbow-border rounded-circle p-2 d-inline-block mb-2">
              <font-awesome-icon
                :icon="['fal', 'graduation-cap']"
                size="2x"
              ></font-awesome-icon>
            </div>
            <h4>CODE TUTORING</h4>
            <p>
              I focus on teaching with compassion and work with all ages.
              <a href="mailto:her@cristin.io">Contact me</a> about mentoring or
              code tutoring.
            </p>
          </div>
          <div class="col-sm-12 col-lg-6 mb-5">
            <quote classes="subtle bg-lightest rounded-lg pr-5">
              <template #quote>
                Cristin O'Connor is a lifesaver! Being new to Gatsby.js, I was
                having a difficult time finding a solution for a blocker. I
                scoured documentation, tried every combination of keywords, and
                and went to every forum I could think of to find the solution. I
                came across Cristin's reached out. Cristin was responsive, and
                knowledgeable. She was also kind and concise which was exactly
                what a newbie like me needed."
              </template>
              <template #cite>Mariah W., Freelance Web Developer</template>
            </quote>
          </div>
        </div>
      </Section>

      <Section
        v-if="posts"
        header-icon-type="fal"
        header-icon="rss"
        header-text="Latest Blog Posts"
        header-alignment="left"
      >
        <PostList
          :posts="posts"
          column-classes="col-sm-12 col-md-6 col-xl-4 mb-5"
        ></PostList>
      </Section>

      <Section
        header-icon-type="fal"
        header-icon="handshake"
        header-text="Connect"
        header-alignment="left"
      >
        <ul class="list-style-none row">
          <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
            <a
              href="https://github.com/cnocon"
              target="_blank"
              rel="noopener noreferrer"
              class="d-inline-block text-center plain"
            >
              <div
                class="rainbow-border rounded-circle p-2 d-inline-block mb-2"
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
                class="rainbow-border rounded-circle p-2 d-inline-block mb-2"
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
                class="rainbow-border rounded-circle p-2 d-inline-block mb-2"
              >
                <font-awesome-icon
                  :icon="['fab', 'stack-overflow']"
                  size="2x"
                  class="fa-w-16"
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
                class="rainbow-border rounded-circle p-2 d-inline-block mb-2"
              >
                <font-awesome-icon
                  :icon="['fal', 'hashtag']"
                  size="2x"
                  class="fa-w-16"
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
                class="rainbow-border rounded-circle p-2 d-inline-block mb-2"
              >
                <font-awesome-icon
                  :icon="['fab', 'linkedin-in']"
                  size="2x"
                  class="fa-w-16"
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
                class="rainbow-border rounded-circle p-2 d-inline-block mb-2"
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
      </Section>
    </main>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
import Head from '@/components/Head'
import RotatingHeader from '@/components/RotatingHeader'
import Section from '@/components/Section'
import PostList from '@/components/PostList'
import { library } from '@fortawesome/fontawesome-svg-core'
// import {  } from '@fortawesome/pro-regular-svg-icons'
import { faHandshake, faUserAstronaut, faEnvelope, faHashtag, faCode, faGraduationCap, faConciergeBell, faRss } from '@fortawesome/pro-light-svg-icons'
// import {  } from '@fortawesome/pro-duotone-svg-icons'
// import {  } from '@fortawesome/pro-solid-svg-icons'
import { faLinkedinIn, faStackOverflow, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGraduationCap, faCode, faUserAstronaut, faConciergeBell, faRss, faHandshake, faEnvelope, faLinkedinIn, faHashtag, faStackOverflow, faCodepen, faGithub)

export default {
  components: {
    RotatingHeader,
    Section,
    PostList,
    Head,
  },
  // eslint-disable-next-line require-await
  async asyncData({ $content, params, query }) {
    const posts = await $content('articles').limit(6).sortBy('date', 'desc').fetch()

    return {
      posts
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  text-align: center;
}

.page-title {
  font-weight: 400;
  color: $primary;
  text-transform: uppercase;
  font-family: $font-family-display;
  margin-bottom: 0.5rem;

  b {
    font-weight: 900;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: $rainbow-gradient-med;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.page-subtitle {
  color: $primary;
  display: inline-block;
  font-weight: 300;
  font-family: $font-family-display;
  font-size: 1.25rem;
  font-style: italic;

  span {
    display: inline-block;
    // border-radius: 0.25rem;
    // background-color: rgba($highlight-yellow, 0.625);
    // padding-left: 0.5rem;
    // padding-right: 0.5rem;
  }

  b {
    display: inline-block;
    font-weight: 300;
  }
}
</style>
