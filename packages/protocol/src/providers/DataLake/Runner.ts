import type { Hash } from '@xylabs/sdk-js'
import type { WriteArchivistFunctions } from '@xyo-network/archivist-model'

import type { DataLakeData, DataLakeProvider } from './Provider.ts'

export const DataLakeRunnerMoniker = 'DataLakeRunner' as const
export type DataLakeRunnerMoniker = typeof DataLakeRunnerMoniker

export interface DataLakeRunnerMethods extends WriteArchivistFunctions<DataLakeData, DataLakeData, DataLakeData, Hash> {}

export interface DataLakeRunner extends DataLakeProvider<DataLakeRunnerMoniker>, DataLakeRunnerMethods {}
