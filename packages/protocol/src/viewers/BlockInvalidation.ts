import { type Promisable } from '@xylabs/sdk-js'
import { zodIsFactory } from '@xylabs/zod'
import { z } from 'zod'

import type { SignedHydratedBlock, SignedHydratedBlockWithHashMeta } from '../model/index.ts'
import {
  ChainQualificationZod, ChainQualifiedHeadConfigZod, ChainQualifiedRangeConfigZod,
} from '../model/index.ts'
import type { Provider } from '../Provider.ts'
import type { HydratedBlockValidationError } from '../validation/index.ts'

export const BlockInvalidationQualificationZod = ChainQualificationZod
export type BlockInvalidationQualification = z.infer<typeof BlockInvalidationQualificationZod>
export const isBlockInvalidationQualification = zodIsFactory(BlockInvalidationQualificationZod)

export const BlockInvalidationConfigFieldsZod = z.object({
  state: z.boolean().optional(),
  value: z.boolean().optional(),
})

export const BlockInvalidationConfigZod = z.union([
  BlockInvalidationConfigFieldsZod.extend(ChainQualifiedHeadConfigZod.shape),
  BlockInvalidationConfigFieldsZod.extend(ChainQualifiedRangeConfigZod.shape),
  BlockInvalidationConfigFieldsZod,
  z.object({}),
])

export type BlockInvalidationConfig = z.infer<typeof BlockInvalidationConfigZod>
export const isBlockInvalidationConfig = zodIsFactory(BlockInvalidationConfigZod)

/**
 * Checks if blocks are invalid (impossible to ever become valid) according to protocol rules.
 */

export interface BlockInvalidationViewerMethods {
  qualifiedInvalidateBlocks(
    blocks: SignedHydratedBlock[],
    config?: BlockInvalidationConfig
  ): Promisable<[(HydratedBlockValidationError[] | SignedHydratedBlockWithHashMeta)[], BlockInvalidationQualification]>

  qualifiedInvalidateUncle(
    blocks: SignedHydratedBlock[],
    config?: BlockInvalidationConfig
  ): Promisable<[(HydratedBlockValidationError[] | SignedHydratedBlockWithHashMeta)[], BlockInvalidationQualification]>
}

export const BlockInvalidationViewerMoniker = 'BlockInvalidationViewer' as const
export type BlockInvalidationViewerMoniker = typeof BlockInvalidationViewerMoniker

export interface BlockInvalidationViewer extends BlockInvalidationViewerMethods, Provider<BlockInvalidationViewerMoniker> {
  invalidateBlock(
    block: SignedHydratedBlock,
    config?: BlockInvalidationConfig
  ): Promisable<HydratedBlockValidationError[] | SignedHydratedBlockWithHashMeta>

  invalidateBlocks(
    blocks: SignedHydratedBlock[],
    config?: BlockInvalidationConfig
  ): Promisable<(HydratedBlockValidationError[] | SignedHydratedBlockWithHashMeta)[]>

  invalidateUncle(
    blocks: SignedHydratedBlock[],
    config?: BlockInvalidationConfig
  ): Promisable<(HydratedBlockValidationError[] | SignedHydratedBlockWithHashMeta)[]>

  qualifiedInvalidateBlock(
    block: SignedHydratedBlock,
    config?: BlockInvalidationConfig
  ): Promisable<[HydratedBlockValidationError[] | SignedHydratedBlockWithHashMeta, BlockInvalidationQualification]>
}
