import { zodToAsyncFactory } from '@xylabs/zod'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import {
  isAnyPayload, isStorageMeta, PayloadZodLoose,
} from '@xyo-network/payload-model'
import type z from 'zod'

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
