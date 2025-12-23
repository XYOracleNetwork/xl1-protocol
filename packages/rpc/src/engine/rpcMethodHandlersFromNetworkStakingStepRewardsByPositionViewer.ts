import type { NetworkStakeStepRewardsByPositionViewerMethods } from '@xyo-network/xl1-protocol-sdk'

import type { NetworkStakingStepRewardsByPositionViewerRpcMethodHandlers } from '../types/index.ts'

export const rpcMethodHandlersFromNetworkStakingStepRewardsByPositionViewer
  = (viewer: NetworkStakeStepRewardsByPositionViewerMethods): NetworkStakingStepRewardsByPositionViewerRpcMethodHandlers => {
    return {
      networkStakingStepRewardsByPositionViewer_bonus: params => viewer.bonus(...(params ?? [])),
      networkStakingStepRewardsByPositionViewer_claimed: params => viewer.claimed(...(params ?? [])),
      networkStakingStepRewardsByPositionViewer_earned: params => viewer.earned(...(params ?? [])),
      networkStakingStepRewardsByPositionViewer_total: params => viewer.total(...(params ?? [])),
      networkStakingStepRewardsByPositionViewer_unclaimed: params => viewer.unclaimed(...(params ?? [])),
    }
  }
