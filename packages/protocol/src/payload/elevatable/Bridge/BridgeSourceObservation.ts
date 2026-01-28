import { AsObjectFactory, HexZod } from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/payload-model'
import { asSchema, isPayloadOfZodType } from '@xyo-network/payload-model'
import type { z } from 'zod'

import { BridgeDetailsFieldsZod } from './BridgeDetails.ts'

export const BridgeSourceObservationSchema = asSchema('network.xyo.chain.bridge.observation.source', true)
export type BridgeSourceObservationSchema = typeof BridgeSourceObservationSchema

/**
 * Represents an observation that confirms a bridge action occurred on the source chain.
 */
export const BridgeSourceObservationFieldsZod = BridgeDetailsFieldsZod.extend({
  /**
   * Source chain confirmation
   */
  srcConfirmation: HexZod.optional().describe('Source chain confirmation'),
})

export type BridgeSourceObservationFields = z.infer<typeof BridgeSourceObservationFieldsZod>
/**
 * Represents an observation that confirms a bridge action occurred on the source chain.
 */
export type BridgeSourceObservation = Payload<BridgeSourceObservationFields, BridgeSourceObservationSchema>

export const isBridgeSourceObservation = isPayloadOfZodType<BridgeSourceObservation>(
  BridgeSourceObservationFieldsZod,
  BridgeSourceObservationSchema,
)

export const asBridgeSourceObservation = AsObjectFactory.create(isBridgeSourceObservation)
