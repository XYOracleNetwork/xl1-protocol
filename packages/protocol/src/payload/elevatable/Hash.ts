import type { Hash } from '@xylabs/sdk-js'
import { AsObjectFactory } from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

export const HashSchema = 'network.xyo.hash' as const
export type HashSchema = typeof HashSchema

export interface HashFields {
  hash: Hash
}

export type HashPayload = Payload<HashFields, HashSchema>

export const isHashPayload = isPayloadOfSchemaType<HashPayload>(HashSchema)

export const asHashPayload = AsObjectFactory.create(isHashPayload)
export const asHashPayloadWithStorageMeta = AsObjectFactory.create(isHashPayload)
