<script setup lang="ts">
import { reactive } from 'vue'
import AppInput from '@/components/app/AppInput.vue'
import AppSelect from '@/components/app/AppSelect.vue'
import AppTextarea from '@/components/app/AppTextarea.vue'

const withdrawData = reactive({
  address: '',
  network: '',
  amount: '',
  comment: '',
})
</script>

<template>
  <form @submit.prevent class="w-2/4">
    <app-input
      v-model="withdrawData.address"
      label="Address"
      placeholder="Please enter valid address"
      :autocomplete="false"
      class="mb-4"
    />

    <app-select
      v-model="withdrawData.network"
      :options="[]"
      label="Network"
      class="mb-4"
    />

    <app-input
      v-model.number="withdrawData.amount"
      label="Amount"
      placeholder="Please enter amount"
      class="mb-4"
    />

    <app-textarea
      v-model="withdrawData.comment"
      label="Comment"
      placeholder="Please enter comment"
      class="mb-4"
    />
  </form>
</template>
