<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useWalletStore } from '@/stores/wallet'
import AppPageTitle from '@/components/app/AppPageTitle.vue'
import WithdrawalList from '@/components/withdrawal/WithdrawalList.vue'
import WithdrawalCoinInfo from '@/components/withdrawal/withdrawalCoinInfo.vue'
import { useStorage } from '@vueuse/core'
import WithdrawalForm from '@/components/withdrawal/WithdrawalForm.vue'

onBeforeMount((): void => {
  walletStore.fetchWalletData()
})

const walletStore = useWalletStore()
const { walletCoin, walletData } = storeToRefs(walletStore)

const coin = useStorage('coin', walletCoin)
</script>

<template>
  <section class="main-container">
    <app-page-title>Withdraw Crypto</app-page-title>

    <div class="flex gap-8">
      <aside class="w-3/12 border py-6">
        <withdrawal-list :wallet-coins="walletData" />
      </aside>

      <section class="flex-1 border p-6">
        <withdrawal-coin-info :coin="coin" />

        <div class="flex flex-col items-center">
          <withdrawal-form />
        </div>
      </section>
    </div>
  </section>
</template>
