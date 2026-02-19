import type { Hash } from '@xylabs/sdk-js'
import { AsObjectFactory } from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/sdk-js'
import { asSchema, isPayloadOfSchemaType } from '@xyo-network/sdk-js'

export const HashSchema = asSchema('network.xyo.hash', true)
export type HashSchema = typeof HashSchema

export interface HashFields {
  hash: Hash
}

export type HashPayload = Payload<HashFields, HashSchema>

export const isHashPayload = isPayloadOfSchemaType<HashPayload>(HashSchema)

export const asHashPayload = AsObjectFactory.create(isHashPayload)
export const asHashPayloadWithStorageMeta = AsObjectFactory.create(isHashPayload)
