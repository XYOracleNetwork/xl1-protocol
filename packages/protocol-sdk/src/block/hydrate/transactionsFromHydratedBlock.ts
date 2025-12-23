import type { HydratedBlock, TransactionBoundWitnessWithStorageMeta } from '@xyo-network/xl1-protocol'
import { isTransactionBoundWitnessWithStorageMeta } from '@xyo-network/xl1-protocol'

export const transactionsFromHydratedBlock = (block: HydratedBlock): TransactionBoundWitnessWithStorageMeta[] => {
  return block[1].filter(isTransactionBoundWitnessWithStorageMeta)
}
