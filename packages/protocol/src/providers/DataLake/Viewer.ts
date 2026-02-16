import type { Hash } from '@xylabs/sdk-js'
import type { ReadArchivistFunctions } from '@xyo-network/archivist-model'
import type { Sequence } from '@xyo-network/payload-model'

import type { DataLakeData, DataLakeProvider } from './Provider.ts'

export const DataLakeViewerMoniker = 'DataLakeViewer' as const
export type DataLakeViewerMoniker = typeof DataLakeViewerMoniker

export interface DataLakeViewerMethods extends ReadArchivistFunctions<DataLakeData, Hash, Sequence> {}

export interface DataLakeViewer extends DataLakeProvider<DataLakeViewerMoniker>, DataLakeViewerMethods {
}
