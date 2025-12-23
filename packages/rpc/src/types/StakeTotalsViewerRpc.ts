import type { StakeTotalsViewerMethods } from '@xyo-network/xl1-protocol-sdk'

export type StakeTotalsViewerMethodName = keyof StakeTotalsViewerMethods

export type StakeTotalsViewerRpcMethodName = `stakeTotalsViewer_${StakeTotalsViewerMethodName}`

// Map each XYO RPC method string to the corresponding function type from ChainStakeViewer
export type StakeTotalsViewerRpcMethodHandlers = {
  [K in StakeTotalsViewerMethodName as `stakeTotalsViewer_${K}`]: (
    params: Parameters<StakeTotalsViewerMethods[K]>,
  ) => ReturnType<StakeTotalsViewerMethods[K]>
}
