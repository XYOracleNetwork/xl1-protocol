import type { FinalizationViewerMethods } from '@xyo-network/xl1-protocol'

export type FinalizationViewerMethodName = keyof FinalizationViewerMethods

export type FinalizationViewerRpcMethodName = `finalizationViewer_${FinalizationViewerMethodName}`

// Map each XYO RPC method string to the corresponding function type from FinalizationViewer
export type FinalizationViewerRpcMethodHandlers = {
  [K in FinalizationViewerMethodName as `finalizationViewer_${K}`]: (
    params: Parameters<FinalizationViewerMethods[K]>,
  ) => ReturnType<FinalizationViewerMethods[K]>
}
