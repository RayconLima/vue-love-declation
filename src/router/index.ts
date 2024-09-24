import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/ui/layouts/Default.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/ui/views/Home.vue')
        },
        {
          path: 'sobre-nos',
          name: 'about',
          component: () => import('@/ui/views/About.vue')
        },
        {
          path: 'galeria',
          name: 'gallery',
          component: () => import('@/ui/views/Gallery.vue')
        },
        {
          path: 'contagem-regressiva',
          name: 'count_regressive',
          component: () => import('@/ui/views/Regressive.vue')
        }
      ]
    },
  ]
})

export default router
