import type { Hash } from '@xylabs/sdk-js'
import type { ReadArchivistFunctions, Sequence } from '@xyo-network/sdk-js'

import type { DataLakeData, DataLakeProvider } from './Provider.ts'

export const DataLakeViewerMoniker = 'DataLakeViewer' as const
export type DataLakeViewerMoniker = typeof DataLakeViewerMoniker

export interface DataLakeViewerMethods extends ReadArchivistFunctions<DataLakeData, Hash, Sequence> {}

export interface DataLakeViewer extends DataLakeProvider<DataLakeViewerMoniker>, DataLakeViewerMethods {
}
