<template>
  <div>
    <Head />
    <header class="text-center">
      <h1 class="page-title">
        I&nbsp;&nbsp;L<span>&#9829;</span>VE&nbsp;&nbsp;CODE.
      </h1>
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
            <quote classes="subtle rounded-lg pr-5">
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

      <LazySection
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
      </LazySection>

      <LazySection
        header-icon-type="fal"
        header-icon="handshake"
        header-text="Connect"
        header-alignment="left"
      >
        <LazyConnect></LazyConnect>
      </LazySection>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, query }) {
    const posts = await $content('articles')
      .limit(3)
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
    font-size: 2.625rem; // 42px
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

    @include media-breakpoint-xxs-down {
      font-size: 2.375rem; // 38px
    }

    @include media-breakpoint-up(sm) {
      font-size: 2.75rem; // 44px
    }

    @include media-breakpoint-up(md) {
      font-size: 3rem; // 48px
    }

    @include media-breakpoint-up(lg) {
      font-size: 3.5rem; // 56px
    }
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
