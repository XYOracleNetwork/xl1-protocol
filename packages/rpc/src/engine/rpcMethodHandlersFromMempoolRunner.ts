import type { MempoolRunnerMethods } from '@xyo-network/xl1-protocol-sdk'

import type { MempoolRunnerRpcMethodHandlers } from '../types/index.ts'

export const rpcMethodHandlersFromMempoolRunner = (runner: MempoolRunnerMethods): MempoolRunnerRpcMethodHandlers => {
  return {
    mempoolRunner_submitBlocks: params => runner.submitBlocks(...params ?? []),
    mempoolRunner_submitTransactions: params => runner.submitTransactions(...params ?? []),
  }
}
