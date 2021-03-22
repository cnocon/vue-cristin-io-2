import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'
import Docs from '@/views/Docs.vue'
import Resume from '@/views/Resume.vue'

const routes = [
  {
    path: '/',
    name: 'About',
    component: About,
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
