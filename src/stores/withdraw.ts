import { defineStore } from 'pinia'
import type { WithdrawDetails } from '@/components/withdrawal/types'
import { StoreId } from '@/stores/types'

interface WithdrawState {
  withdrawDetails: WithdrawDetails
}

export const useWithdrawStore = defineStore(StoreId.withdraw, {
  state: (): WithdrawState => ({
    withdrawDetails: {} as WithdrawDetails,
  }),
  actions: {
    setWithdrawDetails(payload: WithdrawDetails): void {
      this.withdrawDetails = { ...payload }
    },
  },
})
