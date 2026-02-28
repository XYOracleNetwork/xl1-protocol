import type { Hash } from '@xylabs/sdk-js'
import { assertEx, zodAsFactory } from '@xylabs/sdk-js'
import { AnyPayloadZod } from '@xyo-network/sdk-js'
import type { BlockContextRead, HydratedBlockWithStorageMeta } from '@xyo-network/xl1-protocol'
import { asBlockBoundWitnessWithStorageMeta, isTransactionBoundWitnessWithStorageMeta } from '@xyo-network/xl1-protocol'

import { allHashesPresent } from './allHashesPresent.ts'

export const asAnyPayload = zodAsFactory(AnyPayloadZod, 'asAnyPayload')

export const hydrateBlock = async (
  context: BlockContextRead,
  hash: Hash,
  maxDepth: number = 1,
  minDepth = maxDepth,
): Promise<HydratedBlockWithStorageMeta> => {
  assertEx(maxDepth >= 0, () => 'maxDepth must be greater than or equal to 0')
  assertEx(minDepth >= 0, () => 'minDepth must be greater than or equal to 0')
  assertEx(maxDepth >= minDepth, () => 'maxDepth must be greater than or equal to minDepth')

  const { chainMap } = context

  const [block] = await chainMap.get([hash])
  const bw = assertEx(asBlockBoundWitnessWithStorageMeta(
    assertEx(block, () => `block ${hash} not found`),
  ), () => `hash ${hash} is not a BlockBoundWitness`)

  if (maxDepth === 0) return [bw, []]
  const blkPayloads = (await chainMap.get(bw.payload_hashes)).map(p => asAnyPayload(p, true))
  if (minDepth === 1) assertEx(allHashesPresent(bw.payload_hashes, blkPayloads), () => `Unable to find all payloads for block ${hash}`)
  if (maxDepth === 1) return [bw, blkPayloads]
  const transactions = blkPayloads.filter(isTransactionBoundWitnessWithStorageMeta)
  const transactionsPayloadHashes = transactions.flatMap(tx => tx.payload_hashes)
  const transactionsPayloads = (await chainMap.get(transactionsPayloadHashes)).map(p => asAnyPayload(p, true))
  assertEx(allHashesPresent(transactionsPayloadHashes, transactionsPayloads), () => `Unable to find all payloads for transactions in block ${hash}`)
  const allPayloadsHashes = new Set([...blkPayloads, ...transactionsPayloads].flatMap(p => p._hash))
  const allPayloads = (await chainMap.get([...allPayloadsHashes])).map(p => asAnyPayload(p, true))
  const allPayloadsFiltered = allPayloads.filter(p => allPayloadsHashes.has(p._hash))
  if (maxDepth === 2) assertEx(allHashesPresent(
    [...allPayloadsHashes],
    allPayloadsFiltered,
  ), () => `Unable to find all payloads for transactions in block ${hash}`)
  return [bw, allPayloadsFiltered]
}
