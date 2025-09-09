import type { Hex } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

import type { BridgeDetailsFields } from './BridgeDetails.ts'

export const BridgeDestinationObservationSchema = 'network.xyo.chain.bridge.observation.destination' as const
export type BridgeDestinationObservationSchema = typeof BridgeDestinationObservationSchema

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
 * Represents an observation that confirms a bridge action occurred on the destination chain.
 */
export type BridgeDestinationObservation = Payload<BridgeDestinationObservationFields, BridgeDestinationObservationSchema>

export const isBridgeDestinationObservation = isPayloadOfSchemaType<BridgeDestinationObservation>(BridgeDestinationObservationSchema)

export const asBridgeDestinationObservation = AsObjectFactory.create(isBridgeDestinationObservation)
