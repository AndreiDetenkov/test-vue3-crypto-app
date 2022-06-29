<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/app/AppNavbar.vue'
</script>

<template>
  <div class="min-h-screen">
    <app-navbar />
    <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
