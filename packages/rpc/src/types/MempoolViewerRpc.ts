import type { MempoolViewerMethods } from '@xyo-network/xl1-protocol'

export type MempoolViewerMethodName = keyof MempoolViewerMethods

export type MempoolViewerRpcMethodName = `mempoolViewer_${MempoolViewerMethodName}`

// Map each XYO RPC method string to the corresponding function type from MempoolViewer
export type MempoolViewerRpcMethodHandlers = {
  [K in MempoolViewerMethodName as `mempoolViewer_${K}`]: (
    params: Parameters<MempoolViewerMethods[K]>,
  ) => ReturnType<MempoolViewerMethods[K]>
}
