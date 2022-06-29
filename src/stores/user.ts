import { defineStore } from 'pinia'
import axios from 'axios'
import type { UserData } from '@/components/user/types'

interface UserState {
  userData: UserData
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userData: {} as UserData,
  }),
  actions: {
    async fetchUserData(): Promise<void> {
      try {
        const { data } = await axios.get('src/api/userDataMock.json')
        if (data) this.userData = data
      } catch (error) {
        throw new Error()
      }
    },
  },
})
