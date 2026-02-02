import { type TimeSyncViewer, TimeSyncViewerMoniker } from '@xyo-network/xl1-protocol'
import { creatableProvider } from '@xyo-network/xl1-protocol-sdk'

import { JsonRpcTimeSyncViewerMethods } from './JsonRpcTimeSyncViewerMethods.ts'

@creatableProvider()
export class JsonRpcTimeSyncViewer extends JsonRpcTimeSyncViewerMethods implements TimeSyncViewer {
  static readonly defaultMoniker = TimeSyncViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [TimeSyncViewerMoniker]
}
