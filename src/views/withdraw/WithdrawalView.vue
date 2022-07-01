<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useWalletStore } from '@/stores/wallet'
import AppPageTitle from '@/components/app/AppPageTitle.vue'
import WithdrawalList from '@/components/withdrawal/WithdrawalList.vue'
import WithdrawalCoinInfo from '@/components/withdrawal/withdrawalCoinInfo.vue'
import { useStorage } from '@vueuse/core'

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

        <div class="flex justify-center">
          <form @submit.prevent class="w-3/4">
            <div class="flex mb-6">
              <div class="w-1/4">
                <label for="address"> Address </label>
              </div>
              <div class="w-3/4">
                <input
                  class="form-input border border-gray-200 rounded w-full py-2 px-4"
                  id="address"
                  type="text"
                  placeholder="Enter address here"
                />
              </div>
            </div>

            <div class="flex mb-6">
              <div class="w-1/4">
                <label for="network"> Network </label>
              </div>
              <div class="w-3/4">
                <select
                  class="form-select border border-gray-200 rounded w-full py-2 px-4"
                  id="network"
                >
                  <option selected>Select withdrawal network</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
            </div>

            <div class="flex mb-6">
              <div class="w-1/4">
                <label for="amount"> Amount </label>
              </div>
              <div class="w-3/4">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  max="1000"
                  class="form-input border border-gray-200 rounded w-full py-2 px-4"
                  id="amount"
                />
              </div>
            </div>

            <div class="flex mb-6">
              <div class="w-1/4">
                <label for="comment"> Comment </label>
              </div>
              <div class="w-3/4">
                <textarea
                  rows="4"
                  class="form-textarea border border-gray-200 rounded w-full py-2 px-4"
                  id="comment"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </section>

  <router-view />
</template>

<style scoped lang="scss"></style>
