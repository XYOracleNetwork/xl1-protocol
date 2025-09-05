import type { Hash } from '@xylabs/hex'

/**
 * Final confirmation tying the intent and the observation together.
 */
export interface BridgeCompletionFields {

  /**
   * Block number, event ID, or timestamp when the bridge was completed
   */
  completedAt?: Hash

  /**
   * Reference to observed confirmation hash
   */
  destObservation: Hash

  /**
   * Reference to original intent hash
   */
  srcIntent?: Hash
}
