<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useWalletStore } from '@/stores/wallet'
import { useUserStore } from '@/stores/user'
import WalletForm from '@/components/wallet/WalletForm.vue'
import AppPageTitle from '@/components/app/AppPageTitle.vue'
import UserBalance from '@/components/user/UserBalance.vue'
import AppLoader from '@/components/app/AppLoader.vue'

const walletStore = useWalletStore()
const { isLoading } = storeToRefs(walletStore)
onBeforeMount((): void => {
  walletStore.fetchWalletData()
})

const userStore = useUserStore()
const { userData } = storeToRefs(userStore)
</script>

<template>
  <app-loader v-if="isLoading" />

  <section v-else class="main-container">
    <app-page-title>Wallet Overview</app-page-title>
    <user-balance :user-data="userData" />
    <hr />
    <wallet-form />
  </section>
</template>
