import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/sdk-js'
import { HashMetaZod } from '@xyo-network/payload-model'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import type { z } from 'zod'

import { isSignedBlockBoundWitness, SignedBlockBoundWitnessZod } from './SignedBlockBoundWitness.ts'

export const SignedBlockBoundWitnessWithHashMetaZod = SignedBlockBoundWitnessZod.safeExtend(HashMetaZod.shape)

export type SignedBlockBoundWitnessWithHashMeta = z.infer<typeof SignedBlockBoundWitnessWithHashMetaZod>

export const isSignedBlockBoundWitnessWithHashMeta = zodIsFactory(SignedBlockBoundWitnessWithHashMetaZod)
export const asSignedBlockBoundWitnessWithHashMeta = zodAsFactory(SignedBlockBoundWitnessWithHashMetaZod, 'asSignedBlockBoundWitnessWithHashMeta')

export const SignedBlockBoundWitnessWithHashMetaishZod = SignedBlockBoundWitnessZod.transform(async (data) => {
  if (isSignedBlockBoundWitnessWithHashMeta(data)) {
    return data
  }
  if (isSignedBlockBoundWitness(data)) {
    return await PayloadBuilder.addHashMeta(data)
  }
  throw new Error('Invalid SignedBlockBoundWitnessWithHashMetaish format')
})

export type SignedBlockBoundWitnessWithHashMetaish = z.input<typeof SignedBlockBoundWitnessWithHashMetaishZod>

export const toSignedBlockBoundWitnessWithHashMeta = zodToFactory(SignedBlockBoundWitnessWithHashMetaZod, 'toSignedBlockBoundWitnessWithHashMeta')
