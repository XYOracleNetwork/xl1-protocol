import type { Hash } from '@xylabs/sdk-js'
import type { Payload, Schema } from '@xyo-network/payload-model'

import type { MapType } from '../map/index.ts'
import type { Provider } from '../model/index.ts'

export type DataLakeData = Payload | ArrayBuffer

export const DataLakeViewerMoniker = 'DataLakeViewer' as const
export type DataLakeViewerMoniker = typeof DataLakeViewerMoniker

export interface DataLakeViewerMethods extends
  Pick<MapType<Hash, DataLakeData>, 'get' | 'getMany' | 'has'> {}

export interface DataLakeViewer extends DataLakeViewerMethods, Provider<DataLakeViewerMoniker> {
  allowedSchemas?: Schema[]
  disallowedSchemas?: Schema[]
}

export const DataLakeRunnerMoniker = 'DataLakeRunner' as const
export type DataLakeRunnerMoniker = typeof DataLakeRunnerMoniker

export interface DataLakeRunnerMethods extends Pick<MapType<Hash, DataLakeData>, 'setMany' | 'set' | 'delete' | 'clear'>,
  DataLakeViewerMethods {}

export interface DataLakeRunner extends DataLakeRunnerMethods, Provider<DataLakeRunnerMoniker> {}
