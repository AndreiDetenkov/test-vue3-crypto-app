<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useMarketStore } from '@/stores/markets'
import { TABLE_HEADERS } from '@/components/main/utils'
import { COIN_ICONS_PATH } from '@/utils/consts'
import AppPageTitle from '@/components/app/AppPageTitle.vue'
import AppTable from '@/components/app/AppTable.vue'
import AppLoader from '@/components/app/AppLoader.vue'

const marketStore = useMarketStore()
const { markets, isLoading } = storeToRefs(marketStore)
onBeforeMount(() => {
  marketStore.fetchMarkets()
})
</script>

<template>
  <app-loader v-if="isLoading" />
  <section v-else class="main-container">
    <app-page-title>Markets</app-page-title>

    <app-table>
      <template #table-header>
        <tr class="h-11">
          <th
            v-for="header in TABLE_HEADERS"
            :key="header"
            class="text-left text-sm text-gray-500 font-medium first:pl-4"
          >
            {{ header }}
          </th>
        </tr>
      </template>

      <template #table-body>
        <tr
          v-for="({ pair, price, volume }, index) in markets"
          :key="index.toString()"
          class="border-b h-14 hover:bg-gray-100"
        >
          <td class="px-4 flex items-center h-14">
            <img
              :src="`${COIN_ICONS_PATH}/${pair.primary.toLowerCase()}.svg`"
              class="w-6 h-6 mr-4"
            />
            <span class="uppercase">{{ pair.primary }}</span>
          </td>
          <td>$ {{ price.last }}</td>
          <td
            class="font-medium"
            :class="{
              'text-red-700': price.change.direction === 'Up',
              'text-green-700': price.change.direction === 'Down',
            }"
          >
            {{ price.change?.percent }} %
          </td>
          <td>{{ volume.primary }} USD</td>
        </tr>
      </template>
    </app-table>
  </section>
</template>
