<script setup lang="ts">
import { useWalletStore } from '@/stores/wallet'
import { onMounted } from 'vue'
import WalletTable from '@/components/wallet/WalletTable.vue'
import AppPageTitle from '@/components/app/AppPageTitle.vue'
import UserBalance from '@/components/user/UserBalance.vue'

const walletStore = useWalletStore()

onMounted(() => {
  walletStore.fetchWalletData()
})
</script>

<template>
  <div class="main-container">
    <app-page-title>Wallet Overview</app-page-title>
    <user-balance />
    <hr />
    <wallet-table />
  </div>
</template>
