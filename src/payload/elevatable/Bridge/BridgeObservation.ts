import type { Hex } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

import type { BridgeDetailsFields } from './BridgeDetails.ts'

export const BridgeObservationSchema = 'network.xyo.chain.bridge.observation' as const
export type BridgeObservationSchema = typeof BridgeObservationSchema

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

export type BridgeObservation = Payload<BridgeObservationFields, BridgeObservationSchema>

export const isBridgeObservation = isPayloadOfSchemaType<BridgeObservation>(BridgeObservationSchema)

export const asBridgeObservation = AsObjectFactory.create(isBridgeObservation)
