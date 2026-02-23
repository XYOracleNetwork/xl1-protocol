import type { Hash } from '@xylabs/sdk-js'
import { isUndefined } from '@xylabs/sdk-js'
import type { Payload, WithHashMeta } from '@xyo-network/sdk-js'
import { isAnyPayload, PayloadBuilder } from '@xyo-network/sdk-js'
import type { DataLakeViewer } from '@xyo-network/xl1-protocol'

export async function addDataLakePayloadsToPayloads<T extends WithHashMeta<Payload>>(
  hashes: Hash[],
  payloads: T[],
  dataLakeViewer?: DataLakeViewer,
): Promise<[
  /* Updated payloads with hash metadata */
  T[],
  /* Hashes of the newly added payloads */
  Hash[],
]> {
  if (isUndefined(dataLakeViewer)) return [payloads, []]
  const missingPayloadHashes = hashes.filter(hash => !payloads.some(p => p._hash === hash))
  const payloadsFromDataLake = await PayloadBuilder.addHashMeta(
    await PayloadBuilder.addHashMeta((await dataLakeViewer.get(missingPayloadHashes)).filter(isAnyPayload)),
  )
  return [[...payloads, ...payloadsFromDataLake] as T[], payloadsFromDataLake.map(p => p._hash)]
}
