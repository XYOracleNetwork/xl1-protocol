import { HashZod } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import { isPayloadOfSchemaType, PayloadZodOfSchema } from '@xyo-network/payload-model'
import { z } from 'zod'

// xl1 = xl1 block number, epoch = epoch number, ethereum = ethereum block number
export type TimeDomain = 'xl1' | 'epoch' | 'ethereum'

export const TimeSchema = 'network.xyo.time' as const
export type TimeSchema = typeof TimeSchema

export const XL1TimeFieldsZod = z.object({
  // block number
  xl1: z.number().optional(),
  // block hash
  xl1Hash: HashZod.optional(),
})

export const EthereumTimeFieldsZod = z.object({
  // block number
  ethereum: z.number().optional(),
  // block hash
  ethereumHash: HashZod.optional(),
})

export const EpochTimeFieldsZod = z.object({
  // in milliseconds
  epoch: z.number(),
})

export const TimeFieldsZod = XL1TimeFieldsZod.extend(XL1TimeFieldsZod.shape).extend(EthereumTimeFieldsZod.shape).extend(EpochTimeFieldsZod.shape)

export const TimePayloadZod = PayloadZodOfSchema(TimeSchema).extend(TimeFieldsZod.shape)

export type TimePayload = z.infer<typeof TimePayloadZod>

// to prevent scaling problems, we use double the current time as a max safe epoch
export const isSafeEpoch = (value: unknown): value is number => {
  return typeof value === 'number' && value < 2 * Date.now()
}

export const isTimePayload = (value: unknown): value is TimePayload => {
  return isPayloadOfSchemaType<TimePayload>(TimeSchema)(value) && isSafeEpoch(value.epoch)
}

export const asTimePayload = AsObjectFactory.create(isTimePayload)
export const asTimePayloadWithStorageMeta = AsObjectFactory.create(isTimePayload)
