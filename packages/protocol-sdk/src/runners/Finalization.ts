import type { Hash } from '@xylabs/sdk-js'
import type { SignedHydratedBlockWithHashMeta } from '@xyo-network/xl1-protocol'

import type { Provider } from '../model/index.ts'

export interface FinalizationRunnerMethods {
  finalizeBlocks(blocks: SignedHydratedBlockWithHashMeta[]): Promise<Hash[]>
}

export const FinalizationRunnerMoniker = 'FinalizationRunner' as const
export type FinalizationRunnerMoniker = typeof FinalizationRunnerMoniker

export interface FinalizationRunner extends FinalizationRunnerMethods, Provider<FinalizationRunnerMoniker> {
  finalizeBlock(block: SignedHydratedBlockWithHashMeta): Promise<Hash>
}
