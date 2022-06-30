<script setup lang="ts">
import { COIN_ICONS_PATH } from '@/utils/consts'
import { TABLE_HEADERS } from '@/components/wallet/utils'
import { web_route } from '@/utils/webConfig'
import type { WalletData } from '@/components/wallet/types'
import { useWalletStore } from '@/stores/wallet'

defineProps<{
  tableItems: WalletData[]
}>()

const walletStore = useWalletStore()

const setCoin = (coin: WalletData): void => {
  walletStore.setWalletCoin(coin)
}
</script>

<template>
  <table class="table">
    <thead class="table__header">
      <tr class="header-row">
        <th v-for="header in TABLE_HEADERS" :key="header" class="header-col">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tableItems" :key="item.id" class="body-row">
        <td class="col-first">
          <img
            :src="`${COIN_ICONS_PATH}/${item.icon}`"
            alt="cryptocurrency icon"
            class="col-first__img"
          />
          <div class="coin">
            <span class="coin__short">{{ item.short }}</span>
            <span class="coin__title">{{ item.title }}</span>
          </div>
        </td>
        <td>{{ item.total }}</td>
        <td>{{ item.available }}</td>
        <td>
          <div>{{ item.btcValue }}</div>
          <div v-if="item.usdValue > 0" class="usd-value">
            ≈ ${{ item.usdValue }}
          </div>
        </td>
        <td>
          <router-link
            :to="item.available > 0 ? web_route.withdraw : ''"
            :class="[item.available > 0 ? 'text-accent' : 'disabled']"
            class="font-medium"
            disabled
          >
            <span @click="setCoin(item)">Withdraw</span>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.table {
  @apply w-full table-fixed border-collapse;

  &__header {
    @apply bg-gray-100;
  }
}

.header {
  &-row {
    @apply h-11;
  }
  &-col {
    @apply text-left text-sm text-gray-500 font-medium first:pl-4;
  }
}

.body {
  &-row {
    @apply border-b h-16 hover:bg-gray-100;
  }
}

.col-first {
  @apply h-16 px-4 flex items-center;

  &__img {
    @apply w-8 h-8;
  }
}

.coin {
  @apply flex flex-col pl-4;

  &__short {
    @apply font-bold uppercase;
  }
  &__title {
    @apply text-sm text-gray-500;
  }
}

.usd-value {
  @apply text-sm text-gray-500;
}

.disabled {
  @apply text-gray-400;
}
</style>
