<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useWalletStore } from '@/stores/wallet'
import AppPageTitle from '@/components/app/AppPageTitle.vue'
import WithdrawalList from '@/components/withdrawal/WithdrawalList.vue'

onBeforeMount((): void => {
  walletStore.fetchWalletData()
})

const walletStore = useWalletStore()
const { walletData } = storeToRefs(walletStore)
</script>

<template>
  <section class="main-container">
    <app-page-title>Withdraw Crypto</app-page-title>

    <div class="flex gap-8">
      <aside class="w-3/12 border py-6">
        <withdrawal-list :wallet-coins="walletData" />
      </aside>

      <section class="flex-1 border p-6">
        <router-view />
      </section>
    </div>
  </section>
</template>
