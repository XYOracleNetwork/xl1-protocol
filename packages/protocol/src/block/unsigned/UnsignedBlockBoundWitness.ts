import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/sdk-js'
import { UnsignedBoundWitnessZod } from '@xyo-network/sdk-js'
import type { z } from 'zod'

import { BlockBoundWitnessFieldsZod, BlockBoundWitnessMetaZod } from '../BlockBoundWitness.ts'

export const UnsignedBlockBoundWitnessZod = UnsignedBoundWitnessZod
  .safeExtend(BlockBoundWitnessFieldsZod.shape)
  .safeExtend(BlockBoundWitnessMetaZod.shape)

export type UnsignedBlockBoundWitness = z.infer<typeof UnsignedBlockBoundWitnessZod>

export const isUnsignedBlockBoundWitness = zodIsFactory(UnsignedBlockBoundWitnessZod)
export const asUnsignedBlockBoundWitness = zodAsFactory(UnsignedBlockBoundWitnessZod, 'asUnsignedBlockBoundWitness')
export const toUnsignedBlockBoundWitness = zodToFactory(UnsignedBlockBoundWitnessZod, 'toUnsignedBlockBoundWitness')
