<script setup lang="ts">
import { useWalletStore } from '@/stores/wallet'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import WalletTable from '@/components/wallet/WalletTable.vue'

const walletStore = useWalletStore()
const { walletData } = storeToRefs(walletStore)

onMounted(() => {
  walletStore.fetchWalletData()
})
</script>

<template>
  <div class="main-container">
    <h1>Wallet Overview</h1>

    <div>
      <span>Estimated Balance</span>
      <p>0.00172543 BTC <span>≈ $35.01</span></p>
    </div>

    <wallet-table :wallet-data="walletData" />
  </div>
</template>

<style scoped lang="scss"></style>
