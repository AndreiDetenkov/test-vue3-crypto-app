import { defineStore } from 'pinia'
import type { WithdrawFormData } from '@/components/withdrawal/types'
import { StoreId } from '@/stores/types'

interface WithdrawState {
  withdrawDetails: WithdrawFormData
}

export const useWithdrawStore = defineStore(StoreId.withdraw, {
  state: (): WithdrawState => ({
    withdrawDetails: {} as WithdrawFormData,
  }),
  actions: {
    setWithdrawDetails(payload: WithdrawFormData): void {
      this.withdrawDetails = { ...payload }
    },
  },
})
