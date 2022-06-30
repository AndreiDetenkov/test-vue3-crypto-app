<script setup lang="ts">
import AppPageTitle from '@/components/app/AppPageTitle.vue'
import { useWalletStore } from '@/stores/wallet'
import { storeToRefs } from 'pinia'
import { COIN_ICONS_PATH } from '@/utils/consts'
import useCoin from '@/composables/useCoin'
import { onMounted } from 'vue'

const walletStore = useWalletStore()
const { walletCoin, walletData } = storeToRefs(walletStore)

onMounted((): void => {
  walletStore.fetchWalletData()
})

const { setCoin } = useCoin()
</script>

<template>
  <div class="main-container">
    <app-page-title>Withdraw Crypto</app-page-title>

    <div class="flex gap-8">
      <div class="w-3/12 border py-6">
        <div
          v-for="data in walletData"
          :key="data.id"
          class="flex items-center hover:bg-gray-100 hover:cursor-pointer px-6 py-4"
          @click="setCoin(data)"
        >
          <img
            :src="`${COIN_ICONS_PATH}/${data.icon}`"
            alt="coin icon"
            class="w-8 h-8"
          />
          <div class="pl-4">
            <span class="font-bold uppercase">{{ data.short }}</span> |
            <span>{{ data.title }}</span>
            <div class="font-medium text-gray-500">
              Total: <span>{{ data.total }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 border p-6">
        <div
          class="flex items-center justify-between bg-gray-100 px-8 py-4 mb-12"
        >
          <template v-if="Object.keys(walletCoin).length">
            <div class="flex items-center">
              <img
                :src="`${COIN_ICONS_PATH}/${walletCoin.icon}`"
                alt="coin icon"
                class="w-8 h-8"
              />
              <span class="pl-4 text-2xl font-bold">
                {{ walletCoin.title }}
              </span>
            </div>
            <div class="text-gray-500">
              Available balance: {{ walletCoin.available }}
              <span class="uppercase">{{ walletCoin.short }}</span>
            </div>
          </template>
          <template v-else>
            <span class="text-2xl">Please select coin</span>
          </template>
        </div>

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
                  class="form-input border border-gray-200 rounded w-full py-2 px-4"
                  id="amount"
                  type="text"
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
      </div>
    </div>
  </div>

  <router-view />
</template>

<style scoped lang="scss"></style>
