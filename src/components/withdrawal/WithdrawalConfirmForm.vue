<script setup lang="ts">
import { computed, reactive } from 'vue'
import useValidate from '@vuelidate/core'
import { maxLength, minLength, required } from '@vuelidate/validators'
import type { ConfirmFormData, FormRules } from '@/components/withdrawal/types'
import { web_route } from '@/utils/webConfig'
import { useWithdrawStore } from '@/stores/withdraw'
import AppRuleError from '@/components/app/AppRuleError.vue'
import AppInput from '@/components/app/AppInput.vue'
import useCode from '@/composables/useCode'

const emit = defineEmits<{
  (e: 'completed'): void
}>()

const formData = reactive<ConfirmFormData>({
  password: '',
  phoneCode: '',
})

const rules = computed<FormRules>(() => {
  return {
    password: { required },
    phoneCode: { required, minLength: minLength(6), maxLength: maxLength(6) },
  }
})
const v$ = useValidate(rules, formData)

const onSubmit = async (): Promise<void> => {
  const result = await v$.value.$validate()
  if (result) {
    const withdrawStore = useWithdrawStore()
    // send data to the server
    const response = await withdrawStore.sendWithdrawalData(formData)
    if (response) emit('completed')
  }
}

const { getCode, isCodeSend } = useCode()
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="sm:w-full lg:w-3/4 xl:w-2/4 mx-auto flex flex-col gap-6"
  >
    <fieldset>
      <app-input v-model="formData.password" type="password" label="Password" />
      <app-rule-error :errors="v$.password.$errors" />
    </fieldset>

    <fieldset>
      <div class="relative">
        <app-input
          v-model="formData.phoneCode"
          label="Phone verification code"
          placeholder="Enter the 6-digit code"
        />
        <p v-if="isCodeSend" class="mt-2 text-sm font-bold text-green-700">
          Phone verification code was sent successfully
        </p>
        <div @click="getCode" class="absolute right-3 top-9">
          <span class="font-bold text-accent cursor-pointer"> Get code </span>
        </div>
      </div>
      <app-rule-error :errors="v$.phoneCode.$errors" />
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
