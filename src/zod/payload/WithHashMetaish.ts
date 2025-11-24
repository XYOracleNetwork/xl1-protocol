import { zodToAsyncFactory } from '@xylabs/zod'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import {
  isAnyPayload, isHashMeta, PayloadZodLoose,
} from '@xyo-network/payload-model'
import type z from 'zod'

export const WithHashMetaishZod = PayloadZodLoose.transform(async (data) => {
  if (isAnyPayload(data)) {
    if (isHashMeta(data)) {
      return data
    }
    return await PayloadBuilder.addHashMeta(data)
  }
  throw new Error('Invalid WithHashMetaish format')
})

export type WithHashMetaish = z.input<typeof WithHashMetaishZod>

export const toWithHashMeta = zodToAsyncFactory(
  WithHashMetaishZod,
  'toWithHashMeta',
)
