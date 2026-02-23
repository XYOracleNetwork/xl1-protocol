import type { Hash } from '@xylabs/sdk-js'
import type { DataLakeViewer, HydratedBoundWitnessWithHashMeta } from '@xyo-network/xl1-protocol'

import { addDataLakePayloadsToPayloads } from './addDataLakePayloadsToPayloads.ts'

export async function addDataLakePayloads<T extends HydratedBoundWitnessWithHashMeta>(
  [boundWitness, payloads]: T,
  dataLakeViewer?: DataLakeViewer,
): Promise<[T, Hash[]]> {
  const [updatedPayloads, foundHashes] = await addDataLakePayloadsToPayloads(boundWitness.payload_hashes, payloads, dataLakeViewer)
  return [
    [
      boundWitness,
      updatedPayloads,
    ] as T,
    foundHashes]
}
