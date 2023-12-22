import { RouteRecordRaw, createRouter, createWebHistory  } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'Design',
    path: '/',
    component: () => import('../pages/design/index.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
