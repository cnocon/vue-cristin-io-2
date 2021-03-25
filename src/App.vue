<template>
  <Header :globals="globals"></Header>
  <div v-if="globals?.name" class="app-container">
    <router-view :globals="globals" :key="$route.fullPath"></router-view>
  </div>
  <Footer :globals="globals"></Footer>
</template>

<script>
import JSONBinService from '@/services/JSONBinService'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      globals: {},
    }
  },
  created() {
    JSONBinService.getGlobals().then((res) => {
      console.log(res.data)
      this.globals = res.data
    })
  },
}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_grid.scss';
@import '@/scss/theme';
</style>
