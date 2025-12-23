import { assertEx } from '@xylabs/sdk-js'
import type { WithStorageMeta } from '@xyo-network/payload-model'
import type { HydratedBlockWithStorageMeta } from '@xyo-network/xl1-protocol'
import { isTransactionBoundWitness } from '@xyo-network/xl1-protocol'

export const blockPayloadsFromHydratedBlock = (block: HydratedBlockWithStorageMeta): WithStorageMeta[] => {
  return block[0].payload_hashes.map(hash => assertEx(
    block[1].find(p => p._hash === hash),
    () => `missing payload ${hash}`,
  )).filter(x => !isTransactionBoundWitness(x))
}
