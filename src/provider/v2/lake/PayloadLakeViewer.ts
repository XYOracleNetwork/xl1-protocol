import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { Payload } from '@xyo-network/payload-model'

export interface PayloadLakeViewer {
  get(hashes: Hash[]): Promisable<Payload[]>
}
