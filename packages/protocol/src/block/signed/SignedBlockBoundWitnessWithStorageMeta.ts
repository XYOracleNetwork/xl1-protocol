import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/sdk-js'
import { StorageMetaZod } from '@xyo-network/payload-model'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import type { z } from 'zod'

import { isSignedBlockBoundWitness, SignedBlockBoundWitnessZod } from './SignedBlockBoundWitness.ts'

export const SignedBlockBoundWitnessWithStorageMetaZod = SignedBlockBoundWitnessZod.safeExtend(StorageMetaZod.shape)

export type SignedBlockBoundWitnessWithStorageMeta = z.infer<typeof SignedBlockBoundWitnessWithStorageMetaZod>

export const isSignedBlockBoundWitnessWithStorageMeta = zodIsFactory(SignedBlockBoundWitnessWithStorageMetaZod)
export const asSignedBlockBoundWitnessWithStorageMeta = zodAsFactory(
  SignedBlockBoundWitnessWithStorageMetaZod,
  'asSignedBlockBoundWitnessWithStorageMeta',
)

export const SignedBlockBoundWitnessWithStorageMetaishZod = SignedBlockBoundWitnessZod.transform(async (data) => {
  if (isSignedBlockBoundWitnessWithStorageMeta(data)) {
    return data
  }
  if (isSignedBlockBoundWitness(data)) {
    return await PayloadBuilder.addStorageMeta(data)
  }
  throw new Error('Invalid SignedBlockBoundWitnessWithStorageMetaish format')
})

export type SignedBlockBoundWitnessWithStorageMetaish = z.input<typeof SignedBlockBoundWitnessWithStorageMetaishZod>

export const toSignedBlockBoundWitnessWithStorageMeta = zodToFactory(
  SignedBlockBoundWitnessWithStorageMetaishZod,
  'toSignedBlockBoundWitnessWithStorageMeta',
)
