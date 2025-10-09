import { HexZod } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'
import type z from 'zod'

import { BridgeDetailsFieldsZod } from './BridgeDetails.ts'

export const BridgeDestinationObservationSchema = 'network.xyo.chain.bridge.observation.destination' as const
export type BridgeDestinationObservationSchema = typeof BridgeDestinationObservationSchema

/**
 * Represents an observation that confirms a bridge action occurred on the destination chain.
 */
export const BridgeDestinationObservationFieldsZod = BridgeDetailsFieldsZod.extend({
  /**
   * Destination chain confirmation
   */
  destConfirmation: HexZod.optional().describe('Destination chain confirmation'),
})

export type BridgeDestinationObservationFields = z.infer<typeof BridgeDestinationObservationFieldsZod>

/**
 * Represents an observation that confirms a bridge action occurred on the destination chain.
 */
export type BridgeDestinationObservation = Payload<BridgeDestinationObservationFields, BridgeDestinationObservationSchema>

export const isBridgeDestinationObservation = isPayloadOfSchemaType<BridgeDestinationObservation>(BridgeDestinationObservationSchema)

export const asBridgeDestinationObservation = AsObjectFactory.create(isBridgeDestinationObservation)
