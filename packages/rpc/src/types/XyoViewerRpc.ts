import type { XyoViewerMethods } from '@xyo-network/xl1-protocol'

export type XyoViewerMethodName = keyof XyoViewerMethods

// Convert `accountBalance` to `xyo_accountBalance`, etc.
export type XyoViewerRpcMethodName = `xyoViewer_${XyoViewerMethodName}`

// Map each XYO RPC method string to the corresponding function type from XyoViewer
export type XyoViewerRpcMethodHandlers = {
  [K in XyoViewerMethodName as `xyoViewer_${K}`]: (
    params: Parameters<XyoViewerMethods[K]>,
  ) => ReturnType<XyoViewerMethods[K]>
}
