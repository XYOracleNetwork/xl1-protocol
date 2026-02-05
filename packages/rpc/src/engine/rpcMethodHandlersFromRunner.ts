import type { XyoRunner } from '@xyo-network/xl1-protocol'

import type { XyoRunnerRpcMethodHandlers } from '../types/index.ts'

export const rpcMethodHandlersFromRunner = (runner: XyoRunner): XyoRunnerRpcMethodHandlers => {
  return { xyoRunner_broadcastTransaction: params => runner.broadcastTransaction(...(params ?? [])) }
}
