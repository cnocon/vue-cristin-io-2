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
import useSWRV from 'swrv'
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  setup() {
    // eslint-disable-next-line no-unused-vars
    const configOptions = {
      cache: new LocalStorageCache(),
      shouldRetryOnError: false,
    }

    const { data: globalsProxy, error: globalsError } = useSWRV(
      () => `https://api.jsonbin.io/b/60539405683e7e079c53e83d/latest`,
      // eslint-disable-next-line no-unused-vars
      (key, undefined, configOptions) => // eslint-disable-line no-shadow-restricted-names
        fetch(key, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'secret-key':
              '$2b$10$RDgNaGrlmzTiv0suilVmIeZ9Skhm5/rv3bd4GvW6ShS6t33dvWbaW',
          },
        })
          .then((res) => res.json())
          .then((json) => ({ ...json, url: key }))
    )

    // if (globalsError.message) {
    //   console.log(globalsError)
    // }
    const errorMsg = globalsError.message
    const copy = Object.assign({}, globalsProxy.value)
    const profiles = Object.assign({}, copy.profiles)
    delete copy.profiles
    copy.profiles = JSON.parse(JSON.stringify(profiles))
    const globals = copy

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
