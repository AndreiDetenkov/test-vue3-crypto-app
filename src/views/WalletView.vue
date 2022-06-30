<script setup lang="ts">
import { useWalletStore } from '@/stores/wallet'
import { onMounted } from 'vue'
import WalletForm from '@/components/wallet/WalletForm.vue'
import AppPageTitle from '@/components/app/AppPageTitle.vue'
import UserBalance from '@/components/user/UserBalance.vue'

const walletStore = useWalletStore()

onMounted((): void => {
  walletStore.fetchWalletData()
})
</script>

<template>
  <div class="main-container">
    <app-page-title>Wallet Overview</app-page-title>
    <user-balance />
    <hr />
    <wallet-form />
  </div>
</template>
