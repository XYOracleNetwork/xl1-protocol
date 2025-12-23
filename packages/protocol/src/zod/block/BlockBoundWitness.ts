import { HashZod } from '@xylabs/sdk-js'
import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import { BoundWitnessZod } from '@xyo-network/boundwitness-model'
import { HashMetaZod, StorageMetaZod } from '@xyo-network/payload-model'
import { z } from 'zod'

import { XL1BlockNumberZod } from '../../model/index.ts'
import { ChainZod } from '../Chain.ts'

export const BlockBoundWitnessFieldsZod = z.object({
  block: XL1BlockNumberZod,
  chain: ChainZod,
  previous: HashZod.nullable(),
  protocol: z.number().optional(),
  step_hashes: z.array(HashZod).optional(),
})

export const BlockBoundWitnessMetaZod = z.object({ $epoch: z.number() })

export const BlockBoundWitnessZod = BoundWitnessZod
  .safeExtend(BlockBoundWitnessFieldsZod.shape)
  .safeExtend(BlockBoundWitnessMetaZod.shape)

export type BlockBoundWitness = z.infer<typeof BlockBoundWitnessZod>

export const isBlockBoundWitness = zodIsFactory(BlockBoundWitnessZod)
export const asBlockBoundWitness = zodAsFactory(BlockBoundWitnessZod, 'asBlockBoundWitness')
export const toBlockBoundWitness = zodToFactory(BlockBoundWitnessZod, 'toBlockBoundWitness')

export const BlockBoundWitnessWithHashMetaZod = BlockBoundWitnessZod
  .safeExtend(HashMetaZod.shape)

export type BlockBoundWitnessWithHashMeta = z.infer<typeof BlockBoundWitnessWithHashMetaZod>

export const isBlockBoundWitnessWithHashMeta = zodIsFactory(BlockBoundWitnessWithHashMetaZod)
export const asBlockBoundWitnessWithHashMeta = zodAsFactory(BlockBoundWitnessWithHashMetaZod, 'asBlockBoundWitnessWithHashMeta')
export const toBlockBoundWitnessWithHashMeta = zodToFactory(BlockBoundWitnessWithHashMetaZod, 'toBlockBoundWitnessWithHashMeta')

export const BlockBoundWitnessWithStorageMetaZod = BlockBoundWitnessZod
  .safeExtend(StorageMetaZod.shape)

export type BlockBoundWitnessWithStorageMeta = z.infer<typeof BlockBoundWitnessWithStorageMetaZod>

export const isBlockBoundWitnessWithStorageMeta = zodIsFactory(BlockBoundWitnessWithStorageMetaZod)
export const asBlockBoundWitnessWithStorageMeta = zodAsFactory(BlockBoundWitnessWithStorageMetaZod, 'asBlockBoundWitnessWithStorageMeta')
export const toBlockBoundWitnessWithStorageMeta = zodToFactory(BlockBoundWitnessWithStorageMetaZod, 'toBlockBoundWitnessWithStorageMeta')
