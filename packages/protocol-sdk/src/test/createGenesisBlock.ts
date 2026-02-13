import type { Address } from '@xylabs/sdk-js'
import type { AccountInstance } from '@xyo-network/account-model'
import type { WithHashMeta } from '@xyo-network/payload-model'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import type {
  AllowedBlockPayload, ChainId, SignedHydratedBlockWithHashMeta,
} from '@xyo-network/xl1-protocol'
import {
  BlockBoundWitnessSchemaPayload, BlockBoundWitnessWithStorageMetaSchemaPayload,
  ChainStakeIntentPayloadJsonSchemaPayload, HashPayloadJsonSchemaPayload, TransactionBoundWitnessSchemaPayload, TransactionBoundWitnessWithStorageMetaSchemaPayload, TransferPayloadJsonSchemaPayload,
} from '@xyo-network/xl1-schema'

import { createTransferPayload } from '../createTransferPayload.ts'
import { buildGenesisBlock } from './buildGenesisBlock.ts'
import { createProducerChainStakeIntent } from './createProducerChainStakeIntentTransaction.ts'

export const createGenesisBlock = async (
  initialBlockProducer: AccountInstance,
  nextContractAddress: ChainId,
  genesisBlockRewardAmount: bigint,
  genesisBlockRewardAddress: Address,
): Promise<SignedHydratedBlockWithHashMeta> => {
  const blockPayloads: WithHashMeta<AllowedBlockPayload>[] = await PayloadBuilder.addHashMeta([
    TransferPayloadJsonSchemaPayload,
    BlockBoundWitnessSchemaPayload,
    BlockBoundWitnessWithStorageMetaSchemaPayload,
    TransactionBoundWitnessSchemaPayload,
    TransactionBoundWitnessWithStorageMetaSchemaPayload,
    ChainStakeIntentPayloadJsonSchemaPayload,
    HashPayloadJsonSchemaPayload,
  ])
  const intentPayload = await createProducerChainStakeIntent(initialBlockProducer.address, 1, 0)
  blockPayloads.push(intentPayload)
  if (genesisBlockRewardAmount > 0n) {
    blockPayloads.push(await PayloadBuilder.addHashMeta(createTransferPayload(
      nextContractAddress as Address,
      { [genesisBlockRewardAddress]: genesisBlockRewardAmount },
    )))
  }
  return await buildGenesisBlock(nextContractAddress, [], blockPayloads, [initialBlockProducer])
}
