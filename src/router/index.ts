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
      component: () => import('@/views/wallet/WalletView.vue'),
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: () => import('@/views/withdraw/WithdrawalView.vue'),
      children: [
        {
          path: '',
          component: () =>
            import('@/views/withdraw/steps/WithdrawalDetails.vue'),
        },
        {
          path: 'confirmation',
          component: () =>
            import('@/views/withdraw/steps/WithdrawalConfirmation.vue'),
        },
        {
          path: 'result',
          component: () =>
            import('@/views/withdraw/steps/WithdrawalResult.vue'),
        },
      ],
    },
  ],
})

export default router
