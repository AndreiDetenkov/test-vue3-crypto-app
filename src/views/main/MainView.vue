<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useMarketStore } from '@/stores/markets'
import { TABLE_HEADERS } from '@/components/main/utils'
import AppPageTitle from '@/components/app/AppPageTitle.vue'
import AppTable from '@/components/app/AppTable.vue'
import { storeToRefs } from 'pinia'

const marketStore = useMarketStore()
const { markets } = storeToRefs(marketStore)
onBeforeMount(() => {
  marketStore.fetchMarkets()
})
</script>

<template>
  <section class="main-container">
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
          <td>{{ pair.primary }}</td>
          <td>{{ price.last }}</td>
          <td>{{ price.change?.percent }}</td>
          <td>{{ volume.primary }}</td>
        </tr>
      </template>
    </app-table>
  </section>
</template>
