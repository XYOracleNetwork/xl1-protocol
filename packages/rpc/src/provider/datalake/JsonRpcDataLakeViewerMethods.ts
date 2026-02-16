import type { Hash, PromisableArray } from '@xylabs/sdk-js'
import type { NextOptions } from '@xyo-network/archivist-model'
import type { Sequence } from '@xyo-network/payload-model'
import type { DataLakeData, DataLakeViewerMethods } from '@xyo-network/xl1-protocol'
import { DataLakeViewerMoniker } from '@xyo-network/xl1-protocol'

import { DataLakeViewerRpcSchemas } from '../../types/index.ts'
import { AbstractJsonRpcViewer } from '../viewer/index.ts'

export class JsonRpcDataLakeViewerMethods extends AbstractJsonRpcViewer<DataLakeViewerRpcSchemas> implements DataLakeViewerMethods {
  static readonly defaultMoniker = DataLakeViewerMoniker
  static readonly monikers = [DataLakeViewerMoniker]
  moniker = JsonRpcDataLakeViewerMethods.defaultMoniker

  get(_hashes: Hash[]): PromisableArray<DataLakeData> {
    throw new Error('Method [get] not implemented.')
  }

  next(_options?: NextOptions<Sequence> | undefined): PromisableArray<DataLakeData> {
    throw new Error('Method [next] not implemented.')
  }

  protected schemas() {
    return DataLakeViewerRpcSchemas
  }
}
