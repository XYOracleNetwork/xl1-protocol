import type { Hex } from '@xylabs/hex'

import type { BridgeDetailsFields } from './BridgeDetails.ts'

/**
 * Represents an observation that confirms a bridge action occurred on the source chain.
 */
export interface BridgeSourceObservationFields extends BridgeDetailsFields {
  /**
   * Source chain confirmation
   */
  srcConfirmation?: Hex
}
/**
 * Represents an observation that confirms a bridge action occurred on the destination chain.
 */
export interface BridgeDestinationObservationFields extends BridgeDetailsFields {
  /**
   * Destination chain confirmation
   */
  destConfirmation?: Hex
}

/**
 * Represents an observation that confirms a bridge action occurred on either the source or destination chain.
 */
export type BridgeObservationFields = BridgeSourceObservationFields | BridgeDestinationObservationFields
