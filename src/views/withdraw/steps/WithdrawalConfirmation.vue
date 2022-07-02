<script setup lang="ts">
import { web_route } from '@/utils/webConfig'
import AppInput from '@/components/app/AppInput.vue'
import WithdrawalConfirmInfo from '@/components/withdrawal/WithdrawalConfirmInfo.vue'
</script>

<template>
  <withdrawal-confirm-info class="mb-10" />

  <form
    @submit.prevent
    class="sm:w-full lg:w-3/4 xl:w-2/4 mx-auto flex flex-col gap-6"
  >
    <fieldset>
      <app-input type="password" label="Password" />
    </fieldset>

    <fieldset>
      <app-input label="Phone verification code" class="relative" />
    </fieldset>

    <fieldset class="flex mt-4">
      <router-link
        :to="web_route.withdraw"
        class="border border-primary p-3 mr-4 rounded text-center font-medium hover:bg-gray-100 w-1/2"
      >
        Cancel
      </router-link>
      <button
        type="submit"
        class="bg-primary text-gray-300 p-3 ml-4 rounded font-medium hover:bg-primary/90 w-1/2"
      >
        Submit
      </button>
    </fieldset>
  </form>
</template>
