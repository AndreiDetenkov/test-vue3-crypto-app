<script setup lang="ts">
import { COIN_ICONS_PATH } from '@/utils/consts'
import type { WalletData } from '@/components/wallet/types'

defineProps<{
  coin: WalletData
}>()
</script>

<template>
  <div class="flex items-center justify-between bg-gray-100 px-8 py-4 mb-12">
    <div class="flex items-center">
      <img
        :src="`${COIN_ICONS_PATH}/${coin.icon}`"
        alt="coin icon"
        class="w-8 h-8"
      />
      <span class="pl-4 text-2xl font-bold">
        {{ coin.title }}
      </span>
    </div>
    <div class="text-gray-500 font-medium">
      Available balance: {{ coin.available }}
      <span class="uppercase font-medium">{{ coin.short }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
