import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/ui/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        meta: { title: 'Página Inicial' },
        component: () => import('@/ui/views/Home.vue')
      },
      {
        path: 'sobre-nos',
        name: 'about',
        meta: { title: 'Sobre Nós' },
        component: () => import('@/ui/views/About.vue')
      },
      {
        path: 'galeria',
        name: 'gallery',
        meta: { title: 'Galeria' },
        component: () => import('@/ui/views/Gallery.vue')
      },
      {
        path: 'contagem-regressiva',
        name: 'count_regressive',
        meta: { title: 'Contagem Regressiva' },
        component: () => import('@/ui/views/Regressive.vue')
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  linkExactActiveClass: 'text-[--color-primary]'
})

router.beforeEach((to, from, next) => {
  const defaultTitle  = 'Meu Site';
  document.title      = to.meta.title || defaultTitle;
  next();
});

export default router
