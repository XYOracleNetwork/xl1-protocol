import type {
  Address, EthAddress, Hex,
} from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

import type { FromFields } from './Executable.ts'

/* Request a bridging from XL1 to WXL1 */

export const BridgeRequestSchema = 'network.xyo.chain.bridge.request' as const
export type BridgeRequestSchema = typeof BridgeRequestSchema

export interface BridgeRequestFields extends FromFields {
  amount: Hex

  dest: 'ethereum'
  destAddress: EthAddress

  // xl1 address
  srcAddress: Address
}

// if this payload is included in a boundwitness, it needs to be available for inspection to be included in block
export type BridgeRequest = Payload<BridgeRequestFields, BridgeRequestSchema>

export const isBridgeRequest = isPayloadOfSchemaType<BridgeRequest>(BridgeRequestSchema)

export const asBridgeRequest = AsObjectFactory.create(isBridgeRequest)
