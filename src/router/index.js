import { createRouter, createWebHashHistory } from 'vue-router'
import AllViews from '../views/AllViews.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AllViews
  },
  {
    path: '/about',
    name: 'about',
    component: AllViews
  },
  {
    path: '/projects',
    name: 'projects',
    component: AllViews
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: AllViews
  },
  {
    path: '/contact',
    name: 'contact',
    component: AllViews
  }, 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
})

export default router