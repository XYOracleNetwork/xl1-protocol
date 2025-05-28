import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { DataLakeViewer } from './DataLakeViewer.ts'
import type { PayloadLakeProvider } from './PayloadLakeProvider.ts'

export interface DataLakeProvider extends DataLakeViewer, PayloadLakeProvider {
  add(items: ArrayBuffer[]): Promisable<Hash[]>
}
