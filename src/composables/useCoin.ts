import { useWalletStore } from '@/stores/wallet'
import type { WalletData } from '@/components/wallet/types'

export default function useCoin() {
  const walletStore = useWalletStore()

  const setCoin = (coin: WalletData): void => {
    walletStore.setWalletCoin(coin)
  }

  return {
    setCoin,
  }
}
