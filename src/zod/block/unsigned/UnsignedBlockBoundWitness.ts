import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import { UnsignedBoundWitnessZod } from '@xyo-network/boundwitness-model'
import type * as z from 'zod'

import { BlockBoundWitnessFieldsZod, BlockBoundWitnessMetaZod } from '../BlockBoundWitness.ts'

export const UnsignedBlockBoundWitnessZod = UnsignedBoundWitnessZod
  .safeExtend(BlockBoundWitnessFieldsZod.shape)
  .safeExtend(BlockBoundWitnessMetaZod.shape)

export type UnsignedBlockBoundWitness = z.infer<typeof UnsignedBlockBoundWitnessZod>

export const isUnsignedBlockBoundWitness = zodIsFactory(UnsignedBlockBoundWitnessZod)
export const asUnsignedBlockBoundWitness = zodAsFactory(UnsignedBlockBoundWitnessZod, 'asUnsignedBlockBoundWitness')
export const toUnsignedBlockBoundWitness = zodToFactory(UnsignedBlockBoundWitnessZod, 'toUnsignedBlockBoundWitness')
