<script setup lang="ts">
import type { MenuInterface } from '@/components/app/types'
import { web_route } from '@/utils/webConfig'

const menu: MenuInterface[] = [
  { title: 'Wallet', url: web_route.wallet },
  { title: 'History', url: web_route.history },
]
</script>

<template>
  <nav class="h-16 bg-primary flex items-center">
    <div class="container mx-auto flex items-center justify-between px-4">
      <router-link to="/" class="text-2xl text-white"> Logo </router-link>

      <div class="flex justify-center">
        <router-link
          v-for="item in menu"
          :key="item.title"
          :to="item.url"
          class="h-16 px-4 mx-2 flex items-center justify-center text-gray-300 text-center uppercase text-sm font-medium transition duration-300 ease-in-out;"
          active-class="text-accent font-bold border-b-accent bg-amber-400/10"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </nav>
</template>
