import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

// xl1 = xl1 block number, epoch = epoch number, ethereum = ethereum block number
export type TimeDomain = 'xl1' | 'epoch' | 'ethereum'

export const TimeSchema = 'network.xyo.time' as const
export type TimeSchema = typeof TimeSchema

export interface TimeFields {
  // in milliseconds
  epoch: number
  // in block number
  ethereum?: number
  // in block number
  xl1?: number
}

export type TimePayload = Payload<TimeFields, TimeSchema>

export const isTimePayload = isPayloadOfSchemaType<TimePayload>(TimeSchema)

export const asTimePayload = AsObjectFactory.create(isTimePayload)
export const asTimePayloadWithStorageMeta = AsObjectFactory.create(isTimePayload)
