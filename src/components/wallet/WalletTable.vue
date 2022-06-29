<script setup lang="ts">
import { web_route } from '@/utils/webConfig'
import type { WalletData } from '@/components/wallet/types'
import { computed, ref } from 'vue'
import { useWalletStore } from '@/stores/wallet'
import { storeToRefs } from 'pinia'

const tableHeaders: string[] = [
  'Coin',
  'Total',
  'Available',
  'BTC Value',
  'Action',
]

const walletStore = useWalletStore()
const { walletData } = storeToRefs(walletStore)

const search = ref<string>('')
const localData = ref(walletData)

const filteredWalletData = computed<WalletData[]>(() => {
  return localData.value.filter((item) =>
    item.title.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <hr />

  <form @submit.prevent>
    <input
      v-model="search"
      placeholder="Search Coin"
      type="text"
      class="form-input w-full md:w-2/6 xl:w-1/6 border border-gray-200 rounded my-4"
    />

    <table class="w-full table-fixed border-collapse">
      <thead class="bg-gray-100">
        <tr class="h-11">
          <th
            v-for="header in tableHeaders"
            :key="header"
            class="text-left text-sm text-gray-500 font-medium first:pl-4"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in filteredWalletData"
          :key="item.id"
          class="border-b h-16 hover:bg-gray-100"
        >
          <td class="h-16 px-4 flex items-center">
            <img
              :src="`src/assets/icons/${item.icon}`"
              alt="cryptocurrency icon"
              class="w-8 h-8"
            />
            <div class="flex flex-col pl-4">
              <span class="font-bold uppercase">{{ item.short }}</span>
              <span class="text-sm text-gray-500">{{ item.title }}</span>
            </div>
          </td>
          <td>{{ item.total }}</td>
          <td>{{ item.available }}</td>
          <td class="">
            <div>{{ item.btcValue }}</div>
            <div v-if="item.usdValue > 0" class="text-sm text-gray-500">
              ≈ ${{ item.usdValue }}
            </div>
          </td>
          <td>
            <router-link
              :to="web_route.withdraw"
              class="text-accent font-medium"
              >Withdraw</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<style scoped lang="scss"></style>
