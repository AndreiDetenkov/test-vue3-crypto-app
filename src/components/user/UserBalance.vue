<script setup lang="ts">
import type { UserData } from '@/components/user/types'

defineProps<{
  userData: UserData
}>()
</script>

<template>
  <div class="pb-8">
    <span class="inline-block font-medium mb-2">Estimated Balance</span>

    <p class="text-2xl font-bold">
      {{ userData.balance.value }} {{ userData.balance.currency }}
      <span class="ml-2 font-bold text-gray-500">
        ≈ ${{ userData.balance.usd }}
      </span>
    </p>
  </div>
</template>

<style scoped lang="scss"></style>
