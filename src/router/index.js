import { createRouter, createWebHistory } from 'vue-router'
import SearchView from "@/views/SearchView.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchView
    },
    {
      path: '/video/:videoId',
      name: 'video',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VideoView.vue')
    }
  ]
})

export default router
