import type { Hex } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

import type { BridgeDetailsFields } from './BridgeDetails.ts'

export const BridgeSourceObservationSchema = 'network.xyo.chain.bridge.observation.source' as const
export type BridgeSourceObservationSchema = typeof BridgeSourceObservationSchema

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
 * Represents an observation that confirms a bridge action occurred on the source chain.
 */
export type BridgeSourceObservation = Payload<BridgeSourceObservationFields, BridgeSourceObservationSchema>

export const isBridgeSourceObservation = isPayloadOfSchemaType<BridgeSourceObservation>(BridgeSourceObservationSchema)

export const asBridgeSourceObservation = AsObjectFactory.create(isBridgeSourceObservation)
