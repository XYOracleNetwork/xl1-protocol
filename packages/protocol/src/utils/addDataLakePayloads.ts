import type { Hash } from '@xylabs/sdk-js'
import { isUndefined } from '@xylabs/sdk-js'
import type { Payload, WithHashMeta } from '@xyo-network/sdk-js'
import { isAnyPayload, PayloadBuilder } from '@xyo-network/sdk-js'

import type { SignedHydratedBlockWithHashMeta } from '../block/index.ts'
import type { SignedHydratedTransaction } from '../model/index.ts'
import type { DataLakeViewer } from '../providers/index.ts'

export const addDataLakePayloadsToBlock = async (
  block: SignedHydratedBlockWithHashMeta,
  dataLakeViewer: DataLakeViewer | undefined,
): Promise<SignedHydratedBlockWithHashMeta> => {
  if (isUndefined(dataLakeViewer)) return block
  const missingPayloadHashes = block[0].payload_hashes.filter(hash => !block[1].some(p => p._hash === hash))
  if (missingPayloadHashes.length === 0) return block
  const payloadsFromDataLake = await PayloadBuilder.addHashMeta((await dataLakeViewer.get(missingPayloadHashes)).filter(isAnyPayload))
  return [block[0], [...block[1], ...payloadsFromDataLake]]
}

export const addDataLakePayloadsToTransaction = async (
  transaction: SignedHydratedTransaction,
  dataLakeViewer: DataLakeViewer | undefined,
): Promise<SignedHydratedTransaction> => {
  if (isUndefined(dataLakeViewer)) return transaction
  const payloadsWithHashMeta = await PayloadBuilder.addHashMeta(transaction[1])
  const missingPayloadHashes = transaction[0].payload_hashes.filter(hash => !payloadsWithHashMeta.some(p => p._hash === hash))
  if (missingPayloadHashes.length === 0) return transaction
  const payloadsFromDataLake = await PayloadBuilder.addHashMeta((await dataLakeViewer.get(missingPayloadHashes)).filter(isAnyPayload))
  return [transaction[0], [...transaction[1], ...payloadsFromDataLake]]
}

export const addDataLakePayloadsToPayloads = async (
  hashes: Hash[],
  payloads: WithHashMeta<Payload>[],
  dataLakeViewer: DataLakeViewer | undefined,
): Promise<WithHashMeta<Payload>[]> => {
  if (isUndefined(dataLakeViewer)) return payloads
  const missingPayloadHashes = hashes.filter(hash => !payloads.some(p => p._hash === hash))
  const payloadsFromDataLake = await PayloadBuilder.addHashMeta(
    await PayloadBuilder.addHashMeta((await dataLakeViewer.get(missingPayloadHashes)).filter(isAnyPayload)),
  )
  return [...payloads, ...payloadsFromDataLake]
}
