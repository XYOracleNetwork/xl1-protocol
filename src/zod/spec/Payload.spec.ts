import { asHash } from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import { PayloadZodLoose, WithStorageMetaZod } from '@xyo-network/payload-model'
import {
  describe, expect, it,
} from 'vitest'

import { type HashPayload, HashSchema } from '../../payload/index.ts'

const hashPayload: HashPayload = {
  schema: HashSchema,
  hash: asHash('e70f82c755ac75847f9d1c6b45d96099b343571d724e5383569724c85cc9d303', true),
}

const hashPayloadWithMeta = await PayloadBuilder.addStorageMeta(hashPayload)

describe('Payload', () => {
  it('should parse a HashPayload', () => {
    const result = PayloadZodLoose.safeParse(hashPayload)
    expect(result.success).toBe(true)
    expect(result.data).toEqual(hashPayload)
  })
  it('should parse a HashPayload with storage Meta', () => {
    const result = WithStorageMetaZod(PayloadZodLoose).safeParse(hashPayloadWithMeta)
    expect(result.success).toBe(true)
    expect(result.data).toEqual(hashPayloadWithMeta)
  })
})
