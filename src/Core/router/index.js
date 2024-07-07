import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/Main/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, {
      path: '/forecast',
      name: 'forecast',
      component: () => import('@/Weather/views/ForecastView.vue')
    }, {
      path: '/search',
      name: 'search',
      component: () => import('@/Weather/views/SearchView.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('/views/AboutView.vue')
    // }
  ]
})

export default router
