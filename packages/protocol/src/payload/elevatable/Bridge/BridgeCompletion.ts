import type { Hash } from '@xylabs/sdk-js'

/**
 * Final confirmation tying the intent and the observation together.
 */
export interface BridgeCompletionFields {

  /**
   * Block number, event ID, or timestamp when the bridge was completed
   */
  completedAt?: Hash

  /**
   * Reference to observed destination confirmation hash
   */
  destObservation: Hash

  /**
   * Reference to source intent hash
   */
  srcIntent?: Hash

  /**
   * Reference to observed source confirmation hash
   */
  srcObservation: Hash

}
