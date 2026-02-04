import type { AccountInstance } from '@xyo-network/account-model'
import type {
  AllowedBlockPayload, ChainId,
  SignedHydratedBlockWithHashMeta,
  SignedHydratedTransactionWithHashMeta,
} from '@xyo-network/xl1-protocol'
import { XYO_ZERO_ADDRESS } from '@xyo-network/xl1-protocol'

import { buildBlock } from './buildBlock.ts'

export async function buildGenesisBlock(
  chainId: ChainId,
  txs: SignedHydratedTransactionWithHashMeta[],
  blockPayloads: AllowedBlockPayload[],
  signers: AccountInstance[],
  chainStepRewardAddress = XYO_ZERO_ADDRESS,
  protocol?: number,
): Promise<SignedHydratedBlockWithHashMeta> {
  return await buildBlock({
    previousBlockHash: null,
    chainId,
    txs,
    blockPayloads,
    signers,
    chainStepRewardAddress,
    protocol,
  })
}
