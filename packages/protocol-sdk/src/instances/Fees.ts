import type { ValidatableInstance } from './modifiers/index.ts'

export interface TransactionFeesInstance extends ValidatableInstance {
  base: bigint
  gasLimit: bigint
  gasPrice: bigint
  priority: bigint
}
