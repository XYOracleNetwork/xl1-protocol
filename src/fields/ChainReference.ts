import type { Address } from '@xylabs/hex'

/**
 * Required info for a chain reference
 */
export interface ChainReference {
  /**
   * The contract address referenced by the chain
   */
  chain: Address
}
