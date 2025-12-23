import type { AttoXL1 } from '@xyo-network/xl1-protocol'
import {
  type NetworkStakeStepRewardsRangeOptions, type NetworkStakeStepRewardsTotalViewerMethods, NetworkStakeStepRewardsTotalViewerMoniker,
} from '@xyo-network/xl1-protocol-sdk'

import { NetworkStakingStepRewardsTotalViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcNetworkStakeStepRewardsTotalViewerMethods extends
  AbstractJsonRpcViewer<NetworkStakingStepRewardsTotalViewerRpcSchemas> implements NetworkStakeStepRewardsTotalViewerMethods {
  moniker = NetworkStakeStepRewardsTotalViewerMoniker
  async bonus(options?: NetworkStakeStepRewardsRangeOptions | undefined): Promise<AttoXL1> {
    return (await this.transport.sendRequest('networkStakingStepRewardsTotalViewer_bonus', [options]))
  }

  async claimed(options?: NetworkStakeStepRewardsRangeOptions | undefined): Promise<AttoXL1> {
    return (await this.transport.sendRequest('networkStakingStepRewardsTotalViewer_claimed', [options]))
  }

  async earned(options?: NetworkStakeStepRewardsRangeOptions | undefined): Promise<AttoXL1> {
    return (await this.transport.sendRequest('networkStakingStepRewardsTotalViewer_earned', [options]))
  }

  async total(options?: NetworkStakeStepRewardsRangeOptions | undefined): Promise<AttoXL1> {
    return (await this.transport.sendRequest('networkStakingStepRewardsTotalViewer_total', [options]))
  }

  async unclaimed(options?: NetworkStakeStepRewardsRangeOptions | undefined): Promise<AttoXL1> {
    return (await this.transport.sendRequest('networkStakingStepRewardsTotalViewer_unclaimed', [options]))
  }

  protected schemas() {
    return NetworkStakingStepRewardsTotalViewerRpcSchemas
  }
}
