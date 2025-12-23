import type {
  Address, Hash, Hex,
} from '@xylabs/sdk-js'

import type { ValidatableInstance } from './modifiers/index.ts'

export interface SignatureInstance extends ValidatableInstance {
  address: Address
  hash: Hash
  signature: Hex
}
