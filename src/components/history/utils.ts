export const TABLE_HEADERS: string[] = [
  'Coin',
  'Amount',
  'Time',
  'Type',
  'Status',
  'Action',
]

export enum OrderStatus {
  Rejected = 'Rejected',
  Completed = 'Completed',
  Pending = 'Pending',
}
