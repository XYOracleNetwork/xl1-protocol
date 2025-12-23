import type { TimeSyncViewerMethods } from '@xyo-network/xl1-protocol-sdk'

export type TimeSyncViewerMethodName = keyof TimeSyncViewerMethods

export type TimeSyncViewerRpcMethodName = `timeSyncViewer_${TimeSyncViewerMethodName}`

// Map each XYO RPC method string to the corresponding function type from TimeSyncViewer
export type TimeSyncViewerRpcMethodHandlers = {
  [K in TimeSyncViewerMethodName as `timeSyncViewer_${K}`]: (
    params: Parameters<TimeSyncViewerMethods[K]>,
  ) => ReturnType<TimeSyncViewerMethods[K]>
}
