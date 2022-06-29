import { defineStore } from 'pinia'
import axios from 'axios'
import type { WalletData } from '@/components/wallet/types'

interface RootState {
  walletData: WalletData[]
}

export const useWalletStore = defineStore('wallet', {
  state: (): RootState => ({
    walletData: [] as WalletData[],
  }),
  actions: {
    async fetchWalletData(): Promise<void> {
      try {
        const { data } = await axios.get('src/api/walletDataMock.json')
        if (data) this.walletData = data
      } catch (error) {
        throw new Error()
      }
    },
  },
})
