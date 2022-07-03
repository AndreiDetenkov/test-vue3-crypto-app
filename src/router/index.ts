import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
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
          component: () => import('@/views/withdraw/WithdrawalDetails.vue'),
        },
        {
          path: 'confirmation',
          component: () =>
            import('@/views/withdraw/WithdrawalConfirmation.vue'),
        },
      ],
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('@/views/history/HistoryView.vue'),
    },
  ],
})

export default router
