<script setup lang="ts">
import { useWithdrawStore } from '@/stores/withdraw'
import { storeToRefs } from 'pinia'
import router from '@/router'
import { web_route } from '@/utils/webConfig'
import AppInput from '@/components/app/AppInput.vue'

const withdrawStore = useWithdrawStore()
const { withdrawDetails } = storeToRefs(withdrawStore)

const onCancel = () => {
  router.push({ path: web_route.withdraw })
}
</script>

<template>
  <div class="sm:w-full lg:w-3/4 xl:w-2/4 mx-auto bg-gray-100 p-4 mb-10">
    <div>
      <span class="inline-block w-1/3">Amount</span>
      <span class="">Total 0.30401394 BNB (Network fee 0.0005 BNB)</span>
    </div>
    <div>
      <span>Address</span>
      <span>bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wl</span>
    </div>
    <div>
      <span>Network</span>
      <span>BNB Smart Chain (BEP20)</span>
    </div>
  </div>

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
      <button
        @click="onCancel"
        class="border border-primary p-3 mr-4 rounded font-medium hover:bg-gray-100 w-1/2"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="bg-primary text-gray-300 p-3 ml-4 rounded font-medium hover:bg-primary/90 w-1/2"
      >
        Submit
      </button>
    </fieldset>
  </form>
</template>
