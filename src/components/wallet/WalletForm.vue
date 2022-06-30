<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useWalletStore } from '@/stores/wallet'
import type { WalletData } from '@/components/wallet/types'
import WalletTable from '@/components/wallet/WalletTable.vue'

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
  <form @submit.prevent>
    <input
      v-model="search"
      placeholder="Search Coin"
      type="text"
      class="search-input"
    />

    <wallet-table :table-items="filteredWalletData" />
  </form>
</template>

<style scoped lang="scss">
.search-input {
  @apply form-input w-full md:w-2/6 xl:w-1/6 border border-gray-200 rounded my-4;
}
</style>
