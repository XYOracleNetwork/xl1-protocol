import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { DataLakeViewer } from './DataLakeViewer.ts'

export interface DataLakeProvider<T> extends DataLakeViewer<T> {
  add(items: T[]): Promisable<Hash[]>
}
