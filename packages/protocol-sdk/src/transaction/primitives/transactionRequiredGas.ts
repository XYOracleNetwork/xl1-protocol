import type { HydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'
import { AttoXL1, TransactionGasCosts } from '@xyo-network/xl1-protocol'

import { transactionBlockByteCount } from './transactionBlockByteCount.ts'
import { transactionElevatedPayloads } from './transactionElevatedPayloads.ts'

/** The required gas for the byte storage on the block chain for a transaction */
export function transactionBytesRequiredGas([transaction, payloads]: HydratedTransactionWithHashMeta): AttoXL1 {
  const transactionBlockBytes = transactionBlockByteCount([transaction, payloads])
  return AttoXL1(TransactionGasCosts.characterStorage * BigInt(transactionBlockBytes))
}

export function transactionRequiredGas(hydratedTransaction: HydratedTransactionWithHashMeta): AttoXL1 {
  const elevatedPayloads = transactionElevatedPayloads(hydratedTransaction)
  const hashes = elevatedPayloads.length + 1 /* for transaction itself */
  const signatures = hydratedTransaction[0].addresses.length
  return AttoXL1(transactionBytesRequiredGas(hydratedTransaction)
    + TransactionGasCosts.hashValidation * BigInt(hashes)
    + TransactionGasCosts.signatureValidation * BigInt(signatures)
    + TransactionGasCosts.payloadValidation * BigInt(elevatedPayloads.length))
}
