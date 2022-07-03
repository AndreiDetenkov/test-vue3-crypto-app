import { defineStore } from 'pinia'
import { StoreId } from '@/stores/types'
import axios from 'axios'
import { FETCH_DATA_TIMEOUT } from '@/utils/consts'

export const useMarketStore = defineStore(StoreId.market, {
  state: () => ({
    markets: [],
    isLoading: false,
  }),
  actions: {
    async fetchMarkets(): Promise<void> {
      try {
        this.isLoading = true
        const timeout = setTimeout(async () => {
          const { data } = await axios.get('markets.json')
          if (data) {
            this.markets = data
            clearTimeout(timeout)
            this.isLoading = false
          }
        }, FETCH_DATA_TIMEOUT)
      } catch (err) {
        throw new Error()
      }
    },
  },
})
