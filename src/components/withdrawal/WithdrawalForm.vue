<script setup lang="ts">
import { computed, reactive } from 'vue'
import { required } from '@vuelidate/validators'
import useValidate from '@vuelidate/core'
import type { FormRules, WithdrawFormData } from '@/components/withdrawal/types'
import AppInput from '@/components/app/AppInput.vue'
import AppSelect from '@/components/app/AppSelect.vue'
import AppTextarea from '@/components/app/AppTextarea.vue'
import AppRuleError from '@/components/app/AppRuleError.vue'

const formData = reactive<WithdrawFormData>({
  address: '',
  network: '',
  amount: '',
  comment: '',
})

const rules = computed<FormRules>(() => {
  return {
    address: { required },
    network: { required },
    amount: { required },
  }
})

const v$ = useValidate(rules, formData)

const onSubmit = async () => {
  const result = await v$.value.$validate()
  if (result) console.log('success')
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-6">
    <fieldset>
      <app-input
        v-model="formData.address"
        label="Address"
        placeholder="Please enter valid address"
        :autocomplete="false"
      />
      <app-rule-error :errors="v$.address.$errors" />
    </fieldset>

    <fieldset>
      <app-select v-model="formData.network" :options="[]" label="Network" />
      <app-rule-error :errors="v$.network.$errors" />
    </fieldset>

    <app-textarea
      v-model="formData.comment"
      label="Comment"
      placeholder="Please enter comment"
      rows="4"
    />

    <fieldset v-show="formData.address">
      <app-input
        v-model.number="formData.amount"
        label="Amount"
        placeholder="Please enter amount"
      />
      <app-rule-error :errors="v$.amount.$errors" />
    </fieldset>

    <button
      type="submit"
      class="bg-primary text-gray-300 font-bold py-2 px-4 rounded hover:bg-primary/90 hover:text-accent transition duration-300 ease-in-out;"
    >
      Withdraw
    </button>
  </form>
</template>
