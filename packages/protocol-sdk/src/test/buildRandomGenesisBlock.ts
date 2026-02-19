import { asAddress, assertEx } from '@xylabs/sdk-js'
import type { Id } from '@xyo-network/id-payload-plugin'
import { IdSchema } from '@xyo-network/id-payload-plugin'
import type { AccountInstance } from '@xyo-network/sdk-js'
import {
  Account, asSchema, PayloadBuilder,
} from '@xyo-network/sdk-js'
import {
  asXL1BlockNumber, type ChainId, type HydratedBlockWithHashMeta,
} from '@xyo-network/xl1-protocol'

import { buildRandomTransaction } from '../transaction/index.ts'
import { buildGenesisBlock } from './buildGenesisBlock.ts'

export const TestChainId = assertEx(asAddress('c5fe2e6F6841Cbab12d8C0618Be2DF8C6156cC44')) as ChainId

/**
 * Creates a random block
 * @param chainId The chain id for the block
 * @param blockProducer The producer for the blocks
 * @param transactionAccount The account to use for the transaction
 * @returns A block
 */
export const buildRandomGenesisBlock = async (
  chainId: ChainId = TestChainId,
  blockProducer?: AccountInstance,
  transactionAccount?: AccountInstance,
): Promise<HydratedBlockWithHashMeta> => {
  const producer = blockProducer ?? (await Account.random())
  const txAccount = transactionAccount ?? await Account.random()
  const additionalPayload = new PayloadBuilder<Id>({ schema: IdSchema }).fields({ salt: `${Date.now()}` }).build()
  const additionalPrivatePayload = new PayloadBuilder({ schema: asSchema('network.xyo.private', true) }).fields({ salt: `${Date.now()}` }).build()
  const txs = [await buildRandomTransaction(
    chainId,
    [additionalPayload, additionalPrivatePayload],
    txAccount,
    asXL1BlockNumber(0, true),
    asXL1BlockNumber(1000, true),
    [asSchema('network.xyo.private', true)],
  )]
  const block = await buildGenesisBlock(chainId, txs, [], [producer])
  const payloads = [
    ...block[1],
    await PayloadBuilder.addHashMeta(additionalPayload),
  ]
  return [block[0], payloads]
}
