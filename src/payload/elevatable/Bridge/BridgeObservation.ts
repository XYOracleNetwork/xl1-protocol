import type { Hash } from '@xylabs/hex'

import type { BridgeDetailsFields } from './BridgeDetails.ts'

/**
 * Represents an observation that confirms a bridge action occurred on the destination chain.
 */
export interface BridgeObservationFields extends BridgeDetailsFields {
  /**
   * Destination chain confirmation
   */
  destConfirmation: Hash

  /**
   * Type of confirmation (e.g., 'txHash', 'eventId')
   */
  destConfirmationType?: string
}
