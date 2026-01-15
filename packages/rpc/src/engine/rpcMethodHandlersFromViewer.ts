import type { XyoViewer } from '@xyo-network/xl1-protocol-sdk'

import type { XyoViewerRpcMethodHandlers } from '../types/index.ts'

export const rpcMethodHandlersFromViewer = (viewer: XyoViewer): XyoViewerRpcMethodHandlers => {
  return {
    xyoViewer_networkStakeStepRewardClaimedByAddress: params => viewer.networkStakeStepRewardClaimedByAddress(...(params ?? [])),
    xyoViewer_networkStakeStepRewardAddressReward: params => viewer.networkStakeStepRewardAddressReward(...(params ?? [])),
    xyoViewer_networkStakeStepRewardAddressHistory: params => viewer.networkStakeStepRewardAddressHistory(...(params ?? [])),
    xyoViewer_networkStakeStepRewardAddressShare: params => viewer.networkStakeStepRewardAddressShare(...(params ?? [])),
    xyoViewer_networkStakeStepRewardWeightForAddress: params => viewer.networkStakeStepRewardWeightForAddress?.(...(params ?? [])),
    xyoViewer_networkStakeStepRewardUnclaimedByAddress: params => viewer.networkStakeStepRewardUnclaimedByAddress(...(params ?? [])),
    xyoViewer_networkStakeStepRewardPoolShares: params => viewer.networkStakeStepRewardPoolShares(...(params ?? [])),
    xyoViewer_networkStakeStepRewardPoolRewards: params => viewer.networkStakeStepRewardPoolRewards(...(params ?? [])),
    xyoViewer_networkStakeStepRewardPositionWeight: params => viewer.networkStakeStepRewardPositionWeight?.(...(params ?? [])),
    xyoViewer_networkStakeStepRewardPotentialPositionLoss: params => viewer.networkStakeStepRewardPotentialPositionLoss?.(...(params ?? [])),
    xyoViewer_networkStakeStepRewardForStep: params => viewer.networkStakeStepRewardForStep?.(...(params ?? [])),
    xyoViewer_networkStakeStepRewardRandomizer: params => viewer.networkStakeStepRewardRandomizer?.(...(params ?? [])),
    xyoViewer_networkStakeStepRewardStakerCount: params => viewer.networkStakeStepRewardStakerCount?.(...(params ?? [])),
    xyoViewer_networkStakeStepRewardForStepForPosition: params => viewer.networkStakeStepRewardForStepForPosition?.(...(params ?? [])),
    xyoViewer_networkStakeStepRewardForPosition: params => viewer.networkStakeStepRewardForPosition?.(...(params ?? [])),
    xyoViewer_networkStakeStepRewardsForPosition: params => viewer.networkStakeStepRewardsForPosition?.(...(params ?? [])),
    xyoViewer_networkStakeStepRewardsForRange: params => viewer.networkStakeStepRewardsForRange?.(...(params ?? [])),
    xyoViewer_networkStakeStepRewardsForStepLevel: params => viewer.networkStakeStepRewardsForStepLevel?.(...(params ?? [])),
    xyoViewer_accountBalance: params => viewer.account.balance.accountBalance(...(params ?? [])),
    xyoViewer_accountBalanceHistory: params => viewer.account.balance.accountBalanceHistory(...(params ?? [])),
    xyoViewer_blocksByNumber: params => viewer.blocksByNumber(...(params ?? [])),
    xyoViewer_blocksByHash: params => viewer.blocksByHash(...(params ?? [])),
    xyoViewer_currentBlock: params => viewer.currentBlock(...(params ?? [])),
    xyoViewer_forkHistory: params => viewer.forkHistory(...(params ?? [])),
    xyoViewer_stakeById: params => viewer.stakeById(...(params ?? [])),
    xyoViewer_stakeByStaker: params => viewer.stakeByStaker(...(params ?? [])),
    xyoViewer_stakesByStaked: params => viewer.stakesByStaked(...(params ?? [])),
    xyoViewer_stakesByStaker: params => viewer.stakesByStaker(...(params ?? [])),
    xyoViewer_transactionByBlockHashAndIndex: params => viewer.transactionByBlockHashAndIndex(...(params ?? [])),
    xyoViewer_transactionByBlockNumberAndIndex: params => viewer.transactionByBlockNumberAndIndex(...(params ?? [])),
    xyoViewer_transactionByHash: params => viewer.transactionByHash(...(params ?? [])),
    xyoViewer_payloadsByHash: params => viewer.payloadsByHash(...(params ?? [])),
    xyoViewer_rate: params => viewer.rate(...(params ?? [])),
    xyoViewer_stepSizeRate: params => viewer.stepSizeRate(...(params ?? [])),
    xyoViewer_timeDurationRate: params => viewer.timeDurationRate(...(params ?? [])),
  }
}
