import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/sdk-js'
import { SignedBoundWitnessZod } from '@xyo-network/boundwitness-model'
import type { z } from 'zod'

import { BlockBoundWitnessFieldsZod, BlockBoundWitnessMetaZod } from '../BlockBoundWitness.ts'

export const SignedBlockBoundWitnessZod = SignedBoundWitnessZod
  .safeExtend(BlockBoundWitnessFieldsZod.shape)
  .safeExtend(BlockBoundWitnessMetaZod.shape)

export type SignedBlockBoundWitness = z.infer<typeof SignedBlockBoundWitnessZod>

export const isSignedBlockBoundWitness = zodIsFactory(SignedBlockBoundWitnessZod)
export const asSignedBlockBoundWitness = zodAsFactory(SignedBlockBoundWitnessZod, 'asSignedBlockBoundWitness')
export const toSignedBlockBoundWitness = zodToFactory(SignedBlockBoundWitnessZod, 'toSignedBlockBoundWitness')
