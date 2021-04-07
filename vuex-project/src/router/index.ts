import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import OCounter from '../views/OCounter.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Options Counter',
    component: OCounter
  },
  {
    path: '/composition',
    name: 'Composition Counter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CCounter.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
