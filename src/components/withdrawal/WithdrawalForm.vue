<script setup lang="ts">
import { computed, reactive } from 'vue'
import { required } from '@vuelidate/validators'
import useValidate from '@vuelidate/core'
import type {
  FormRules,
  NetworkOption,
  WithdrawFormData,
} from '@/components/withdrawal/types'
import AppInput from '@/components/app/AppInput.vue'
import AppSelect from '@/components/app/AppSelect.vue'
import AppTextarea from '@/components/app/AppTextarea.vue'
import AppRuleError from '@/components/app/AppRuleError.vue'
import WithdrawalAdditionalInfo from '@/components/withdrawal/WithdrawalAdditionalInfo.vue'
import { useWalletStore } from '@/stores/wallet'
import { storeToRefs } from 'pinia'

const walletStore = useWalletStore()
const { walletCoin } = storeToRefs(walletStore)

const formData = reactive<WithdrawFormData>({
  address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
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

const networkOptions = computed<NetworkOption[]>(() => {
  return walletCoin.value.network.map((item) => {
    return {
      value: item.value,
      title: item.title + ` - fee: ${item.fee} ( ≈ $${item.usdFee})`,
    }
  })
})
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
      <app-select
        v-model="formData.network"
        :options="networkOptions"
        label="Network"
      />
      <app-rule-error :errors="v$.network.$errors" />
      <withdrawal-additional-info />
    </fieldset>

    <app-textarea
      v-model="formData.comment"
      label="Comment"
      placeholder="Optional"
      rows="2"
    />

    <fieldset>
      <app-input
        v-model.number="formData.amount"
        label="Amount"
        placeholder="Please enter amount"
      />
      <app-rule-error :errors="v$.amount.$errors" />
    </fieldset>

    <button type="submit" class="submit-btn">Withdraw</button>
  </form>
</template>

<style scoped>
.submit-btn {
  @apply bg-primary text-gray-300 font-bold py-2 px-4 rounded hover:bg-primary/90 hover:text-accent transition duration-500 ease-in-out;
}
</style>
