<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 z-50 bg-black/60 flex justify-center items-center w-screen h-screen"
  >
    <div class="w-full max-w-xl h-auto bg-white rounded-lg shadow">
      <div class="flex justify-between items-start px-6 pt-4">
        <h3 class="text-xl font-semibold text-gray-900">
          <slot name="header" />
        </h3>
        <button
          type="button"
          @click="emit('update:modelValue', false)"
          class="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div class="p-6">
        <p class="text-base leading-relaxed">
          <slot name="content" />
        </p>
      </div>

      <div class="flex items-center p-6 space-x-2">
        <slot name="action" />
        <!--        <button-->
        <!--          data-modal-toggle="defaultModal"-->
        <!--          type="button"-->
        <!--          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"-->
        <!--        >-->
        <!--          I accept-->
        <!--        </button>-->
      </div>
    </div>
  </div>
</template>
