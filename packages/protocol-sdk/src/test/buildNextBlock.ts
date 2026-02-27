import type { AccountInstance, WithHashMeta } from '@xyo-network/sdk-js'
import type {
  AllowedBlockPayload, BlockBoundWitness, ChainId,
  SignedHydratedBlockWithHashMeta,
  SignedHydratedTransaction,
} from '@xyo-network/xl1-protocol'
import {
  AttoXL1,
  XYO_STEP_REWARD_ADDRESS,
} from '@xyo-network/xl1-protocol'

import { buildBlock } from './buildBlock.ts'

export async function buildNextBlock(
  previousBlock: WithHashMeta<BlockBoundWitness>,
  txs: SignedHydratedTransaction[],
  blockPayloads: AllowedBlockPayload[],
  signers: AccountInstance[],
  chainStepRewardAddress = XYO_STEP_REWARD_ADDRESS,
  stepRewardPoolBalance: AttoXL1 = AttoXL1(0n),
  protocol?: number,
  chainId?: ChainId,
): Promise<SignedHydratedBlockWithHashMeta> {
  return await buildBlock({
    chainId: chainId ?? previousBlock.chain,
    previousBlockNumber: previousBlock.block,
    previousStepHashes: previousBlock.step_hashes ?? [],
    previousBlockHash: previousBlock._hash,
    txs,
    blockPayloads,
    signers,
    protocol,
    chainStepRewardAddress,
    stepRewardPoolBalance,
  })
}
