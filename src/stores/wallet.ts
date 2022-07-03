import { defineStore } from 'pinia'
import axios from 'axios'
import type { WalletData } from '@/components/wallet/types'
import { StoreId } from '@/stores/types'
import { FETCH_WALLET_DATA_TIMEOUT } from '@/utils/consts'

export const useWalletStore = defineStore(StoreId.wallet, {
  state: () => ({
    isLoading: true,
    walletData: [] as WalletData[],
    walletCoin: {} as WalletData,
  }),
  actions: {
    fetchWalletData(): void {
      try {
        this.isLoading = true
        const timeout = setTimeout(async () => {
          const { data } = await axios.get('walletDataMock.json')
          if (data) {
            this.walletData = data
            clearTimeout(timeout)
            this.isLoading = false
          }
        }, FETCH_WALLET_DATA_TIMEOUT)
      } catch (err) {
        throw new Error()
      }
    },
    setWalletCoin(coin: WalletData): void {
      this.walletCoin = coin
    },
  },
})
