import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { Payload } from '@xyo-network/payload-model'

import type { DataLakeViewer, PayloadLakeViewer } from '../viewer/index.ts'

export interface PayloadLakeProvider extends PayloadLakeViewer {
  addPayloads(payloads: Payload[]): Promisable<Hash[]>
}

export interface DataLakeProvider extends DataLakeViewer, PayloadLakeProvider {
  add(items: ArrayBuffer[]): Promisable<Hash[]>
}
