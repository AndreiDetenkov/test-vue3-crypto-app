<script setup lang="ts">
import router from '@/router'
import { computed, reactive, watch } from 'vue'
import { required } from '@vuelidate/validators'
import useValidate from '@vuelidate/core'
import { useWithdrawStore } from '@/stores/withdraw'
import type {
  FormRules,
  NetworkOption,
  WithdrawFormData,
} from '@/components/withdrawal/types'
import AppInput from '@/components/app/input/AppInput.vue'
import AppSelect from '@/components/app/AppSelect.vue'
import AppTextarea from '@/components/app/AppTextarea.vue'
import AppRuleError from '@/components/app/AppRuleError.vue'
import WithdrawalAdditionalInfo from '@/components/withdrawal/WithdrawalAdditionalInfo.vue'
import WithdrawalMaxAmountBtn from '@/components/withdrawal/WithdrawalMaxAmountBtn.vue'
import AppAlert from '@/components/app/alert/AppAlert.vue'
import { web_route } from '@/utils/webConfig'
import type { WalletData } from '@/components/wallet/types'

const withdrawStore = useWithdrawStore()

const props = defineProps<{
  coin: WalletData
}>()

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

const onSubmit = async (): Promise<void> => {
  const result = await v$.value.$validate()
  if (result) {
    await withdrawStore.setWithdrawDetails({ ...formData, coin: props.coin })
    router.push({ path: web_route.withdrawConfirmation })
  }
}

watch(
  () => props.coin.title,
  (newVal, prevVal) => {
    if (newVal.toString() !== prevVal.toString()) {
      formData.amount = formData.network = formData.address = ''
    }
  }
)

const setMaxAmount = (): void => {
  formData.amount = props.coin.total
}

const networkOptions = computed<NetworkOption[]>(() => {
  return props.coin.network.map((item) => {
    return {
      value: item.value,
      title: item.title + ` - fee: ${item.fee} ( ≈ $${item.usdFee})`,
    }
  })
})

const isAmountAvailable = computed<boolean>(() => {
  return formData?.amount <= props.coin.available
})
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="flex flex-col gap-6 sm:w-full lg:w-3/4 xl:w-2/4 mx-auto"
  >
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

    <fieldset>
      <app-alert v-if="!isAmountAvailable" text="Too much, bro!" class="mb-4" />
      <div class="relative">
        <app-input
          v-model="formData.amount"
          label="Amount"
          :placeholder="`Minimal ${coin.minimalWithdraw}`"
        />
        <withdrawal-max-amount-btn
          :coin-short-name="coin.short"
          @click="setMaxAmount"
        />
      </div>
      <app-rule-error :errors="v$.amount.$errors" />
    </fieldset>

    <fieldset class="mb-2">
      <app-textarea
        v-model="formData.comment"
        label="Comment"
        placeholder="Optional"
        rows="2"
      />
    </fieldset>

    <button
      type="submit"
      class="submit-btn"
      :class="{ 'cursor-not-allowed': !isAmountAvailable }"
      :disabled="!isAmountAvailable"
    >
      Withdraw
    </button>
  </form>
</template>

<style scoped>
.submit-btn {
  @apply bg-primary text-gray-300 font-bold p-3 rounded hover:bg-primary/90
         disabled:border-gray-500 disabled:bg-gray-500 disabled:text-gray-700;
}
</style>
