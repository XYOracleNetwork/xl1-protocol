import {
  HashZod,
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/sdk-js'
import {
  BoundWitnessZod,
  WithHashMetaZod,
  WithStorageMetaZod,
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

export const BlockBoundWitnessZod = z.object({
  ...BoundWitnessZod.shape,
  ...BlockBoundWitnessFieldsZod.shape,
  ...BlockBoundWitnessMetaZod.shape,
})

export type BlockBoundWitness = z.infer<typeof BlockBoundWitnessZod>

export const isBlockBoundWitness = zodIsFactory(BlockBoundWitnessZod)
export const asBlockBoundWitness = zodAsFactory(BlockBoundWitnessZod, 'asBlockBoundWitness')
export const toBlockBoundWitness = zodToFactory(BlockBoundWitnessZod, 'toBlockBoundWitness')

/** @deprecated use WithHashMetaZod(BlockBoundWitnessZod) instead */
export const BlockBoundWitnessWithHashMetaZod = WithHashMetaZod(BlockBoundWitnessZod)

/** @deprecated use WithHashMeta(BlockBoundWitness) instead */
// eslint-disable-next-line @typescript-eslint/no-deprecated
export type BlockBoundWitnessWithHashMeta = z.infer<typeof BlockBoundWitnessWithHashMetaZod>

export const isBlockBoundWitnessWithHashMeta = zodIsFactory(WithHashMetaZod(BlockBoundWitnessZod))
export const asBlockBoundWitnessWithHashMeta = zodAsFactory(WithHashMetaZod(BlockBoundWitnessZod), 'asBlockBoundWitnessWithHashMeta')
export const toBlockBoundWitnessWithHashMeta = zodToFactory(WithHashMetaZod(BlockBoundWitnessZod), 'toBlockBoundWitnessWithHashMeta')

/** @deprecated use WithStorageMetaZod(BlockBoundWitnessZod) instead */
export const BlockBoundWitnessWithStorageMetaZod = WithStorageMetaZod(BlockBoundWitnessZod)

/** @deprecated use WithStorageMeta(BlockBoundWitness) instead */
// eslint-disable-next-line @typescript-eslint/no-deprecated
export type BlockBoundWitnessWithStorageMeta = z.infer<typeof BlockBoundWitnessWithStorageMetaZod>

export const isBlockBoundWitnessWithStorageMeta = zodIsFactory(WithStorageMetaZod(BlockBoundWitnessZod))
export const asBlockBoundWitnessWithStorageMeta = zodAsFactory(WithStorageMetaZod(BlockBoundWitnessZod), 'asBlockBoundWitnessWithStorageMeta')
export const toBlockBoundWitnessWithStorageMeta = zodToFactory(WithStorageMetaZod(BlockBoundWitnessZod), 'toBlockBoundWitnessWithStorageMeta')
