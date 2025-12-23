import type { Payload } from '@xyo-network/payload-model'
import { type DataLakeViewerMethods, DataLakeViewerMoniker } from '@xyo-network/xl1-protocol-sdk'

import { DataLakeViewerRpcSchemas } from '../../types/index.ts'
import { AbstractJsonRpcViewer } from '../viewer/index.ts'

export class JsonRpcDataLakeViewerMethods extends AbstractJsonRpcViewer<DataLakeViewerRpcSchemas> implements DataLakeViewerMethods {
  static readonly defaultMoniker = DataLakeViewerMoniker
  static readonly monikers = [DataLakeViewerMoniker]
  moniker = JsonRpcDataLakeViewerMethods.defaultMoniker

  get(_id: unknown): Promise<Payload | ArrayBuffer | undefined> {
    throw new Error('Method [get] not implemented.')
  }

  getMany(_id: unknown): Promise<(Payload | ArrayBuffer)[]> {
    throw new Error('Method [getMany] not implemented.')
  }

  has(_id: unknown): Promise<boolean> {
    throw new Error('Method [has] not implemented.')
  }

  protected schemas() {
    return DataLakeViewerRpcSchemas
  }
}
