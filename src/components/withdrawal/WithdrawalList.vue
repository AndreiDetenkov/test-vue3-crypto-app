<script setup lang="ts">
import type { WalletData } from '@/components/wallet/types'
import useCoin from '@/composables/useCoin'
import { COIN_ICONS_PATH } from '@/utils/consts'
import { computed } from 'vue'
import { NOT_AVAILABLE_VALUE } from '@/components/withdrawal/utils'

const props = defineProps<{
  walletCoins: WalletData[]
}>()

const { setCoin } = useCoin()

const availableCoins = computed<WalletData[]>(() => {
  return props.walletCoins.filter(
    (item) => item.available !== NOT_AVAILABLE_VALUE
  )
})
</script>

<template>
  <div
    v-for="data in availableCoins"
    :key="data.id"
    class="flex items-center hover:bg-gray-100 hover:cursor-pointer px-6 py-4"
    @click="setCoin(data)"
  >
    <img
      :src="`${COIN_ICONS_PATH}/${data.icon}`"
      alt="coin icon"
      class="w-8 h-8"
    />
    <div class="pl-4">
      <span class="font-bold uppercase">{{ data.short }}</span> |
      <span>{{ data.title }}</span>
      <div class="font-medium text-gray-500 text-sm">
        Total: <span>{{ data.total }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
