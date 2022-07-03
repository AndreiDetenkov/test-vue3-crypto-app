<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useHistoryStore } from '@/stores/history'
import AppPageTitle from '@/components/app/AppPageTitle.vue'
import AppLoader from '@/components/app/AppLoader.vue'
import HistoryTable from '@/components/history/HistoryTable.vue'

const historyStore = useHistoryStore()
const { isLoading, historyData } = storeToRefs(historyStore)

onBeforeMount((): void => {
  historyStore.fetchHistoryData()
})
</script>

<template>
  <app-loader v-if="isLoading" />

  <section v-else class="main-container">
    <app-page-title>Transaction History</app-page-title>
    <history-table :history-data="historyData" />
  </section>
</template>
