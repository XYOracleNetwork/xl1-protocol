import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

import type { BridgeDetailsFields } from './BridgeDetails.ts'

export const BridgeIntentSchema = 'network.xyo.chain.bridge.intent' as const
export type BridgeIntentSchema = typeof BridgeIntentSchema

/**
 * Represents an Addresses intent to initiate a token bridge.
 */
export interface BridgeIntentFields extends BridgeDetailsFields {
  /**
   * Unique identifier for replay protection
   */
  nonce: string
}

export type BridgeIntent = Payload<BridgeIntentFields, BridgeIntentSchema>

export const isBridgeIntent = isPayloadOfSchemaType<BridgeIntent>(BridgeIntentSchema)

export const asBridgeIntent = AsObjectFactory.create(isBridgeIntent)
