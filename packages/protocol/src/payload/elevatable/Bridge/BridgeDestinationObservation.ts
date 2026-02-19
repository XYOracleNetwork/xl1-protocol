import { AsObjectFactory, HexZod } from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/sdk-js'
import { asSchema, isPayloadOfZodType } from '@xyo-network/sdk-js'
import type { z } from 'zod'

import { BridgeDetailsFieldsZod } from './BridgeDetails.ts'

export const BridgeDestinationObservationSchema = asSchema('network.xyo.chain.bridge.observation.destination', true)
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

export const isBridgeDestinationObservation = isPayloadOfZodType<BridgeDestinationObservation>(
  BridgeDestinationObservationFieldsZod,
  BridgeDestinationObservationSchema,
)

export const asBridgeDestinationObservation = AsObjectFactory.create(isBridgeDestinationObservation)
