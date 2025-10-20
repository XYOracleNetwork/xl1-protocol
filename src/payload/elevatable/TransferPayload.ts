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

export interface TransferFields<TContext extends {} = {}> extends FromFields {
  context?: TContext
  epoch: number
  // the amount that is being sent to other addresses
  transfers: Partial<Record<Address, Hex>>
}

// if this payload is included in a boundwitness, it needs to be available for inspection to be included in block
export type Transfer<TContext extends {} = {}> = Payload<TransferFields<TContext>, TransferSchema>

export const isTransfer = isPayloadOfSchemaType<Transfer>(TransferSchema)

export const asTransfer = AsObjectFactory.create(isTransfer)
