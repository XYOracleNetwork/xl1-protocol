import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

export interface DataLakeViewer<T> {
  get(hashes: Hash[]): Promisable<T[]>
}
