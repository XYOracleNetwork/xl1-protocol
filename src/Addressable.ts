import type { Address } from '@xylabs/hex'

// NOTE: Minimal interface in case of reuse across validators, producers, wallets, modules, etc.
export interface Addressable {
  address: Address
}
