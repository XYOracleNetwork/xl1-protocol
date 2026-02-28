import type { Hash } from '@xylabs/sdk-js'
import { assertEx } from '@xylabs/sdk-js'
import type { Payload, WithStorageMeta } from '@xyo-network/sdk-js'
import { hydrateTypedBoundWitness, tryHydrateTypedBoundWitness } from '@xyo-network/sdk-js'
import type {
  AllowedBlockPayload, HydratedTransaction, SignedHydratedTransaction,
  SignedHydratedTransactionWithHashMeta,
  SignedHydratedTransactionWithStorageMeta, TransactionBoundWitness,
} from '@xyo-network/xl1-protocol'
import {
  asSignedHydratedTransaction, isAllowedBlockPayload, isSignedTransactionBoundWitnessWithStorageMeta,
} from '@xyo-network/xl1-protocol'

import { asAnyPayload } from '../block/index.ts'
import type { ChainStoreRead } from '../model/index.ts'

export const tryHydrateTransaction = async (
  { chainMap }: ChainStoreRead,
  hash: Hash,
): Promise<SignedHydratedTransactionWithStorageMeta | undefined> => {
  return (await tryHydrateTypedBoundWitness<TransactionBoundWitness>(
    {
      get(hashes: Hash[]) {
        return chainMap.get(hashes)
      },
      next() {
        throw new Error('Not implemented')
      },
    },
    hash,
    isSignedTransactionBoundWitnessWithStorageMeta,
  )) as SignedHydratedTransactionWithStorageMeta | undefined
}

export const hydrateTransaction = async (
  { chainMap }: ChainStoreRead,
  hash: Hash,
): Promise<SignedHydratedTransaction> => {
  return await hydrateTypedBoundWitness<TransactionBoundWitness>(
    {
      get(hashes: Hash[]) {
        return chainMap.get(hashes)
      },
      next() {
        throw new Error('Not implemented')
      },
    },
    hash,
    isSignedTransactionBoundWitnessWithStorageMeta,
  ) as SignedHydratedTransaction
}

export function flattenHydratedTransaction<T extends HydratedTransaction>(hydratedTransaction: T): (T[0] | T[1][number])[] {
  const [tx, txPayloads] = hydratedTransaction
  return [...txPayloads, tx]
}

export const tryUnflattenHydratedTransaction = (
  flattened: Payload[],
): SignedHydratedTransaction | undefined => {
  // Last element is always the transaction bound witness
  const tx = flattened.at(-1)

  // Everything else is a payloads
  const txPayloads = flattened.slice(0, -1)

  return asSignedHydratedTransaction([tx, txPayloads])
}

export const unflattenHydratedTransaction = (flattened: Payload[]): SignedHydratedTransaction =>
  asSignedHydratedTransaction(tryUnflattenHydratedTransaction(flattened), true)

export function flattenHydratedTransactions<T extends HydratedTransaction>(hydratedTransactions: T[]): (T[0] | T[1][number])[] {
  return hydratedTransactions.flatMap(tx => flattenHydratedTransaction(tx))
}

export const tryHydrateElevatedTransaction = async (
  { chainMap }: ChainStoreRead,
  hash: Hash,
): Promise<SignedHydratedTransactionWithHashMeta | undefined> => {
  const hydratedTransaction = await tryHydrateTransaction({ chainMap }, hash)
  if (!hydratedTransaction) {
    return undefined
  }
  const [transaction, payloads] = hydratedTransaction
  const opCodes = (transaction.script ?? []).filter(operation => operation.startsWith('elevate|'))
  const elevatedPayloads: WithStorageMeta<AllowedBlockPayload>[] = []
  for (const opCode of opCodes) {
    const [code, hash] = opCode.split('|')
    if (code === 'elevated') {
      const elevatedPayload = payloads.find(payload => payload._hash === hash)
      if (isAllowedBlockPayload(elevatedPayload)) {
        elevatedPayloads.push(elevatedPayload)
      }
    }
  }
  if (opCodes.length === elevatedPayloads.length) {
    return [transaction, elevatedPayloads.map(p => asAnyPayload(p, true))]
  }
  return undefined
}

export const hydrateElevatedTransaction = async (
  context: ChainStoreRead,
  hash: Hash,
): Promise<SignedHydratedTransactionWithHashMeta> => {
  return assertEx(await tryHydrateElevatedTransaction(context, hash), () => 'Hydration failed')
}
