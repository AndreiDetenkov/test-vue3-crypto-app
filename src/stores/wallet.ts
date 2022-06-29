import { defineStore } from 'pinia'
import axios from 'axios'
import type { WalletData } from '@/components/wallet/types'

interface RootState {
  walletData: WalletData[]
}

export const useWalletStore = defineStore('wallet', {
  state: (): RootState => ({
    walletData: [],
  }),
  actions: {
    async fetchWalletData(): Promise<void> {
      try {
        const { data } = await axios.get('src/api/wallet.json')
        if (data) this.walletData = data
      } catch (error) {
        throw new Error()
      }
    },
  },
})
