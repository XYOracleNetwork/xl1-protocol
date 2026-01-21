import type { StakeViewerMethods } from '@xyo-network/xl1-protocol-sdk'

export type StakeViewerMethodName = keyof StakeViewerMethods

export type StakeViewerRpcMethodName = `stakeViewer_${StakeViewerMethodName}`

export type StakeViewerRpcMethodHandlers = {
  [K in StakeViewerMethodName as `stakeViewer_${K}`]: (
    params: Parameters<StakeViewerMethods[K]>,
  ) => ReturnType<StakeViewerMethods[K]>
}
