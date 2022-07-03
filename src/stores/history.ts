import { defineStore } from 'pinia'
import axios from 'axios'
import { StoreId } from '@/stores/types'
import { FETCH_DATA_TIMEOUT } from '@/utils/consts'
import type { HistoryData } from '@/components/history/types'

export const useHistoryStore = defineStore(StoreId.history, {
  state: () => ({
    isLoading: true,
    historyData: [] as HistoryData[],
  }),
  actions: {
    fetchHistoryData(): void {
      try {
        this.isLoading = true
        const timeout = setTimeout(async () => {
          const { data } = await axios.get('historyDataMock.json')
          if (data) {
            this.historyData = data
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
