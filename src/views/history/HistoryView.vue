<script setup lang="ts">
import { TABLE_HEADERS } from '@/components/history/utils'
import AppPageTitle from '@/components/app/AppPageTitle.vue'
import AppTable from '@/components/app/AppTable.vue'
</script>

<template>
  <section class="main-container">
    <app-page-title>Transaction History</app-page-title>

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
          v-for="item in 1"
          :key="item.id"
          class="border-b h-16 hover:bg-gray-100"
        >
          <td>SOL</td>
          <td>2022-07-03</td>
          <td>withdraw</td>
          <td>0.00084600</td>
          <td>pending</td>
        </tr>
      </template>
    </app-table>
  </section>
</template>
