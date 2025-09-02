import type { Hash } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

import type { FromFields } from './Executable.ts'

export const BridgeCompleteSchema = 'network.xyo.chain.bridge.complete' as const
export type BridgeCompleteSchema = typeof BridgeCompleteSchema

/* Complete a bridging from XL1 to WXL1 */

export interface BridgeCompleteFields extends FromFields {
  // usually the destination's block number
  destTime: number
  request: Hash
}

// if this payload is included in a boundwitness, it needs to be available for inspection to be included in block
export type BridgeComplete = Payload<BridgeCompleteFields, BridgeCompleteSchema>

export const isBridgeComplete = isPayloadOfSchemaType<BridgeComplete>(BridgeCompleteSchema)

export const asBridgeComplete = AsObjectFactory.create(isBridgeComplete)
