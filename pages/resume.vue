<template>
  <div class="resume-page">
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1>Résumé & Courses</h1>
  </div>
</template>

<script>
// import Section from '@/components/Section'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileUser } from '@fortawesome/pro-duotone-svg-icons'

library.add(faFileUser)

export default {
  components: {
    // Section,
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Résumé & Courses',
          href: null,
        },
      ],
    }
  },
}
</script>
