import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { Payload } from '@xyo-network/payload-model'

import type { PayloadLakeViewer } from './PayloadLakeViewer.ts'

export interface PayloadLakeProvider extends PayloadLakeViewer {
  addPayloads(payloads: Payload[]): Promisable<Hash[]>
}
