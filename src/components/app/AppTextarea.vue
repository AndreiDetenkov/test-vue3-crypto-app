<script setup lang="ts">
defineProps<{
  label: string | boolean
  modelValue: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <label v-if="label" class="block text-gray-700 text-sm font-bold mb-1">
      {{ label }}
    </label>
    <textarea
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="appearance-none border rounded w-full py-2 px-3 focus:outline-none border-gray-500"
    />
  </div>
</template>
