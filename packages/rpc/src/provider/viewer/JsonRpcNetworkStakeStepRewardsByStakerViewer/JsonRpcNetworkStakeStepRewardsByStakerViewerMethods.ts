import type { AttoXL1 } from '@xyo-network/xl1-protocol'
import {
  type NetworkStakeStepRewardsByPositionViewerMethods, type NetworkStakeStepRewardsByPositionViewerOptions, NetworkStakeStepRewardsByStakerViewerMoniker,
} from '@xyo-network/xl1-protocol-sdk'

import { NetworkStakingStepRewardsByStakerViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcNetworkStakeStepRewardsByStakerViewerMethods extends
  AbstractJsonRpcViewer<NetworkStakingStepRewardsByStakerViewerRpcSchemas> implements NetworkStakeStepRewardsByPositionViewerMethods {
  moniker = NetworkStakeStepRewardsByStakerViewerMoniker

  async bonus(options?: NetworkStakeStepRewardsByPositionViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByStakerViewer_bonus', [options]))
  }

  async claimed(options?: NetworkStakeStepRewardsByPositionViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByStakerViewer_claimed', [options]))
  }

  async earned(options?: NetworkStakeStepRewardsByPositionViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByStakerViewer_earned', [options]))
  }

  async total(options?: NetworkStakeStepRewardsByPositionViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByStakerViewer_total', [options]))
  }

  async unclaimed(options?: NetworkStakeStepRewardsByPositionViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByStakerViewer_unclaimed', [options]))
  }

  protected schemas() {
    return NetworkStakingStepRewardsByStakerViewerRpcSchemas
  }
}
