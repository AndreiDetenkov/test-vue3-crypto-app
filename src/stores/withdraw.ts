import { defineStore } from 'pinia'
import type { WithdrawFormData } from '@/components/withdrawal/types'
import { StoreId } from '@/stores/types'

interface WithdrawState {
  formData: WithdrawFormData
}

export const useWithdrawStore = defineStore(StoreId.withdraw, {
  state: (): WithdrawState => ({
    formData: {} as WithdrawFormData,
  }),
  actions: {},
})
