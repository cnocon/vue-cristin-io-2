<template>
  <div class="index-page">
    <Head
      title="Home"
      share-img-width="1200"
      share-img-height="627"
      og-type="website"
      image="https://cristin.io/sharing/codehands.jpg"
      image-alt="Cristin O'Connor shares her software engineering knowledge and experience"
      description="Front end blog, portfolio, and résumé website for experienced software engineer, Cristin O'Connor."
    ></Head>
    <main>
      <RotatingHeader />
      <Section
        header-icon-type="fal"
        header-icon="concierge-bell"
        header-text="Services"
      >
        <div class="row services-row">
          <div class="col-12 col-md-4 service-offered">
            <h3>Web Development</h3>
            <p>
              This is my primary area of expertise after 10+ years in the field.
            </p>
            <b-button
              variant="primary"
              href="mailto:her@cristin.io?subject=Web Development Inquiry"
            >
              <font-awesome-icon :icon="['fal', 'envelope']"></font-awesome-icon
              >&nbsp;Web Development</b-button
            >.
          </div>
          <div class="col-12 col-md-4 service-offered">
            <h3>Mentorship & Interview Prep</h3>
            <p>
              I can help you achieve your career goals and prepare you for job
              interviews.
            </p>
            <b-button
              href="mailto:her@cristin.io?subject=Mentorship and/or Interview Help Inquiry"
              variant="primary"
            >
              <font-awesome-icon :icon="['fal', 'envelope']"></font-awesome-icon
              >&nbsp;Mentorship and Interview Help</b-button
            >.
          </div>
          <div class="col-12 col-md-4 service-offered">
            <h3>Programming Tutor</h3>
            <p>I focus on teaching with compassion and work with all ages.</p>
            <b-button
              variant="primary"
              href="mailto:her@cristin.io?subject=Programming Tutor Inquiry"
            >
              <font-awesome-icon :icon="['fal', 'envelope']"></font-awesome-icon
              >&nbsp;Tutoring</b-button
            >
          </div>
          <!--<div class="col-12 quote-container">
            <Quote classes="subtle quote-right">
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
            </Quote>
          </div>-->
        </div>
      </Section>

      <LazySection
        v-if="posts"
        header-icon-type="fal"
        header-icon="rss"
        header-text="Latest Blog Posts"
      >
        <LazyPostList
          :posts="posts"
          column-classes="col-12 col-md-6 col-lg-4"
        ></LazyPostList>
      </LazySection>
    </main>

    <LazySection
      header-icon-type="fal"
      header-icon="handshake"
      header-text="Connect"
    >
      <LazyConnect />
    </LazySection>
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
.index-page {
  margin-top: 2rem;

  @include media-breakpoint-up(md) {
    margin-top: 3rem;
  }
  @include media-breakpoint-up(lg) {
    margin-top: 4rem;
  }

  .header {
    padding: 2.5rem 0;

    @include media-breakpoint-down(md) {
      margin: 2.5rem auto;
    }
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
  letter-spacing: 4px;
  font-size: 42px;
  text-transform: lowercase;

  @include media-breakpoint-up(md) {
    letter-spacing: 6px;
    font-size: 48px;
    text-transform: uppercase;
  }

  span {
    font-size: 1.75rem;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: $rainbow-text-angled-dark;
    background-repeat: no-repeat;
    background-size: cover;
    line-height: inherit;

    @include media-breakpoint-xxs-up {
      font-size: 2rem; // 32px
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
  display: flex;
  align-items: flex-start;

  .quote-container {
    margin-top: 3rem;
    width: 100%;
    max-width: none;

    .quote {
      max-width: 1140px;
      border: 0;
    }
  }

  .service-offered {
    text-align: center;

    > * {
      max-width: 30.8125rem;
    }

    h3 {
      // font-family: $font-family-base;
      // text-transform: uppercase;
      font-family: $font-family-display;
      font-weight: 400;
      font-size: calc(1.275rem + 0.3vw);

      @media (min-width: 1200px) {
        font-size: 1.5rem;
      }
    }

    &:first-of-type {
      @include media-breakpoint-down(sm) {
        // margin-bottom: 2rem;
      }
    }
  }
}
</style>
