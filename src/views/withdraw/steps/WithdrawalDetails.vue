<script setup lang="ts">
import { useWalletStore } from '@/stores/wallet'
import { storeToRefs } from 'pinia'
import { useStorage } from '@vueuse/core'
import WithdrawalCoinInfo from '@/components/withdrawal/WithdrawalCoinInfo.vue'
import WithdrawalForm from '@/components/withdrawal/WithdrawalForm.vue'

const walletStore = useWalletStore()
const { walletCoin } = storeToRefs(walletStore)

const coin = useStorage('coin', walletCoin)
</script>

<template>
  <withdrawal-coin-info :coin="coin" />
  <withdrawal-form :coin="coin" class="max-w-screen-xl w-2/4 mx-auto" />
</template>
