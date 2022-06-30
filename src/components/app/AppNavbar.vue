<script setup lang="ts">
import type { MenuInterface } from '@/components/app/types'
import { web_route } from '@/utils/webConfig'
import WalletIcon from '@/components/wallet/WalletIcon.vue'

const menu: MenuInterface[] = [
  { title: 'Wallet', url: web_route.wallet, icon: 'wallet.svg' },
]
</script>

<template>
  <nav class="nav">
    <div class="nav__container">
      <router-link to="/" class="logo"> Logo </router-link>

      <div class="menu">
        <router-link
          v-for="item in menu"
          :key="item.title"
          :to="item.url"
          class="menu__link"
          active-class="active"
        >
          <wallet-icon class="menu__icon" />
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
    @apply container mx-auto flex items-center justify-between px-4;
  }
}

.logo {
  @apply text-2xl text-white;
}

.menu {
  @apply flex justify-center;

  &__link {
    @apply h-16 px-4 mx-2 flex items-center justify-center
    text-gray-300 text-center uppercase text-sm font-medium
    transition duration-300 ease-in-out;
  }

  &__icon {
    @apply fill-default/[.33] mr-2 w-6 h-6;
  }
}

.active {
  @apply text-accent font-bold border-b-accent bg-amber-400/10;
}
</style>
