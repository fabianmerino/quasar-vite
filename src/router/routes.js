import MainLayout from '../layouts/MainLayout.vue'
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: () => import('../pages/Index.vue'),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  // {
  //   path: '/login',
  //   component: () => import('pages/Login.vue'),
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/Error404.vue'),
  },
]

export default routes
