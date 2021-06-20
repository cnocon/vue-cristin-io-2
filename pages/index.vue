<template>
  <div class="index-page">
    <Head title="Home" />
    <header class="text-center">
      <h1 class="page-title">I&nbsp;L<span>&#9825;</span>VE&nbsp;CODE</h1>
    </header>
    <main>
      <Section
        header-icon-type="fal"
        header-icon="user-astronaut"
        header-text="A Little About Me"
      >
        <RotatingHeader />
      </Section>

      <LazySection
        header-icon-type="fal"
        header-icon="concierge-bell"
        header-text="Services"
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
            <quote classes="subtle">
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
      </LazySection>

      <LazySection
        v-if="posts"
        header-icon-type="fal"
        header-icon="rss"
        header-text="Latest Blog Posts"
      >
        <LazyPostList
          :posts="posts"
          column-classes="post-preview-container col-12 col-md-6 col-xl-4"
        ></LazyPostList>
      </LazySection>

      <LazySection
        header-icon-type="fal"
        header-icon="handshake"
        header-text="Connect"
      >
        <LazyConnect />
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
  head: {
    link: [
      {
        rel: 'preload',
        type: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap',
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
.index-page {
  @include media-breakpoint-up(md) {
    margin-top: 3rem;
  }
  @include media-breakpoint-up(lg) {
    margin-top: 4rem;
  }
}
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
  margin-bottom: 0;
  color: $black;
  font-weight: 200;
  font-family: $font-family-display;
  letter-spacing: 6px;

  @include media-breakpoint-up(md) {
    font-size: 48px;
  }

  span {
    font-size: 1.75rem; // 28px
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: $rainbow-text-angled-dark;
    background-repeat: no-repeat;
    background-size: cover;
    line-height: inherit;

    @include media-breakpoint-xxs-down {
      font-size: 1.75rem; // 28px
    }

    @include media-breakpoint-up(sm) {
      font-size: 2.25rem; // 36px
    }

    @include media-breakpoint-up(md) {
      font-size: 3.125rem; // 50px
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
