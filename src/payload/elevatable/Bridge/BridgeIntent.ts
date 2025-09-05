import type { BridgeDetailsFields } from './BridgeDetails.ts'

/**
 * Represents an Addresses intent to initiate a token bridge.
 */
export interface BridgeIntentFields extends BridgeDetailsFields {
  /**
   * Unique identifier for replay protection
   */
  nonce: string
}
