import type {
  Address,
  Hex,
} from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

import type { FromFields } from './Executable.ts'

export const TransferRequestSchema = 'network.xyo.transfer.request' as const
export type TransferRequestSchema = typeof TransferRequestSchema

/* The initial use for this is for a network staker to request a transfer from the step reward account to them for the rewards they are owed */
/* By definition, a request is valid for 1000 blocks following its inclusion in a block or until the request has been filled */

export interface TransferRequestFields extends FromFields {
  epoch: number
  // the amount that is requested to be sent to other addresses
  transfers: Partial<Record<Address, Hex>>
}

// if this payload is included in a boundwitness, it needs to be available for inspection to be included in block
export type TransferRequest = Payload<TransferRequestFields, TransferRequestSchema>

export const isTransferRequest = isPayloadOfSchemaType<TransferRequest>(TransferRequestSchema)

export const asTransferRequest = AsObjectFactory.create(isTransferRequest)
