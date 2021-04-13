import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtag from "vue-gtag-next";

const host = window.location.hostname

createApp(App)
  .use(store)
  .use(router)
  .use(VueGtag, {
    property: { id: host != 'localhost' ? 'UA-134680170-1' : '' }
  })
.mount('#app')