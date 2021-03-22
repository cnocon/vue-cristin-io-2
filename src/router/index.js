import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'
import Docs from '@/views/Docs.vue'
import Post from '@/views/Post.vue'
import Posts from '@/views/Posts.vue'
import Resume from '@/views/Resume.vue'
// import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'about',
    component: About,
  },
  {
    path: '/docs',
    name: 'docs',
    component: Docs,
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume,
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
  },
  {
    path: '/posts/:slug',
    name: 'post',
    component: Post,
    props: true,
  },
  // {
  //   path: '/:badurl(.*)',
  //   name: 'not-found',
  //   component: NotFound,
  //   props: true,
  // },
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
