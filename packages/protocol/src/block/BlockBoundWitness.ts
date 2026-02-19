import {
  HashZod,
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/sdk-js'
import {
  BoundWitnessZod, HashMetaZod, StorageMetaZod,
} from '@xyo-network/sdk-js'
import { z } from 'zod'

import { XL1BlockNumberZod } from '../BlockNumber/index.ts'
import { ChainZod } from '../chain/index.ts'

export const BlockBoundWitnessFieldsZod = z.object({
  block: XL1BlockNumberZod,
  chain: ChainZod,
  previous: HashZod.nullable(),
  protocol: z.number().optional(),
  step_hashes: z.array(HashZod).optional(),
})

export const BlockBoundWitnessMetaZod = z.object({ $epoch: z.number() })

export const BlockBoundWitnessZod = z.intersection(z.intersection(BoundWitnessZod, BlockBoundWitnessFieldsZod), BlockBoundWitnessMetaZod)

export type BlockBoundWitness = z.infer<typeof BlockBoundWitnessZod>

export const isBlockBoundWitness = zodIsFactory(BlockBoundWitnessZod)
export const asBlockBoundWitness = zodAsFactory(BlockBoundWitnessZod, 'asBlockBoundWitness')
export const toBlockBoundWitness = zodToFactory(BlockBoundWitnessZod, 'toBlockBoundWitness')

export const BlockBoundWitnessWithHashMetaZod = z.intersection(BlockBoundWitnessZod, HashMetaZod)

export type BlockBoundWitnessWithHashMeta = z.infer<typeof BlockBoundWitnessWithHashMetaZod>

export const isBlockBoundWitnessWithHashMeta = zodIsFactory(BlockBoundWitnessWithHashMetaZod)
export const asBlockBoundWitnessWithHashMeta = zodAsFactory(BlockBoundWitnessWithHashMetaZod, 'asBlockBoundWitnessWithHashMeta')
export const toBlockBoundWitnessWithHashMeta = zodToFactory(BlockBoundWitnessWithHashMetaZod, 'toBlockBoundWitnessWithHashMeta')

export const BlockBoundWitnessWithStorageMetaZod = z.intersection(BlockBoundWitnessZod, StorageMetaZod)

export type BlockBoundWitnessWithStorageMeta = z.infer<typeof BlockBoundWitnessWithStorageMetaZod>

export const isBlockBoundWitnessWithStorageMeta = zodIsFactory(BlockBoundWitnessWithStorageMetaZod)
export const asBlockBoundWitnessWithStorageMeta = zodAsFactory(BlockBoundWitnessWithStorageMetaZod, 'asBlockBoundWitnessWithStorageMeta')
export const toBlockBoundWitnessWithStorageMeta = zodToFactory(BlockBoundWitnessWithStorageMetaZod, 'toBlockBoundWitnessWithStorageMeta')
