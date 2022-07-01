<script setup lang="ts">
import { useWalletStore } from '@/stores/wallet'
import { storeToRefs } from 'pinia'

const walletStore = useWalletStore()
const { walletCoin } = storeToRefs(walletStore)
</script>

<template>
  <div class="mt-2 flex">
    <div class="flex flex-col w-1/2 text-sm">
      <span class="text-gray-500 font-medium mb-1">Network fee</span>
      <span class="font-bold text-gray-600">
        {{ walletCoin.fee }}
        <span class="uppercase font-bold">{{ walletCoin.short }}</span>
      </span>
    </div>
    <div class="flex flex-col w-1/2 text-sm">
      <span class="text-gray-500 font-medium mb-1"> Minimum withdrawal </span>
      <span class="font-bold text-gray-600">
        {{ walletCoin.minimalWithdraw }}
        <span class="uppercase font-bold">{{ walletCoin.short }}</span>
      </span>
    </div>
  </div>
</template>
