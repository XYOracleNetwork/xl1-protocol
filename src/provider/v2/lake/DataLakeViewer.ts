import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { Payload } from '@xyo-network/payload-model'

import type { PayloadLakeViewer } from './PayloadLakeViewer.ts'

export interface DataLakeViewer extends PayloadLakeViewer {
  // if resolves to hash payload, keep going until hitting a non-payload or maxDepth, or unable to find
  fetch(hashes: Hash[], maxDepth?: number): Promisable<(ArrayBuffer | Payload)[]>
  // same as fetch but never follows hash payloads
  get(hashes: Hash[]): Promisable<(ArrayBuffer | Payload)[]>
  // same as fetch, except returns each step
  trace(hashes: Hash[]): Promisable<[(ArrayBuffer | Payload), Payload[]][]>
}
