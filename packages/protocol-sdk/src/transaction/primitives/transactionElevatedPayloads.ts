import { asHash, type Hash } from '@xylabs/sdk-js'
import type { Payload, WithHashMeta } from '@xyo-network/sdk-js'
import type { HydratedTransactionWithHashMeta, TransactionBoundWitness } from '@xyo-network/xl1-protocol'

import { crackOperations } from './transactionOperations.ts'

export function transactionElevatedPayloadHashes(transaction: TransactionBoundWitness): Hash[] {
  const elevateOperations = crackOperations(transaction.script ?? []).filter(op => op[0] === 'elevate')
  return elevateOperations.map(op => asHash(op[1][0], true))
}

export function transactionElevatedPayloads([transaction, payloads]: HydratedTransactionWithHashMeta): WithHashMeta<Payload>[] {
  const hashes = transactionElevatedPayloadHashes(transaction)
  const elevatedPayloads = payloads.filter(payload => hashes.includes(payload._hash))
  return elevatedPayloads
}
