import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/sdk-js'
import {
  PayloadZod,
  PayloadZodLoose, WithHashMetaZod, WithStorageMetaZod,
} from '@xyo-network/sdk-js'
import { z } from 'zod'

import { BlockBoundWitnessZod } from './BlockBoundWitness.ts'
import { SignedBlockBoundWitnessZod } from './signed/index.ts'

export const HydratedBlockZod = z.tuple([
  BlockBoundWitnessZod,
  z.array(PayloadZodLoose),
])

export type HydratedBlock = z.infer<typeof HydratedBlockZod>

export const isHydratedBlock = zodIsFactory(HydratedBlockZod)
export const asHydratedBlock = zodAsFactory(HydratedBlockZod, 'asHydratedBlock')
export const toHydratedBlock = zodToFactory(HydratedBlockZod, 'toHydratedBlock')

export const HydratedBlockWithHashMetaZod = z.tuple([
  WithHashMetaZod(BlockBoundWitnessZod),
  z.array(WithHashMetaZod(PayloadZod).loose()),
])

export type HydratedBlockWithHashMeta = z.infer<typeof HydratedBlockWithHashMetaZod>

export const isHydratedBlockWithHashMeta = zodIsFactory(HydratedBlockWithHashMetaZod)
export const asHydratedBlockWithHashMeta = zodAsFactory(HydratedBlockWithHashMetaZod, 'asHydratedBlockWithHashMeta')
export const toHydratedBlockWithHashMeta = zodToFactory(HydratedBlockWithHashMetaZod, 'toHydratedBlockWithHashMeta')

export const HydratedBlockWithStorageMetaZod = z.tuple([
  WithStorageMetaZod(BlockBoundWitnessZod),
  z.array(WithStorageMetaZod(PayloadZod).loose()),
])

export type HydratedBlockWithStorageMeta = z.infer<typeof HydratedBlockWithStorageMetaZod>

export const isHydratedBlockWithStorageMeta = zodIsFactory(HydratedBlockWithStorageMetaZod)
export const asHydratedBlockWithStorageMeta = zodAsFactory(HydratedBlockWithStorageMetaZod, 'asHydratedBlockWithStorageMeta')
export const toHydratedBlockWithStorageMeta = zodToFactory(HydratedBlockWithStorageMetaZod, 'toHydratedBlockWithStorageMeta')

export const SignedHydratedBlockZod = z.tuple([
  SignedBlockBoundWitnessZod,
  z.array(PayloadZod.loose()),
])

export type SignedHydratedBlock = z.infer<typeof SignedHydratedBlockZod>

export const isSignedHydratedBlock = zodIsFactory(SignedHydratedBlockZod)
export const asSignedHydratedBlock = zodAsFactory(SignedHydratedBlockZod, 'asSignedHydratedBlock')
export const toSignedHydratedBlock = zodToFactory(SignedHydratedBlockZod, 'toSignedHydratedBlock')

export const SignedHydratedBlockToJsonZod = z.tuple([
  SignedBlockBoundWitnessZod,
  z.array(PayloadZod.loose()),
])

export type SignedHydratedBlockToJson = z.infer<typeof SignedHydratedBlockToJsonZod>

export const isSignedHydratedBlockToJson = zodIsFactory(SignedHydratedBlockToJsonZod)
export const asSignedHydratedBlockToJson = zodAsFactory(SignedHydratedBlockToJsonZod, 'asSignedHydratedBlockToJson')
export const toSignedHydratedBlockToJson = zodToFactory(SignedHydratedBlockToJsonZod, 'toSignedHydratedBlockToJson')

export const SignedHydratedBlockWithHashMetaZod = z.tuple([
  WithHashMetaZod(SignedBlockBoundWitnessZod),
  z.array(WithHashMetaZod(PayloadZod).loose()),
])

export type SignedHydratedBlockWithHashMeta = z.infer<typeof SignedHydratedBlockWithHashMetaZod>

export const SignedHydratedBlockWithHashMetaishZod = z.tuple([
  z.union([WithHashMetaZod(SignedBlockBoundWitnessZod)]),
  z.array(WithHashMetaZod(PayloadZod).loose()),
])

export const isSignedHydratedBlockWithHashMeta = zodIsFactory(SignedHydratedBlockWithHashMetaZod)
export const asSignedHydratedBlockWithHashMeta = zodAsFactory(SignedHydratedBlockWithHashMetaZod, 'asSignedHydratedBlockWithHashMeta')

export const toSignedHydratedBlockWithHashMeta = zodToFactory(SignedHydratedBlockWithHashMetaZod, 'toSignedHydratedBlockWithHashMeta')

export const SignedHydratedBlockWithStorageMetaZod = z.tuple([
  WithStorageMetaZod(SignedBlockBoundWitnessZod),
  z.array(WithStorageMetaZod(PayloadZod).loose()),
])
export type SignedHydratedBlockWithStorageMeta = z.infer<typeof SignedHydratedBlockWithStorageMetaZod>

export const isSignedHydratedBlockWithStorageMeta = zodIsFactory(SignedHydratedBlockWithStorageMetaZod)
export const asSignedHydratedBlockWithStorageMeta = zodAsFactory(SignedHydratedBlockWithStorageMetaZod, 'asSignedHydratedBlockWithStorageMeta')
export const toSignedHydratedBlockWithStorageMeta = zodToFactory(SignedHydratedBlockWithStorageMetaZod, 'toSignedHydratedBlockWithStorageMeta')

export const SignedHydratedBlockWithStorageMetaishZod = z.tuple([
  z.union([WithStorageMetaZod(SignedBlockBoundWitnessZod)]),
  z.array(WithStorageMetaZod(PayloadZod).loose()),
])
