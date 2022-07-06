<script setup lang="ts">
import { ref } from 'vue'
import { web_route } from '@/utils/webConfig'
import WithdrawalConfirmInfo from '@/components/withdrawal/WithdrawalConfirmInfo.vue'
import WithdrawalConfirmForm from '@/components/withdrawal/WithdrawalConfirmForm.vue'
import AppModal from '@/components/app/modal/AppModal.vue'

const isModalDisplay = ref<boolean>(false)
</script>

<template>
  <withdrawal-confirm-info class="mb-10" />
  <withdrawal-confirm-form @completed="isModalDisplay = true" />

  <app-modal
    v-model="isModalDisplay"
    @update:modelValue="$router.push({ path: web_route.wallet })"
  >
    <template #content>
      <h3 class="text-center text-2xl font-bold mb-4">
        Withdrawal request successful
      </h3>
      <p class="text-center text-xl text-gray-700">
        Your withdrawal request has been confirmed. Check your withdrawal status
        progress on the Withdrawal History page.
      </p>
    </template>
    <template #action>
      <router-link
        :to="web_route.history"
        type="button"
        class="bg-primary text-gray-300 py-3 px-6 rounded font-medium hover:bg-primary/90"
      >
        Go to Withdrawal History
      </router-link>
    </template>
  </app-modal>
</template>
