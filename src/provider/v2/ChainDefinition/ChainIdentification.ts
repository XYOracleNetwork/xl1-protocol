import type { Address } from '@xylabs/hex'

/**
 * Identification required to uniquely identify a chain
 */
export interface ChainIdentification {
  /** @field the id of the chain */
  id: Address
}
