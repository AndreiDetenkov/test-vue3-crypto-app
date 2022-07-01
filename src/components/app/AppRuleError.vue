<script setup lang="ts">
import type { FormRuleError } from '@/components/app/types'

defineProps<{
  errors: FormRuleError
}>()
</script>

<template>
  <span class="text-red-500" v-for="error of errors" :key="error.$uid">
    {{ error.$message }}
  </span>
</template>
