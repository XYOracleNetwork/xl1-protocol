import { type Promisable } from '@xylabs/sdk-js'
import { zodIsFactory } from '@xylabs/zod'
import { type HydratedBlock, type SignedHydratedBlockWithHashMeta } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import {
  ChainQualificationZod, ChainQualifiedHeadConfigZod, ChainQualifiedRangeConfigZod, type Provider,
} from '../model/index.ts'
import type { HydratedBlockValidationError } from '../validation/index.ts'

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
    blocks: HydratedBlock[],
    config?: BlockValidationConfig
  ): Promisable<[HydratedBlockValidationError[], BlockValidationQualification]>
}

export const BlockValidationViewerMoniker = 'BlockValidationViewer' as const
export type BlockValidationViewerMoniker = typeof BlockValidationViewerMoniker

export interface BlockValidationViewer extends BlockValidationViewerMethods, Provider<BlockValidationViewerMoniker> {
  qualifiedValidateBlock(
    block: SignedHydratedBlockWithHashMeta,
    config?: BlockValidationConfig
  ): Promisable<[HydratedBlockValidationError[], BlockValidationQualification]>
  validateBlock(block: SignedHydratedBlockWithHashMeta, config?: BlockValidationConfig): Promisable<HydratedBlockValidationError[]>
  validateBlocks(blocks: SignedHydratedBlockWithHashMeta[], config?: BlockValidationConfig): Promisable<HydratedBlockValidationError[]>
}
