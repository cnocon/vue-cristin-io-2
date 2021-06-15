<template>
  <div>
    <Head />
    <header class="text-center">
      <h1 class="page-title">
        I&nbsp;&nbsp;L<span class="smaller">&#9825;</span>VE&nbsp;&nbsp;CODE.
      </h1>
      <!-- <h1 class="page-title">
        I&nbsp;&nbsp;L<span class="smaller">&#9825;</span
        >VE&nbsp;&nbsp;C<span>&#9829;</span>DE.
      </h1> -->
      <!-- <p class="page-subtitle">
        so I write it, teach it, and endeavor to learn more.
      </p> -->
    </header>
    <main>
      <Section
        header-icon-type="fal"
        header-icon="user-astronaut"
        header-text="A Little About Me"
        header-alignment="left"
        header-classes=""
      >
        <RotatingHeader />
      </Section>

      <Section
        header-icon-type="fal"
        header-icon="concierge-bell"
        header-text="Services"
        header-alignment="left"
      >
        <div class="row services-row d-flex align-items-center">
          <div class="col-12 col-sm-6 col-lg-3 text-center">
            <h4>WEB DEVELOPMENT</h4>
            <p>
              This is my primary area of expertise after 10+ years in the field.
              <a href="mailto:her@cristin.io">Contact me</a> about web
              development.
            </p>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 text-center">
            <h4>CODE TUTORING</h4>
            <p>
              I focus on teaching with compassion and work with all ages.
              <a href="mailto:her@cristin.io">Contact me</a> about mentoring or
              tutoring.
            </p>
          </div>
          <div class="col-12 col-lg-6 quote-container">
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
          classes="mt-5"
          column-classes="post-preview-container col-12 col-md-6 col-xl-4 mb-5"
        ></LazyPostList>
      </Section>

      <Section
        header-icon-type="fal"
        header-icon="handshake"
        header-text="Connect"
        header-alignment="left"
      >
        <ul class="list-style-none row mt-5">
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
  font-weight: 300;
  color: $primary;
  font-family: $font-family-display;
  margin-bottom: 0;

  @include media-breakpoint-up(md) {
    margin-top: 3rem;
  }

  @include media-breakpoint-up(lg) {
    margin-top: 4rem;
  }

  span {
    // font-size: 2.625rem; // 42px
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
    margin-left: -3px;
    margin-right: -1px;
    line-height: inherit;

    &.smaller {
      margin-left: 0;
      margin-right: 0;

      @include media-breakpoint-xxs-down {
        font-size: 1.6428571429rem; // 23px
      }

      @include media-breakpoint-up(sm) {
        font-size: 2rem; // 32px
      }

      @include media-breakpoint-up(md) {
        font-size: 2.1875rem; // 35px
      }

      @include media-breakpoint-up(lg) {
        font-size: 2.625rem; // 42px
      }
    }
  }
}
.page-subtitle {
  color: $primary;
  display: inline-block;
  font-weight: 300;
  font-family: $font-family-display;
  font-size: 1.15rem;
  line-height: 1.1em;
  font-style: italic;
  margin-bottom: 0;

  @include media-breakpoint-up(sm) {
    font-size: 1.25rem;
  }

  @include media-breakpoint-up(md) {
    margin-bottom: 1.25rem;
  }

  span {
    display: inline-block;
  }
}

.services-row {
  .quote-container {
    margin-top: 3rem;

    @include media-breakpoint-up(lg) {
      margin-top: 0;
    }
  }
}
</style>
