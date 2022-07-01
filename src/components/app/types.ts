export interface MenuInterface {
  title: string
  url: string
  icon: string
}

export interface SelectOption {
  title: string
  value: string
}

export interface FormRuleError {
  $propertyPath: string
  $property: string
  $validator: string
  $uid: string
  $message: string
  $params: { type: string }
  $response: boolean
  $pending: boolean
}
