<template>
  <main v-if="globals?.name" class="app-container site-content">
    <PageHeader
      :text="`Vue.js + TypeScript`"
      :iconClass="`fal fa-code`"
    ></PageHeader>
    <transition name="fade">
      <div v-if="show">
        <h2>Lorem Ipsum, Dolor Sit Amet</h2>
        <p>A secondary heading is above</p>
        <h3>Lorem Ipsum, Dolor Sit Amet</h3>
        <p>A tertiary heading is above</p>
        <h4>Lorem Ipsum, Dolor Sit Amet</h4>
        <p>A quarternary heading is above</p>
        <h5>Lorem Ipsum, Dolor Sit Amet</h5>
        <p>A fifth-level heading is above</p>
        <h6>Lorem ipsum, dolor sit amet</h6>
        <p>A sixth-level heading is above</p>
        <p>Bulleted list:</p>
        <ul class="circle">
          <li>
            Lorem corporis labore, a repudiandae aliquam commodi ipsam ipsa
            ratione ad iure tempore nostrum excepturi unde dolorum. Nihil,
            consectetur?
          </li>
          <li>A repudiandae aliquam commodi ipsam</li>
          <li>
            Lorem corporis labore, a repudiandae aliquam commodi ipsam ipsa
            ratione ad iure
          </li>
        </ul>
        <p>Numbered list:</p>
        <ol>
          <li>
            Lorem corporis labore, a repudiandae aliquam commodi ipsam ipsa
            ratione ad iure tempore nostrum excepturi unde dolorum. Nihil,
            consectetur?
          </li>
          <li>A repudiandae aliquam commodi ipsam</li>
          <li>
            Lorem corporis labore, a repudiandae aliquam commodi ipsam ipsa
            ratione ad iure
          </li>
        </ol>
        <p>Inline list:</p>
        <ul class="inline">
          <li>
            Lorem corporis labore, a repudiandae aliquam commodi ipsam ipsa
            ratione ad iure tempore nostrum excepturi unde dolorum. Nihil,
            consectetur?
          </li>
          <li>A repudiandae aliquam commodi ipsam</li>
          <li>
            Lorem corporis labore, a repudiandae aliquam commodi ipsam ipsa
            ratione ad iure
          </li>
        </ul>
        <div class="text-center">
          <p>
            For a guide and recipes on how to configure / customize this
            project,<br />
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
              >vue-cli documentation</a
            >.
          </p>
          <h3>Installed CLI Plugins</h3>
          <ul class="inline text-center">
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                target="_blank"
                rel="noopener"
                >babel</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
                target="_blank"
                rel="noopener"
                >router</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
                target="_blank"
                rel="noopener"
                >vuex</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
                target="_blank"
                rel="noopener"
                >eslint</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha"
                target="_blank"
                rel="noopener"
                >unit-mocha</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
                target="_blank"
                rel="noopener"
                >typescript</a
              >
            </li>
          </ul>
          <h3>Essential Links</h3>
          <ul class="inline text-center">
            <li>
              <a href="https://vuejs.org" target="_blank" rel="noopener"
                >Core Docs</a
              >
            </li>
            <li>
              <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
                >Forum</a
              >
            </li>
            <li>
              <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
                >Community Chat</a
              >
            </li>
            <li>
              <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
                >Twitter</a
              >
            </li>
            <li>
              <a href="https://news.vuejs.org" target="_blank" rel="noopener"
                >News</a
              >
            </li>
          </ul>
          <h3>Ecosystem</h3>
          <ul class="inline text-center">
            <li>
              <a href="https://router.vuejs.org" target="_blank" rel="noopener"
                >vue-router</a
              >
            </li>
            <li>
              <a href="https://vuex.vuejs.org" target="_blank" rel="noopener"
                >vuex</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-devtools#vue-devtools"
                target="_blank"
                rel="noopener"
                >vue-devtools</a
              >
            </li>
            <li>
              <a
                href="https://vue-loader.vuejs.org"
                target="_blank"
                rel="noopener"
                >vue-loader</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/awesome-vue"
                target="_blank"
                rel="noopener"
                >awesome-vue</a
              >
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </main>
</template>

<script>
import PageHeader from '@/components/shared/PageHeader.vue'

export default {
  name: 'Docs',
  props: {
    globals: {},
  },
  data() {
    return {
      show: false,
    }
  },
  components: { PageHeader },
  mounted() {
    this.show = true
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.site-content {
  margin-top: 0;
}
</style>
