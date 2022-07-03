<script setup lang="ts">
import { ref } from 'vue'
import WithdrawalConfirmInfo from '@/components/withdrawal/WithdrawalConfirmInfo.vue'
import WithdrawalConfirmForm from '@/components/withdrawal/WithdrawalConfirmForm.vue'
import AppModal from '@/components/app/AppModal.vue'

const isModalDisplay = ref<boolean>(false)
</script>

<template>
  <withdrawal-confirm-info class="mb-10" />
  <withdrawal-confirm-form @completed="isModalDisplay = true" />

  <app-modal v-model="isModalDisplay" />
</template>
