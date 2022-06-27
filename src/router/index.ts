import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('@/views/WalletView.vue'),
    },
    {
      path: '/withdraw',
      component: () => import('@/views/withdraw/WithdrawView.vue'),
      children: [
        {
          path: 'details',
          component: () => import('@/views/withdraw/WithdrawDetails.vue'),
        },
        {
          path: 'confirmation',
          component: () => import('@/views/withdraw/WithdrawConfirmation.vue'),
        },
        {
          path: 'result',
          component: () => import('@/views/withdraw/WithdrawResult.vue'),
        },
      ],
    },
  ],
})

export default router
