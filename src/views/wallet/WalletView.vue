<script setup lang="ts">
import { useWalletStore } from '@/stores/wallet'
import { onBeforeMount } from 'vue'
import WalletForm from '@/components/wallet/WalletForm.vue'
import AppPageTitle from '@/components/app/AppPageTitle.vue'
import UserBalance from '@/components/user/UserBalance.vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const walletStore = useWalletStore()
onBeforeMount((): void => {
  walletStore.fetchWalletData()
})

const userStore = useUserStore()
const { userData } = storeToRefs(userStore)
</script>

<template>
  <section class="main-container">
    <app-page-title>Wallet Overview</app-page-title>
    <user-balance :user-data="userData" />
    <hr />
    <wallet-form />
  </section>
</template>
