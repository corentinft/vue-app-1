import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/questionary',
    name: 'Questionary',
    component: () => import(/* webpackChunkName: "about" */ '../views/Questionary.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/Congratulation.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
