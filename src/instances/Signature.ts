import type {
  Address, Hash, Hex,
} from '@xylabs/hex'

import type { ValidatableInstance } from './modifiers/Validatable.ts'

export interface SignatureInstance extends ValidatableInstance {
  address: Address
  hash: Hash
  signature: Hex
}
