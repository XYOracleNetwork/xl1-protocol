import type { WithHashMeta } from '@xyo-network/payload-model'
import type {
  BlockBoundWitness, Provider, SignedBlockBoundWitnessWithHashMeta, SignedHydratedBlockWithHashMeta,
} from '@xyo-network/xl1-protocol'

export interface BlockRunnerMethods {
  produceNextBlock(head: SignedBlockBoundWitnessWithHashMeta, force: true): Promise<SignedHydratedBlockWithHashMeta>
  produceNextBlock(head: SignedBlockBoundWitnessWithHashMeta, force?: false): Promise<SignedHydratedBlockWithHashMeta | undefined>
}

export const BlockRunnerMoniker = 'BlockRunner' as const
export type BlockRunnerMoniker = typeof BlockRunnerMoniker

export interface BlockRunner extends BlockRunnerMethods, Provider<BlockRunnerMoniker> {
  next(head: WithHashMeta<BlockBoundWitness>): Promise<SignedHydratedBlockWithHashMeta | undefined>
}
