import { MempoolViewer, MempoolViewerMoniker } from '@xyo-network/xl1-protocol'
import { creatableProvider } from '@xyo-network/xl1-protocol-sdk'

import { JsonRpcMempoolViewerMethods } from './JsonRpcMempoolViewerMethods.ts'

@creatableProvider()
export class JsonRpcMempoolViewer extends JsonRpcMempoolViewerMethods implements MempoolViewer {
  static readonly defaultMoniker = MempoolViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [MempoolViewerMoniker]
}
