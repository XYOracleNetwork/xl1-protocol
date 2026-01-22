import { AsObjectFactory } from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfZodType } from '@xyo-network/payload-model'
import { z } from 'zod'

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

export const isBridgeIntent = isPayloadOfZodType<BridgeIntent>(
  BridgeIntentFieldsZod,
  BridgeIntentSchema,
)

export const asBridgeIntent = AsObjectFactory.create(isBridgeIntent)
