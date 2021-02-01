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
    component: () => import(/* webpackChunkName: "questionary" */ '../views/Questionary.vue')
  },
  {
    path: '/congratulation',
    name: 'congratulation',
    component: () => import(/* webpackChunkName: "congratulation" */ '../views/Congratulation.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
