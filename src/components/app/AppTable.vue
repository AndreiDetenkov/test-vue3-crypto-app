<script setup lang="ts"></script>

<template>
  <div class="overflow-x-auto rounded-lg">
    <table class="w-full table-fixed border-collapse">
      <thead class="bg-gray-100">
        <slot name="table-header" />
      </thead>
      <tbody>
        <slot name="table-body" />
      </tbody>
    </table>
  </div>
</template>
