import type { Address } from '@xylabs/sdk-js'
import { asAddress, assertEx } from '@xylabs/sdk-js'
import type { AccountInstance } from '@xyo-network/account-model'
import { MemoryArchivist } from '@xyo-network/archivist-memory'
import type { Id } from '@xyo-network/id-payload-plugin'
import { IdSchema } from '@xyo-network/id-payload-plugin'
import { asSchema } from '@xyo-network/payload-model'
import { Account, PayloadBuilder } from '@xyo-network/sdk-js'
import {
  asXL1BlockNumber,
  type ChainId, type SignedHydratedBlockWithHashMeta, type SignedHydratedTransactionWithHashMeta,
} from '@xyo-network/xl1-protocol'

import { flattenHydratedBlocks } from '../block/index.ts'
import { buildRandomTransaction } from '../transaction/index.ts'
import { buildNextBlock } from './buildNextBlock.ts'
import { TestChainId } from './buildRandomGenesisBlock.ts'
import { createGenesisBlock } from './createGenesisBlock.ts'

export const TestGenesisBlockRewardAddress = assertEx(asAddress('fa7f0bb865a4bfff3d5e2c726d3e063297014da9'))

/**
 * Creates a chain of blocks
 * @param blockProducer The producer for the chain blocks
 * @param count The number of blocks to build
 * @param previousBlock The previous block from which to build the chain (if none supplied will create genesis block)
 * @returns A chain of blocks
 */
export const buildRandomChain = async (
  blockProducer: AccountInstance,
  count: number = 10,
  previousBlock?: SignedHydratedBlockWithHashMeta,
  chainId?: ChainId,
  transactionAccount?: AccountInstance,
  receiverAddresses?: Address[],
): Promise<SignedHydratedBlockWithHashMeta[]> => {
  const chainIdToUse = chainId ?? TestChainId
  const blocks: SignedHydratedBlockWithHashMeta[] = []
  let remaining = count
  let lastBlock: SignedHydratedBlockWithHashMeta | undefined = previousBlock
  const transactionAccountToUse = transactionAccount ?? await Account.random()
  if (!lastBlock) {
    const block = await createGenesisBlock(
      blockProducer,
      chainIdToUse,
      1_000_000_000n * (10n ** 18n),
      transactionAccountToUse.address,
    )
    blocks.push(block)
    remaining = remaining - 1
    lastBlock = block
  }
  const resolvedReceiverAddresses = receiverAddresses ?? [((await Account.random()).address)]
  let saltCounter = 0
  while (remaining > 0) {
    saltCounter += 1
    const payloads = [new PayloadBuilder<Id>({ schema: IdSchema }).fields({ salt: `${Date.now()}-${saltCounter}` }).build()]
    saltCounter += 1
    const additionalPrivatePayloads = (remaining % 2 === 0)
      ? [new PayloadBuilder({ schema: asSchema('network.xyo.private', true) }).fields({ salt: `${Date.now()}-${saltCounter}` }).build()]
      : []
    const txs: SignedHydratedTransactionWithHashMeta[] = []
    for (const receiverAddress of resolvedReceiverAddresses) {
      txs.push(await buildRandomTransaction(
        chainIdToUse,
        [...payloads, ...additionalPrivatePayloads],
        transactionAccountToUse,
        asXL1BlockNumber(Math.max(count - remaining - 1000, 0), true),
        asXL1BlockNumber(count - remaining + 1000, true),
        [asSchema('network.xyo.private', true)],
        receiverAddress,
      ))
    }
    const previousBlock = assertEx(lastBlock?.[0], () => new Error('No last block'))
    const block = await buildNextBlock(previousBlock, txs, [], [blockProducer], transactionAccountToUse.address)
    blocks.push(block)
    remaining = remaining - 1
    lastBlock = block
  }
  return blocks
}

export async function buildRandomChainArchivist(count = 20) {
  const producerAccount = await Account.random()
  const blocks = await buildRandomChain(producerAccount, count)
  const archivist = await MemoryArchivist.create()
  const payloads = flattenHydratedBlocks(blocks)
  await archivist.insert(payloads)
  return archivist
}
