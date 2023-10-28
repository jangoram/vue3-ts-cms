import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: 'home',
      component: () => import('../views/home/home.vue')
    },
    {
      path: 'login',
      component: () => import('../views/login/login.vue')
    }
  ]
})
