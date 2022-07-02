import { defineStore } from 'pinia'
import axios from 'axios'
import type { WalletData } from '@/components/wallet/types'
import { StoreId } from '@/stores/types'

interface WalletState {
  walletData: WalletData[]
  walletCoin: WalletData
}

export const useWalletStore = defineStore(StoreId.wallet, {
  state: () =>
    <WalletState>{
      walletData: [] as WalletData[],
      walletCoin: {} as WalletData,
    },
  actions: {
    async fetchWalletData(): Promise<void> {
      try {
        const { data } = await axios.get('walletDataMock.json')
        if (data) this.walletData = data
      } catch (err) {
        throw new Error()
      }
    },
    setWalletCoin(coin: WalletData): void {
      this.walletCoin = coin
    },
  },
})
