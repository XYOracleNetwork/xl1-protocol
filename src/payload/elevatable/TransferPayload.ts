import {
  type Address,
  AddressZod,
  type Hex,
  HexZod,
} from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import { isPayloadOfSchemaType, PayloadZod } from '@xyo-network/payload-model'
import z from 'zod'

import type { FromFields } from './Executable.ts'

export const TransferSchema = 'network.xyo.transfer' as const
export type TransferSchema = typeof TransferSchema

export interface TransferFields<TContext extends {} = {}> extends FromFields {
  context?: TContext
  epoch: number
  // the amount that is being sent to other addresses
  transfers: Partial<Record<Address, Hex>>
}

export const TransferFieldsZod = z.object({
  $opCodes: z.array(z.string()).optional(),
  context: z.record(z.string(), z.json()).optional(),
  epoch: z.number(),
  from: AddressZod,
  transfers: z.record(AddressZod, HexZod),
})

export const PayloadZodOfSchema = <S extends string>(schema: S) => PayloadZod.extend({ schema: z.literal(schema) })

export const TransferZod = PayloadZodOfSchema(TransferSchema).extend(TransferFieldsZod.shape)

export type Transfer = z.infer<typeof TransferZod>

export const isTransfer = isPayloadOfSchemaType<Transfer>(TransferSchema)

export const asTransfer = AsObjectFactory.create(isTransfer)
