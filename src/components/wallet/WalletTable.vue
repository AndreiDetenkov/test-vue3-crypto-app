<script setup lang="ts">
import { web_route } from '@/utils/webConfig'
import type { WalletData } from '@/components/wallet/types'

const tableHeaders: string[] = [
  'Coin',
  'Total',
  'Available',
  'BTC Value',
  'Action',
]

defineProps<{
  walletData: WalletData[]
}>()
</script>

<template>
  <table class="w-full table-fixed border border-collapse">
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
      <tr v-for="item in walletData" :key="item.id" class="border-b h-16">
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
          <router-link :to="web_route.withdraw" class="text-accent font-medium"
            >Withdraw</router-link
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss"></style>
