/* eslint-disable no-unused-vars */
<template>
  <Header v-if="globals" :globals="globals"></Header>
  <div class="app-container">
    <div v-if="errorMsg">{{ errorMsg }}</div>
    <router-view :globals="globals" :key="$route.fullPath"></router-view>
  </div>
  <Footer v-if="globals" :globals="globals"></Footer>
</template>

<script>
import globals from '@/data/globals'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  setup() {
    const errorMsg = globals ? null : 'There was a problem loading data into the application store.'

    return {
      globals,
      errorMsg,
    }
  },
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_grid.scss';
@import '@/scss/theme';
</style>
