import { zodToAsyncFactory } from '@xylabs/zod'
import {
  isAnyPayload, isStorageMeta, PayloadZodLoose,
} from '@xyo-network/payload-model'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import type { z } from 'zod'

export const WithStorageMetaishZod = PayloadZodLoose.transform(async (data) => {
  if (isAnyPayload(data)) {
    if (isStorageMeta(data)) {
      return data
    }
    return await PayloadBuilder.addStorageMeta(data)
  }
  throw new Error('Invalid WithStorageMetaish format')
})

export type WithStorageMetaish = z.input<typeof WithStorageMetaishZod>

export const toWithStorageMeta = zodToAsyncFactory(
  WithStorageMetaishZod,
  'toWithStorageMeta',
)
