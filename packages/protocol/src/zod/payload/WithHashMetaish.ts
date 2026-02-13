import { zodToAsyncFactory } from '@xylabs/zod'
import {
  isAnyPayload, isHashMeta, PayloadZodLoose,
} from '@xyo-network/payload-model'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import type { z } from 'zod'

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
