import type { MempoolRunnerMethods } from '@xyo-network/xl1-protocol'

export type MempoolRunnerMethodName = keyof MempoolRunnerMethods

export type MempoolRunnerRpcMethodName = `mempoolRunner_${MempoolRunnerMethodName}`

// Map each XYO RPC method string to the corresponding function type from MempoolRunner
export type MempoolRunnerRpcMethodHandlers = {
  [K in MempoolRunnerMethodName as `mempoolRunner_${K}`]: (
    params: Parameters<MempoolRunnerMethods[K]>,
  ) => ReturnType<MempoolRunnerMethods[K]>
}
