import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { HydratedTransaction } from '@xyo-network/xl1-protocol'

/** The number of bytes that a transaction and its payloads will take up in a block */
export function transactionBlockByteCount([transaction, payloads]: HydratedTransaction): number {
  const cleanTransaction = PayloadBuilder.omitStorageMeta(transaction)
  const transactionBytes = JSON.stringify(cleanTransaction).length
  const cleanPayloads = PayloadBuilder.omitStorageMeta(payloads)
  return cleanPayloads.reduce((acc: number, payload) => acc + JSON.stringify(payload).length, 0) + transactionBytes
}
