import { defineStore } from 'pinia'
import type {
  ConfirmFormData,
  WithdrawDetails,
} from '@/components/withdrawal/types'
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
    async sendWithdrawalData(formData: ConfirmFormData): Promise<boolean> {
      // const payload = {
      //   withdrawDetails: this.withdrawDetails,
      //   withdrawConfirmDetails: formData,
      // }
      // const result = await axios.post('/serverUrl', payload)

      return true
    },
  },
})
