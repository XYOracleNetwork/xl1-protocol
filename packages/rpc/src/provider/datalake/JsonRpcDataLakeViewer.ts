import { creatableProvider, type DataLakeViewer } from '@xyo-network/xl1-protocol-sdk'

import { JsonRpcDataLakeViewerMethods } from './JsonRpcDataLakeViewerMethods.ts'

@creatableProvider()
export class JsonRpcDataLakeViewer extends JsonRpcDataLakeViewerMethods implements DataLakeViewer {
  static readonly dependencies = []
}
