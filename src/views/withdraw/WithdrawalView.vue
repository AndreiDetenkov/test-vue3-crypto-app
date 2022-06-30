<script setup lang="ts">
import AppPageTitle from '@/components/app/AppPageTitle.vue'
import { useWalletStore } from '@/stores/wallet'
import { storeToRefs } from 'pinia'
import { COIN_ICONS_PATH } from '@/utils/consts'
import useCoin from '@/composables/useCoin'

const walletStore = useWalletStore()
const { walletCoin, walletData } = storeToRefs(walletStore)

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
          class="flex items-center justify-between bg-gray-100 px-8 py-4 mb-6"
        >
          <div class="flex items-center">
            <img
              :src="`${COIN_ICONS_PATH}/${walletCoin.icon}`"
              alt="coin icon"
              class="w-8 h-8"
            />
            <span class="pl-4 text-2xl font-bold">{{ walletCoin.title }}</span>
          </div>
          <div class="text-gray-500">
            Available balance: {{ walletCoin.available }}
            <span class="uppercase">{{ walletCoin.short }}</span>
          </div>
        </div>

        <div>
          <div class="flex mb-6">
            <div class="w-1/4">
              <label for="inline-full-name"> Address </label>
            </div>
            <div class="w-3/4">
              <input
                class="form-input border border-gray-200 rounded w-full py-2 px-4"
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>
          <div class="flex mb-6">
            <div class="w-1/4">
              <label for="inline-full-name"> Amount </label>
            </div>
            <div class="w-3/4">
              <input
                class="form-input border border-gray-200 rounded w-full py-2 px-4"
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>

          <div class="flex mb-6">
            <div class="w-1/4">
              <label for="inline-full-name"> Comment </label>
            </div>
            <div class="w-3/4">
              <textarea
                rows="4"
                class="form-textarea border border-gray-200 rounded w-full py-2 px-4"
                id="inline-full-name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <router-view />
</template>

<style scoped lang="scss"></style>
