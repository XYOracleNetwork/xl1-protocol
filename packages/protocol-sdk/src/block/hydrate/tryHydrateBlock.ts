import type { Hash } from '@xylabs/sdk-js'
import { assertEx } from '@xylabs/sdk-js'
import type { ReadArchivist } from '@xyo-network/archivist-model'
import type { HydratedBlock } from '@xyo-network/xl1-protocol'
import { isBlockBoundWitnessWithStorageMeta, isTransactionBoundWitnessWithStorageMeta } from '@xyo-network/xl1-protocol'

export const tryHydrateBlock = async (
  archivist: ReadArchivist,
  hash: Hash,
  maxDepth: number = 1,
): Promise<HydratedBlock | undefined> => {
  assertEx(maxDepth >= 0, () => 'maxDepth must be greater than or equal to 0')
  const bw = (await archivist.get([hash])).find(isBlockBoundWitnessWithStorageMeta)
  if (!bw) return undefined
  if (maxDepth === 0) return [bw, []]
  const blkPayloads = await archivist.get(bw.payload_hashes)
  if (maxDepth === 1) return [bw, blkPayloads]
  const transactions = blkPayloads.filter(isTransactionBoundWitnessWithStorageMeta)
  const transactionsPayloadHashes = transactions.flatMap(tx => tx.payload_hashes)
  const transactionsPayloads = await archivist.get(transactionsPayloadHashes)
  const allPayloadsHashes = new Set([...blkPayloads, ...transactionsPayloads].flatMap(p => p._hash))
  const allPayloads = await archivist.get([...allPayloadsHashes])
  const allPayloadsFiltered = allPayloads.filter(p => allPayloadsHashes.has(p._hash))
  return [bw, allPayloadsFiltered]
}
