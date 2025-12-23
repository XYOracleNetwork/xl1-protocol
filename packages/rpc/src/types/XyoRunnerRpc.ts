import type { XyoRunnerMethods } from '@xyo-network/xl1-protocol-sdk'

export type XyoRunnerMethodName = keyof XyoRunnerMethods

// Convert `accountBalance` to `xyo_accountBalance`, etc.
export type XyoRunnerRpcMethodName = `xyoRunner_${XyoRunnerMethodName}`

// Map each XYO RPC method string to the corresponding function type from XyoRunner
export type XyoRunnerRpcMethodHandlers = {
  [K in XyoRunnerMethodName as `xyoRunner_${K}`]: (
    params: Parameters<XyoRunnerMethods[K]>,
  ) => ReturnType<XyoRunnerMethods[K]>
}
