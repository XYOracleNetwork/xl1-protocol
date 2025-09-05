import type { Hash } from '@xylabs/hex'

/**
 * Final confirmation tying the intent and the observation together.
 */
export interface BridgeCompletionFields {

  /**
   * Timestamp when the bridge was completed
   */
  completedAt?: number

  /**
   * Reference to observed confirmation hash
   */
  destObservation: Hash

  /**
   * Reference to original intent hash
   */
  srcIntent?: Hash
}
