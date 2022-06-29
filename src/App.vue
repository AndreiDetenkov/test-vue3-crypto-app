<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/app/AppNavbar.vue'
import { useUserStore } from '@/stores/user'
import { onBeforeMount } from 'vue'

const userStore = useUserStore()

onBeforeMount((): void => {
  userStore.fetchUserData()
})
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
