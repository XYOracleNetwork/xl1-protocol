import type { Hash } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

// xl1 = xl1 block number, epoch = epoch number, ethereum = ethereum block number
export type TimeDomain = 'xl1' | 'epoch' | 'ethereum'

export const TimeSchema = 'network.xyo.time' as const
export type TimeSchema = typeof TimeSchema

export interface XL1TimeFields {
  // block number
  xl1?: number
  // block hash
  xl1Hash?: Hash
}

export interface EthereumTimeFields {
  // block number
  ethereum?: number
  // block hash
  ethereumHash?: Hash
}

export interface TimeFields extends XL1TimeFields, EthereumTimeFields {
  // in milliseconds
  epoch: number
}

export type TimePayload = Payload<TimeFields, TimeSchema>

// to prevent scaling problems, we use double the current time as a max safe epoch
export const isSafeEpoch = (value: unknown): value is number => {
  return typeof value === 'number' && value < 2 * Date.now()
}

export const isTimePayload = (value: unknown): value is TimePayload => {
  return isPayloadOfSchemaType<TimePayload>(TimeSchema)(value) && isSafeEpoch(value.epoch)
}

export const asTimePayload = AsObjectFactory.create(isTimePayload)
export const asTimePayloadWithStorageMeta = AsObjectFactory.create(isTimePayload)
