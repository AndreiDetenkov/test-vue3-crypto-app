<script setup lang="ts">
import type { MenuInterface } from '@/components/app/types'
import { web_route } from '@/utils/webConfig'

const menu: MenuInterface[] = [
  { title: 'Wallet', url: web_route.wallet },
  { title: 'Withdraw', url: web_route.withdraw },
]
</script>

<template>
  <nav class="nav">
    <div class="nav__container">
      <router-link to="/" class="logo">
        <img src="@/assets/logo.svg" alt="logo" />
      </router-link>

      <div class="menu">
        <router-link
          v-for="item in menu"
          :key="item.title"
          :to="item.url"
          class="menu__link"
          active-class="active"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  @apply h-16 bg-primary flex items-center;

  &__container {
    @apply container mx-auto flex items-center justify-between;
  }
}

.logo {
  @apply text-2xl text-white;
}

.menu {
  @apply flex justify-center;

  &__link {
    @apply h-8 px-4 mx-2
    flex items-center justify-center
    text-gray-300 text-center uppercase text-sm
    transition duration-300 ease-in-out;
  }
}

.active {
  @apply text-accent font-bold border-b-accent border-b-2;
}
</style>
