import type { BlockViewerMethods } from '@xyo-network/xl1-protocol'

export type BlockViewerMethodName = keyof BlockViewerMethods

export type BlockViewerRpcMethodName = `blockViewer_${BlockViewerMethodName}`

// Map each XYO RPC method string to the corresponding function type from BlockViewer
export type BlockViewerRpcMethodHandlers = {
  [K in BlockViewerMethodName as `blockViewer_${K}`]: (
    params: Parameters<BlockViewerMethods[K]>,
  ) => ReturnType<BlockViewerMethods[K]>
}
