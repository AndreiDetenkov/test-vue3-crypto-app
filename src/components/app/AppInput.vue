<script setup lang="ts">
defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <label v-if="label" class="block text-gray-700 text-sm font-bold mb-1">
    {{ label }}
  </label>
  <input
    type="text"
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="appearance-none border-gray-300 border rounded w-full py-3 px-3 focus:outline-none"
  />
</template>
