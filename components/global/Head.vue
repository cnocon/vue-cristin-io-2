<template>
  <span v-if="false" />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: `Cristin O'Connor, Frontend Software Engineer | CRISTIN.IO`,
    },
    description: {
      type: String,
      default: `Cristin O'Connor is a Software Engineer specializing in the Front End, including JavaScript, SSR, SPA, and SSG frameworks, responsive web design, UI/UX, and web performance. Find her portfolio, résumé, and blog her on cristin.io.`,
    },
    image: {
      type: String,
      default: `https://cristin.io/sharing/codehands.jpg`,
    },
    imageAlt: {
      type: String,
      default: `Sharing knowledge is an important part of software engineering`,
    },
    ogType: {
      type: String,
      default: `website`,
    },
    shareImgWidth: {
      type: String,
      default: '1200',
    },
    shareImgHeight: {
      type: String,
      default: '627',
    },
  },
  head() {
    return {
      title: `${this.title} | Cristin O'Connor`,
      titleTemplate: `${this.title} | Cristin O'Connor`,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.title} | Cristin O'Connor`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.imageAlt,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.title} | Cristin O'Connor`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.imageAlt,
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: '@cnocon',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://cristin.io${this.$route.path}`,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'cristin.io',
        },
        {
          hid: 'og:image:width',
          propety: 'og:image:width',
          content: this.shareImgWidth,
        },
        {
          hid: 'og:image:height',
          propety: 'og:image:height',
          content: this.shareImgHeight,
        },
      ],
    }
  },
}
</script>
