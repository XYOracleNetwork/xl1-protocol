import { HashZod } from '@xylabs/sdk-js'
import * as z from 'zod'

import { XL1BlockNumberZod } from '../model/index.ts'
import {
  BoundWitnessZod,
  SignedBoundWitnessZod,
  UnsignedBoundWitnessZod,
} from './BoundWitness.ts'
import { ChainZod } from './Chain.ts'

export const BlockBoundWitnessFieldsZod = z.object({
  block: XL1BlockNumberZod,
  chain: ChainZod,
  previous: HashZod.nullable(),
  protocol: z.number(),
  step_hashes: z.array(HashZod).optional(),
})

export const BlockBoundWitnessMetaZod = z.object({ $epoch: z.number() })

export const BlockBoundWitnessZod = BoundWitnessZod
  .extend(BlockBoundWitnessFieldsZod.shape)
  .extend(BlockBoundWitnessMetaZod.shape)

export type BlockBoundWitness = z.infer<typeof BlockBoundWitnessZod>

export const UnsignedBlockBoundWitnessZod = UnsignedBoundWitnessZod
  .extend(BlockBoundWitnessFieldsZod.shape)
  .extend(BlockBoundWitnessMetaZod.shape)

export type UnsignedBlockBoundWitness = z.infer<typeof UnsignedBlockBoundWitnessZod>

export const SignedBlockBoundWitnessZod = SignedBoundWitnessZod
  .extend(BlockBoundWitnessFieldsZod.shape)
  .extend(BlockBoundWitnessMetaZod.shape)

export type SignedBlockBoundWitness = z.infer<typeof SignedBlockBoundWitnessZod>
