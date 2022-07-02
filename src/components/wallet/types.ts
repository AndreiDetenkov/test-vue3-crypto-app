export interface WalletData {
  id: string
  title: string
  short: string
  icon: string
  total: string
  available: string
  btcValue: string
  usdValue: string
  minimalWithdraw: string
  fee: string
  network: NetworkData[]
}

export interface NetworkData {
  title: string
  value: string
  fee: string
  usdFee: string
}
