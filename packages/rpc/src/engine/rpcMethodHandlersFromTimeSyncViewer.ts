import type { TimeSyncViewerMethods } from '@xyo-network/xl1-protocol-sdk'

import type { TimeSyncViewerRpcMethodHandlers } from '../types/index.ts'

export const rpcMethodHandlersFromTimeSyncViewer = (viewer: TimeSyncViewerMethods): TimeSyncViewerRpcMethodHandlers => {
  return {
    timeSyncViewer_convertTime: params => viewer.convertTime(...(params ?? [])),
    timeSyncViewer_currentTime: params => viewer.currentTime(...(params ?? [])),
    timeSyncViewer_currentTimeAndHash: params => viewer.currentTimeAndHash(...(params ?? [])),
    timeSyncViewer_currentTimePayload: params => viewer.currentTimePayload(...(params ?? [])),
  }
}
