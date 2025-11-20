import {
  PayloadZodLoose, WithHashMetaZod, WithStorageMetaZod,
} from '@xyo-network/payload-model'
import * as z from 'zod'

import {
  BlockBoundWitnessZod,
  SignedBlockBoundWitnessZod,
} from './BlockBoundWitness.ts'

export const HydratedBlockZod = z.tuple([
  BlockBoundWitnessZod,
  z.array(PayloadZodLoose),
])

export type HydratedBlock = z.infer<typeof HydratedBlockZod>

export const HydratedBlockWithStorageMetaZod = z.tuple([
  WithStorageMetaZod(BlockBoundWitnessZod),
  z.array(WithStorageMetaZod(PayloadZodLoose)),
])

export type HydratedBlockWithStorageMeta = z.infer<typeof HydratedBlockWithStorageMetaZod>

export const SignedHydratedBlockZod = z.tuple([
  SignedBlockBoundWitnessZod,
  z.array(PayloadZodLoose),
])

export type SignedHydratedBlock = z.infer<typeof SignedHydratedBlockZod>

export const SignedHydratedBlockToJsonZod = z.tuple([
  SignedBlockBoundWitnessZod,
  z.array(PayloadZodLoose),
])

export type SignedHydratedBlockToJson = z.infer<typeof SignedHydratedBlockToJsonZod>

export const SignedHydratedBlockWithHashMetaZod = z.tuple([
  WithHashMetaZod(SignedBlockBoundWitnessZod),
  z.array(WithHashMetaZod(PayloadZodLoose)),
])

export type SignedHydratedBlockWithHashMeta = z.infer<typeof SignedHydratedBlockWithHashMetaZod>

export const SignedHydratedBlockWithStorageMetaZod = z.tuple([
  WithStorageMetaZod(SignedBlockBoundWitnessZod),
  z.array(WithStorageMetaZod(PayloadZodLoose)),
])
