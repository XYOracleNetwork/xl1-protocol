import type { ValidatableInstance } from './modifiers/Validatable.ts'

export interface TransactionFeesInstance extends ValidatableInstance {
  base: bigint
  gasLimit: bigint
  gasPrice: bigint
  priority: bigint
}
