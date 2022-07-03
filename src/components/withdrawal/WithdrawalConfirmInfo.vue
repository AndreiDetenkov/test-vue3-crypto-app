<script setup lang="ts">
import { computed } from 'vue'
import { COIN_ICONS_PATH } from '@/utils/consts'
import { useWithdrawStore } from '@/stores/withdraw'
import { storeToRefs } from 'pinia'
import type { NetworkData } from '@/components/wallet/types'

const withdrawStore = useWithdrawStore()
const { withdrawDetails } = storeToRefs(withdrawStore)

const networkDetails = computed<NetworkData>(() => {
  return withdrawDetails.value?.coin?.network.find(
    (item) => item.value === withdrawDetails.value.network
  )
})

const coinShortName = computed<string>(() => {
  return withdrawDetails.value?.coin?.short.toUpperCase()
})

const amountInfo = computed<string>(() => {
  return `Total ${withdrawDetails.value?.amount} ${coinShortName.value} (Network fee ${networkDetails.value?.fee} ${coinShortName.value})`
})

const listInfo = computed(() => {
  return [
    {
      title: 'Amount',
      img: `${COIN_ICONS_PATH}/${withdrawDetails.value?.coin?.icon}`,
      value: amountInfo,
    },
    { title: 'Address', value: withdrawDetails.value?.address },
    { title: 'Network', value: networkDetails.value?.title },
    {
      title: 'Comment',
      value: withdrawDetails.value?.comment || "there aren't any comments...",
    },
  ]
})
</script>

<template>
  <div class="sm:w-full lg:w-3/4 2xl:w-2/4 mx-auto bg-gray-100 p-4">
    <div v-for="item in listInfo" :key="item.title" class="flex mb-4 last:mb-0">
      <span class="inline-block w-1/5 font-medium text-gray-500">
        {{ item.title }}
      </span>

      <div>
        <img
          v-if="item.img"
          :src="item.img"
          class="w-5 h-5 mr-1 inline-block"
        />
        <span class="font-medium">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>
