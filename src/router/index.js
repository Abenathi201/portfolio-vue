import { createRouter, createWebHashHistory } from 'vue-router'
import AllViews from '../views/AllViews.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AllViews
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
