import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'
import z from 'zod'

import { BridgeDetailsFieldsZod } from './BridgeDetails.ts'

export const BridgeIntentSchema = 'network.xyo.chain.bridge.intent' as const
export type BridgeIntentSchema = typeof BridgeIntentSchema

/**
 * Represents an Address's intent to initiate a token bridge.
 */
export const BridgeIntentFieldsZod = BridgeDetailsFieldsZod.extend({
  /**
   * Unique identifier for replay protection
   */
  nonce: z.string().describe('Unique identifier for replay protection'),
})

export type BridgeIntentFields = z.infer<typeof BridgeIntentFieldsZod>

export type BridgeIntent = Payload<BridgeIntentFields, BridgeIntentSchema>

export const isBridgeIntent = isPayloadOfSchemaType<BridgeIntent>(BridgeIntentSchema)

export const asBridgeIntent = AsObjectFactory.create(isBridgeIntent)
