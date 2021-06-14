<template>
  <div>
    <Head />
    <header class="text-center">
      <h1 class="page-title">
        I&nbsp;&nbsp;L<span>&#9829;</span>VE&nbsp;&nbsp;<i>Code</i>,
      </h1>
      <p class="page-subtitle">
        so I write it, teach it, and am always learning more.
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
            <h4>WEB DEVELOPMENT</h4>
            <p>
              This is my primary area of expertise after 10+ years in the field.
              <a href="mailto:her@cristin.io">Contact me</a> about web
              development.
            </p>
          </div>
          <div class="col-sm-6 col-lg-3 text-center mb-5">
            <h4>CODE TUTORING</h4>
            <p>
              I focus on teaching with compassion and work with all ages.
              <a href="mailto:her@cristin.io">Contact me</a> about mentoring or
              tutoring.
            </p>
          </div>
          <div class="col-sm-12 col-lg-6 mb-5">
            <quote classes="subtle dark rounded-lg pr-5">
              <template #quote>
                Cristin O'Connor is a lifesaver! Being new to Gatsby.js, I was
                having a difficult time finding a solution for a blocker. I
                scoured documentation, tried every combination of keywords, and
                and went to every forum I could think of to find the solution. I
                came across Cristin's reached out. Cristin was responsive, and
                knowledgeable. She was also kind and concise which was exactly
                what a newbie like me needed."
              </template>
              <template #cite>– Mariah W., Freelance Web Developer</template>
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
        <LazyPostList
          :posts="posts"
          column-classes="col-sm-12 col-md-6 col-xl-4 mb-5"
        ></LazyPostList>
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
import { library } from '@fortawesome/fontawesome-svg-core'
/* eslint-disable prettier/prettier */
import { faConciergeBell, faHandshake, faUserAstronaut, faEnvelope, faHashtag, faCode, faGraduationCap, faRss } from '@fortawesome/pro-light-svg-icons'
import { faLinkedinIn, faStackOverflow, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faGraduationCap, faCode, faUserAstronaut, faConciergeBell, faRss, faHandshake, faEnvelope, faLinkedinIn, faHashtag, faStackOverflow, faCodepen, faGithub)
/* eslint-enable prettier/prettier */

export default {
  async asyncData({ $content, params, query }) {
    const posts = await $content('articles')
      .limit(6)
      .sortBy('date', 'desc')
      .fetch()

    return {
      posts,
    }
  },
}
</script>

<style lang="scss" scoped>
p,
li {
  a {
    text-decoration: none;
  }
}

header {
  text-align: center;
}

.page-title {
  font-weight: 400;
  color: $primary;
  font-family: $font-family-display;
  margin-bottom: 0;

  // b {
  //   font-weight: 500;
  //   color: transparent;
  //   background-clip: text;
  //   -webkit-background-clip: text;
  //   background-image: $rainbow-gradient-dark;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  // }

  i {
    font-style: normal;
    text-transform: uppercase;
  }

  span {
    font-size: 2.4375rem; // 39px
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(
      130deg,
      #f5959d 0%,
      #f5959d 30%,
      #f8f58f 47.5%,
      #5eede1 55%,
      #5ec5ed 62.5%,
      #8c8cf2 75%
    );
    background-repeat: no-repeat;
    background-size: cover;

    @include media-breakpoint-up(sm) {
      font-size: 3.375rem; // 54px
      line-height: 1em;
    }
  }
}
.page-subtitle {
  color: $primary;
  display: inline-block;
  font-weight: 300;
  font-family: $font-family-display;
  font-size: 1.25rem;
  font-style: italic;

  @include media-breakpoint-down(md) {
    font-size: 1.15rem;
    line-height: 1.1em;
  }

  span {
    display: inline-block;
  }

  // b {
  //   display: inline-block;
  //   font-weight: 300;
  // }
}
</style>
