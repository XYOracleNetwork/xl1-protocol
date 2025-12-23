import {
  AddressZod,
  HexZod,
} from '@xylabs/hex'
import { AsObjectFactory, JsonObjectZod } from '@xylabs/object'
import { isPayloadOfSchemaType, PayloadZodOfSchema } from '@xyo-network/payload-model'
import { z } from 'zod'

export const TransferSchema = 'network.xyo.transfer' as const
export type TransferSchema = typeof TransferSchema

export const TransferFieldsZod = z.object({
  // Removed as only transaction have opCodes
  // $opCodes: z.array(z.string()).optional(),
  context: JsonObjectZod.optional(),
  epoch: z.number(),
  from: AddressZod,
  transfers: z.record(AddressZod, HexZod),
})

export const TransferZod = PayloadZodOfSchema(TransferSchema).extend(TransferFieldsZod.shape)

export type Transfer = z.infer<typeof TransferZod>

export const isTransfer = isPayloadOfSchemaType<Transfer>(TransferSchema)

export const asTransfer = AsObjectFactory.create(isTransfer)
