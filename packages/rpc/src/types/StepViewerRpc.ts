import type { StepViewerMethods } from '@xyo-network/xl1-protocol-sdk'

export type StepViewerMethodName = keyof StepViewerMethods

export type StepViewerRpcMethodName = `stepViewer_${StepViewerMethodName}`

// Map each Network Stake RPC method string to the corresponding function type from StepViewer
export type StepViewerRpcMethodHandlers = {
  [K in StepViewerMethodName as `stepViewer_${K}`]: (
    params: Parameters<StepViewerMethods[K]>,
  ) => ReturnType<StepViewerMethods[K]>
}
