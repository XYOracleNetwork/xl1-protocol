import type {
  Address,
  Hex,
} from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

import type { FromFields } from './Executable.ts'

export const TransferSchema = 'network.xyo.transfer' as const
export type TransferSchema = typeof TransferSchema

export interface TransferFields extends FromFields {
  epoch: number
  // the amount that is being sent to another address
  transfers: Record<Address, Hex>
}

// if this payload is included in a boundwitness, it needs to be available for inspection to be included in block
export type Transfer = Payload<TransferFields, TransferSchema>

export const isTransfer = isPayloadOfSchemaType<Transfer>(TransferSchema)

export const asTransfer = AsObjectFactory.create(isTransfer)
export const asOptionalTransfer = AsObjectFactory.createOptional(isTransfer)
