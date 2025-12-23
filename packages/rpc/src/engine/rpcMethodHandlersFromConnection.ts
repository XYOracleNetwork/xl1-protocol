import type { XyoConnection } from '@xyo-network/xl1-protocol-sdk'

import type { XyoProviderRpcMethodHandlers } from '../types/index.ts'
import { rpcMethodHandlersFromAccountBalanceViewer } from './rpcMethodHandlersFromAccountBalanceViewer.ts'
import { rpcMethodHandlersFromBlockViewer } from './rpcMethodHandlersFromBlockViewer.ts'
import { rpcMethodHandlersFromMempoolRunner } from './rpcMethodHandlersFromMempoolRunner.ts'
import { rpcMethodHandlersFromMempoolViewer } from './rpcMethodHandlersFromMempoolViewer.ts'
import { rpcMethodHandlersFromNetworkStakingStepRewardsByPositionViewer } from './rpcMethodHandlersFromNetworkStakingStepRewardsByPositionViewer.ts'
import { rpcMethodHandlersFromRunner } from './rpcMethodHandlersFromRunner.ts'
import { rpcMethodHandlersFromTimeSyncViewer } from './rpcMethodHandlersFromTimeSyncViewer.ts'
import { rpcMethodHandlersFromViewer } from './rpcMethodHandlersFromViewer.ts'

/* networkStakeViewer is temporary as a param until it goes into root viewer */
export const rpcMethodHandlersFromConnection = (
  connection: XyoConnection,
): XyoProviderRpcMethodHandlers => {
  const { runner, viewer } = connection
  let result: XyoProviderRpcMethodHandlers = {}
  if (runner) result = { ...result, ...rpcMethodHandlersFromRunner(runner) }
  if (viewer) result = { ...result, ...rpcMethodHandlersFromViewer(viewer) }
  const accountBalanceViewer = viewer?.account?.balance
  if (accountBalanceViewer) {
    result = {
      ...result,
      ...rpcMethodHandlersFromAccountBalanceViewer(accountBalanceViewer),
    }
  }
  const blockViewer = viewer?.block
  if (blockViewer) {
    result = {
      ...result,
      ...rpcMethodHandlersFromBlockViewer(blockViewer),
    }
  }

  const mempoolViewer = viewer?.mempool
  if (mempoolViewer) {
    result = {
      ...result,
      ...rpcMethodHandlersFromMempoolViewer(mempoolViewer),
    }
  }

  const timeSyncViewer = viewer?.time
  if (timeSyncViewer) {
    result = {
      ...result,
      ...rpcMethodHandlersFromTimeSyncViewer(timeSyncViewer),
    }
  }

  const mempoolRunner = runner?.mempool
  if (mempoolRunner) {
    result = {
      ...result,
      ...rpcMethodHandlersFromMempoolRunner(mempoolRunner),
    }
  }

  const networkStakeViewer = viewer?.networkStake
  if (networkStakeViewer?.stepRewards?.position) {
    result = {
      ...result,
      ...rpcMethodHandlersFromNetworkStakingStepRewardsByPositionViewer(networkStakeViewer.stepRewards.position),
    }
  }
  return result
}
