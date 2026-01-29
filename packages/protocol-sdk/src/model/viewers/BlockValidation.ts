import { type Promisable } from '@xylabs/sdk-js'
import { zodIsFactory } from '@xylabs/zod'
import type { SignedHydratedBlock, SignedHydratedBlockWithHashMeta } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { HydratedBlockValidationError } from '../../validation/index.ts'
import type { Provider } from '../Provider.ts'
import {
  ChainQualificationZod, ChainQualifiedHeadConfigZod, ChainQualifiedRangeConfigZod,
} from '../zod/index.ts'

export const BlockValidationQualificationZod = ChainQualificationZod
export type BlockValidationQualification = z.infer<typeof BlockValidationQualificationZod>
export const isBlockValidationQualification = zodIsFactory(BlockValidationQualificationZod)

export const BlockValidationConfigFieldsZod = z.object({
  value: z.boolean().optional(),
  state: z.boolean().optional(),
})

export const BlockValidationConfigZod = z.union([
  BlockValidationConfigFieldsZod.extend(ChainQualifiedHeadConfigZod.shape),
  BlockValidationConfigFieldsZod.extend(ChainQualifiedRangeConfigZod.shape),
  BlockValidationConfigFieldsZod,
  z.object({}),
])

export type BlockValidationConfig = z.infer<typeof BlockValidationConfigZod>
export const isBlockValidationConfig = zodIsFactory(BlockValidationConfigZod)

export interface BlockValidationViewerMethods {
  qualifiedValidateBlocks(
    blocks: SignedHydratedBlock[],
    config?: BlockValidationConfig
  ): Promisable<[(HydratedBlockValidationError[] | SignedHydratedBlockWithHashMeta)[], BlockValidationQualification]>

  qualifiedValidateUncle(
    blocks: SignedHydratedBlock[],
    config?: BlockValidationConfig
  ): Promisable<[(HydratedBlockValidationError[] | SignedHydratedBlockWithHashMeta)[], BlockValidationQualification]>
}

export const BlockValidationViewerMoniker = 'BlockValidationViewer' as const
export type BlockValidationViewerMoniker = typeof BlockValidationViewerMoniker

export interface BlockValidationViewer extends BlockValidationViewerMethods, Provider<BlockValidationViewerMoniker> {
  qualifiedValidateBlock(
    block: SignedHydratedBlock,
    config?: BlockValidationConfig
  ): Promisable<[HydratedBlockValidationError[] | SignedHydratedBlockWithHashMeta, BlockValidationQualification]>

  validateBlock(
    block: SignedHydratedBlock,
    config?: BlockValidationConfig
  ): Promisable<HydratedBlockValidationError[] | SignedHydratedBlockWithHashMeta>

  validateBlocks(
    blocks: SignedHydratedBlock[],
    config?: BlockValidationConfig
  ): Promisable<(HydratedBlockValidationError[] | SignedHydratedBlockWithHashMeta)[]>

  validateUncle(
    blocks: SignedHydratedBlock[],
    config?: BlockValidationConfig
  ): Promisable<(HydratedBlockValidationError[] | SignedHydratedBlockWithHashMeta)[]>
}
