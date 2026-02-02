import {
  type NetworkStakeStepRewardsByPositionViewer, type NetworkStakeStepRewardsByStakerViewer, type NetworkStakeStepRewardsByStepViewer,
  type NetworkStakeStepRewardsTotalViewer, type NetworkStakeStepRewardsViewer,
  NetworkStakeStepRewardsViewerMoniker,
} from '@xyo-network/xl1-protocol'
import { creatableProvider } from '@xyo-network/xl1-protocol-sdk'

import type { JsonRpcNetworkStakingStepRewardsViewerMethodsParams } from './JsonRpcNetworkStakeStepRewardsViewerMethods.ts'
import { JsonRpcNetworkStakeStepRewardsViewerMethods } from './JsonRpcNetworkStakeStepRewardsViewerMethods.ts'

export interface JsonRpcNetworkStakeStepRewardsViewerParams extends JsonRpcNetworkStakingStepRewardsViewerMethodsParams {
  position?: NetworkStakeStepRewardsByPositionViewer
  staker?: NetworkStakeStepRewardsByStakerViewer
  step?: NetworkStakeStepRewardsByStepViewer
  total?: NetworkStakeStepRewardsTotalViewer
}
@creatableProvider()
export class JsonRpcNetworkStakingStepRewardsViewer extends
  JsonRpcNetworkStakeStepRewardsViewerMethods<JsonRpcNetworkStakeStepRewardsViewerParams> implements NetworkStakeStepRewardsViewer {
  static readonly defaultMoniker = NetworkStakeStepRewardsViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [NetworkStakeStepRewardsViewerMoniker]

  get position(): NetworkStakeStepRewardsByPositionViewer | undefined {
    return this.params.position
  }

  get staker(): NetworkStakeStepRewardsByStakerViewer | undefined {
    return this.params.staker
  }

  get step(): NetworkStakeStepRewardsByStepViewer | undefined {
    return this.params.step
  }

  get total(): NetworkStakeStepRewardsTotalViewer | undefined {
    return this.params.total
  }
}
