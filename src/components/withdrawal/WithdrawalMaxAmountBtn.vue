<script setup lang="ts">
defineProps<{
  coinShortName: string
}>()

defineEmits<{
  (e: 'on-click'): void
}>()
</script>

<template>
  <div class="absolute right-3 top-9 divide-x">
    <span
      class="font-medium text-accent cursor-pointer uppercase pr-2"
      @click="$emit('on-click')"
    >
      max
    </span>

    <span class="uppercase text-gray-400 pl-3">{{ coinShortName }}</span>
  </div>
</template>
