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
    fetchWalletData(): void {
      try {
        setTimeout(async () => {
          const { data } = await axios.get('src/api/wallet.json')
          if (data) this.walletData = data
        }, 500)
      } catch (error) {
        throw new Error()
      }
    },
  },
})
