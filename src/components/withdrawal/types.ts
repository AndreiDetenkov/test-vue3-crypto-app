import type { WalletData } from '@/components/wallet/types'

export interface WithdrawFormData {
  address: string
  network: string
  amount: string
  comment: string
}
export interface WithdrawDetails extends WithdrawFormData {
  coin: WalletData
}

export type FormRules = { [key: string]: any }

export interface NetworkOption {
  title: string
  value: string
}
