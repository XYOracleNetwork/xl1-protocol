import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { Payload } from '@xyo-network/payload-model'

export type DataLakeData = Payload | ArrayBuffer

export interface XyoDataLakeViewer {
  // if resolves to hash payload, keep going until hitting a non-payload or maxDepth, or unable to find
  fetch(hashes: Hash[], maxDepth?: number): Promisable<DataLakeData[]>
  // same as fetch but never follows hash payloads
  get(hashes: Hash[]): Promisable<DataLakeData[]>
  // same as fetch, except returns each step in tuple containing the result and the steps
  trace(hash: Hash): Promisable<[DataLakeData | undefined, Payload[]]>
}

export interface XyoDataLakeProvider extends XyoDataLakeViewer {
  add(items: DataLakeData[]): Promisable<DataLakeData[]>
}
