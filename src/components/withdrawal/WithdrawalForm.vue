<script setup lang="ts">
import { reactive } from 'vue'
import type { WithdrawFormData } from '@/components/withdrawal/types'
import AppInput from '@/components/app/AppInput.vue'
import AppSelect from '@/components/app/AppSelect.vue'
import AppTextarea from '@/components/app/AppTextarea.vue'

const formData = reactive<WithdrawFormData>({
  address: '',
  network: '',
  amount: '',
  comment: '',
})
</script>

<template>
  <form @submit.prevent class="flex flex-col gap-8">
    <app-input
      v-model="formData.address"
      label="Address"
      placeholder="Please enter valid address"
      :autocomplete="false"
    />

    <app-select v-model="formData.network" :options="[]" label="Network" />

    <app-textarea
      v-model="formData.comment"
      label="Comment"
      placeholder="Please enter comment"
      rows="4"
    />

    <app-input
      v-show="formData.address"
      v-model.number="formData.amount"
      label="Amount"
      placeholder="Please enter amount"
    />
  </form>
</template>
