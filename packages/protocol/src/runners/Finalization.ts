import type { Hash } from '@xylabs/sdk-js'

import type { Provider } from '../Provider.ts'
import type { SignedHydratedBlockWithHashMeta } from '../zod/index.ts'

export interface FinalizationRunnerMethods {
  finalizeBlocks(blocks: SignedHydratedBlockWithHashMeta[]): Promise<Hash[]>
}

export const FinalizationRunnerMoniker = 'FinalizationRunner' as const
export type FinalizationRunnerMoniker = typeof FinalizationRunnerMoniker

export interface FinalizationRunner extends FinalizationRunnerMethods, Provider<FinalizationRunnerMoniker> {
  finalizeBlock(block: SignedHydratedBlockWithHashMeta): Promise<Hash>
}
