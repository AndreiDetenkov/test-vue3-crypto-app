interface Balance {
  value: string
  currency: string
  usd: string
}

export interface UserData {
  user: string
  email: string
  balance: Balance
}
