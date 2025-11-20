import { HashZod } from '@xylabs/sdk-js'
import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import { HashMetaZod, StorageMetaZod } from '@xyo-network/payload-model'
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

export const isBlockBoundWitness = zodIsFactory(BlockBoundWitnessZod)
export const asBlockBoundWitness = zodAsFactory(BlockBoundWitnessZod, 'asBlockBoundWitness')
export const toBlockBoundWitness = zodToFactory(BlockBoundWitnessZod, 'toBlockBoundWitness')

export const BlockBoundWitnessWithHashMetaZod = BlockBoundWitnessZod
  .extend(HashMetaZod.shape)

export type BlockBoundWitnessWithHashMeta = z.infer<typeof BlockBoundWitnessWithHashMetaZod>

export const isBlockBoundWitnessWithHashMeta = zodIsFactory(BlockBoundWitnessWithHashMetaZod)
export const asBlockBoundWitnessWithHashMeta = zodAsFactory(BlockBoundWitnessWithHashMetaZod, 'asBlockBoundWitnessWithHashMeta')
export const toBlockBoundWitnessWithHashMeta = zodToFactory(BlockBoundWitnessWithHashMetaZod, 'toBlockBoundWitnessWithHashMeta')

export const BlockBoundWitnessWithStorageMetaZod = BlockBoundWitnessZod
  .extend(StorageMetaZod.shape)

export type BlockBoundWitnessWithStorageMeta = z.infer<typeof BlockBoundWitnessWithStorageMetaZod>

export const isBlockBoundWitnessWithStorageMeta = zodIsFactory(BlockBoundWitnessWithStorageMetaZod)
export const asBlockBoundWitnessWithStorageMeta = zodAsFactory(BlockBoundWitnessWithStorageMetaZod, 'asBlockBoundWitnessWithStorageMeta')
export const toBlockBoundWitnessWithStorageMeta = zodToFactory(BlockBoundWitnessWithStorageMetaZod, 'toBlockBoundWitnessWithStorageMeta')

export const UnsignedBlockBoundWitnessZod = UnsignedBoundWitnessZod
  .extend(BlockBoundWitnessFieldsZod.shape)
  .extend(BlockBoundWitnessMetaZod.shape)

export type UnsignedBlockBoundWitness = z.infer<typeof UnsignedBlockBoundWitnessZod>

export const isUnsignedBlockBoundWitness = zodIsFactory(UnsignedBlockBoundWitnessZod)
export const asUnsignedBlockBoundWitness = zodAsFactory(UnsignedBlockBoundWitnessZod, 'asUnsignedBlockBoundWitness')
export const toUnsignedBlockBoundWitness = zodToFactory(UnsignedBlockBoundWitnessZod, 'toUnsignedBlockBoundWitness')

export const UnsignedBlockBoundWitnessWithHashMetaZod = UnsignedBlockBoundWitnessZod.extend(HashMetaZod.shape)

export type UnsignedBlockBoundWitnessWithHashMeta = z.infer<typeof UnsignedBlockBoundWitnessWithHashMetaZod>

export const isUnsignedBlockBoundWitnessWithHashMeta = zodIsFactory(UnsignedBlockBoundWitnessWithHashMetaZod)
export const asUnsignedBlockBoundWitnessWithHashMeta = zodAsFactory(UnsignedBlockBoundWitnessWithHashMetaZod, 'asUnsignedBlockBoundWitnessWithHashMeta')
export const toUnsignedBlockBoundWitnessWithHashMeta = zodToFactory(UnsignedBlockBoundWitnessWithHashMetaZod, 'toUnsignedBlockBoundWitnessWithHashMeta')

export const UnsignedBlockBoundWitnessWithStorageMetaZod = UnsignedBlockBoundWitnessZod.extend(StorageMetaZod.shape)

export type UnsignedBlockBoundWitnessWithStorageMeta = z.infer<typeof UnsignedBlockBoundWitnessWithStorageMetaZod>

export const isUnsignedBlockBoundWitnessWithStorageMeta = zodIsFactory(UnsignedBlockBoundWitnessWithStorageMetaZod)
export const asUnsignedBlockBoundWitnessWithStorageMeta = zodAsFactory(
  UnsignedBlockBoundWitnessWithStorageMetaZod,
  'asUnsignedBlockBoundWitnessWithStorageMeta',
)
export const toUnsignedBlockBoundWitnessWithStorageMeta = zodToFactory(
  UnsignedBlockBoundWitnessWithStorageMetaZod,
  'toUnsignedBlockBoundWitnessWithStorageMeta',
)

export const SignedBlockBoundWitnessZod = SignedBoundWitnessZod
  .extend(BlockBoundWitnessFieldsZod.shape)
  .extend(BlockBoundWitnessMetaZod.shape)

export type SignedBlockBoundWitness = z.infer<typeof SignedBlockBoundWitnessZod>

export const isSignedBlockBoundWitness = zodIsFactory(SignedBlockBoundWitnessZod)
export const asSignedBlockBoundWitness = zodAsFactory(SignedBlockBoundWitnessZod, 'asSignedBlockBoundWitness')
export const toSignedBlockBoundWitness = zodToFactory(SignedBlockBoundWitnessZod, 'toSignedBlockBoundWitness')

export const SignedBlockBoundWitnessWithHashMetaZod = SignedBlockBoundWitnessZod.extend(HashMetaZod.shape)

export type SignedBlockBoundWitnessWithHashMeta = z.infer<typeof SignedBlockBoundWitnessWithHashMetaZod>

export const isSignedBlockBoundWitnessWithHashMeta = zodIsFactory(SignedBlockBoundWitnessWithHashMetaZod)
export const asSignedBlockBoundWitnessWithHashMeta = zodAsFactory(SignedBlockBoundWitnessWithHashMetaZod, 'asSignedBlockBoundWitnessWithHashMeta')
export const toSignedBlockBoundWitnessWithHashMeta = zodToFactory(SignedBlockBoundWitnessWithHashMetaZod, 'toSignedBlockBoundWitnessWithHashMeta')

export const SignedBlockBoundWitnessWithStorageMetaZod = SignedBlockBoundWitnessZod.extend(StorageMetaZod.shape)

export type SignedBlockBoundWitnessWithStorageMeta = z.infer<typeof SignedBlockBoundWitnessWithStorageMetaZod>

export const isSignedBlockBoundWitnessWithStorageMeta = zodIsFactory(SignedBlockBoundWitnessWithStorageMetaZod)
export const asSignedBlockBoundWitnessWithStorageMeta = zodAsFactory(
  SignedBlockBoundWitnessWithStorageMetaZod,
  'asSignedBlockBoundWitnessWithStorageMeta',
)
export const toSignedBlockBoundWitnessWithStorageMeta = zodToFactory(
  SignedBlockBoundWitnessWithStorageMetaZod,
  'toSignedBlockBoundWitnessWithStorageMeta',
)
