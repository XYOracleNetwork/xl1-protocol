import type { Address, EthAddress } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

import type { FromFields } from './Executable.ts'

export const BridgeBackSchema = 'network.xyo.chain.bridge.back' as const
export type BridgeBackSchema = typeof BridgeBackSchema

/* Report a bridging from WXL1 to XL1 */

export interface BridgeBackFields extends FromFields {
  destAddress: Address
  src: 'ethereum'
  srcAddress: EthAddress
  // usually the source's block number
  srcTime: number
}

// if this payload is included in a boundwitness, it needs to be available for inspection to be included in block
export type BridgeBack = Payload<BridgeBackFields, BridgeBackSchema>

export const isBridgeBack = isPayloadOfSchemaType<BridgeBack>(BridgeBackSchema)

export const asBridgeBack = AsObjectFactory.create(isBridgeBack)
