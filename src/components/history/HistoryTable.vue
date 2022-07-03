<script setup lang="ts">
import { OrderStatus, TABLE_HEADERS } from '@/components/history/utils'
import { COIN_ICONS_PATH } from '@/utils/consts'
import type { HistoryData } from '@/components/history/types'
import AppTable from '@/components/app/AppTable.vue'
defineProps<{
  historyData: HistoryData[]
}>()
</script>

<template>
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
        v-for="item in historyData"
        :key="item.id"
        class="border-b h-14 hover:bg-gray-100"
      >
        <td class="h-14 px-4 flex items-center">
          <img
            :src="`${COIN_ICONS_PATH}/${item.icon}`"
            alt="coin icon"
            class="w-6 h-6 mr-4"
          />
          <span class="uppercase">{{ item.asset }}</span>
        </td>
        <td class="text-gray-800">{{ item.amount }}</td>
        <td class="text-gray-800">{{ item.dateTime }}</td>
        <td class="text-gray-800">{{ item.type }}</td>
        <td>
          <span
            class="font-medium"
            :class="{
              'text-red-600': item.status === OrderStatus.Rejected,
              'text-green-600': item.status === OrderStatus.Completed,
              'text-orange-600': item.status === OrderStatus.Pending,
            }"
          >
            {{ item.status }}
          </span>
        </td>
        <td class="text-sm font-medium underline text-blue-800 cursor-pointer">
          Details
        </td>
      </tr>
    </template>
  </app-table>
</template>
