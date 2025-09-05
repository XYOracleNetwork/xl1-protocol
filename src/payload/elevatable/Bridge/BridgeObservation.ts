import type { Hash } from '@xylabs/hex'

import type { BridgeIntentFields } from './BridgeIntent.ts'

/**
 * Represents an observation that confirms the bridge action occurred on the destination chain.
 */
export interface BridgeObservationFields extends BridgeIntentFields {
  /**
   * Destination chain confirmation
   */
  destConfirmation: Hash

  /**
   * Type of confirmation (e.g., 'txHash', 'eventId')
   */
  destConfirmationType?: string

  /**
   * Timestamp of the observation
   */
  observedAt?: number
}
