<script setup lang="ts">
import type { SelectOption } from '@/components/app/types'

defineProps<{
  label: string | boolean
  modelValue: string
  options: SelectOption[]
}>()
</script>

<template>
  <div class="flex flex-col">
    <label v-if="label" class="block text-gray-700 text-sm font-bold mb-1">
      {{ label }}
    </label>
    <select
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="appearance-none border rounded w-full py-3 px-3 focus:outline-none border-gray-300"
    >
      <option
        v-for="option in options"
        :key="option.title"
        :value="option.value"
      >
        {{ option.title }}
      </option>
    </select>
  </div>
</template>
