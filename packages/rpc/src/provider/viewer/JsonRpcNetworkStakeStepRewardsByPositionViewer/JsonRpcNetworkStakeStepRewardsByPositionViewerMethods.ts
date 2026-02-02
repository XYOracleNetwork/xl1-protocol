import type {
  AttoXL1,
  NetworkStakeStepRewardsByPositionViewerMethods, NetworkStakeStepRewardsByPositionViewerOptions,
} from '@xyo-network/xl1-protocol'
import { NetworkStakeStepRewardsByPositionViewerMoniker } from '@xyo-network/xl1-protocol'

import { NetworkStakingStepRewardsByPositionViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcNetworkStakeStepRewardsByPositionViewerMethods extends
  AbstractJsonRpcViewer<NetworkStakingStepRewardsByPositionViewerRpcSchemas> implements NetworkStakeStepRewardsByPositionViewerMethods {
  readonly moniker = NetworkStakeStepRewardsByPositionViewerMoniker
  async bonus(options?: NetworkStakeStepRewardsByPositionViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByPositionViewer_bonus', [options]))
  }

  async claimed(options?: NetworkStakeStepRewardsByPositionViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByPositionViewer_claimed', [options]))
  }

  async earned(options?: NetworkStakeStepRewardsByPositionViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByPositionViewer_earned', [options]))
  }

  async total(options?: NetworkStakeStepRewardsByPositionViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByPositionViewer_total', [options]))
  }

  async unclaimed(options?: NetworkStakeStepRewardsByPositionViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByPositionViewer_unclaimed', [options]))
  }

  protected schemas() {
    return NetworkStakingStepRewardsByPositionViewerRpcSchemas
  }
}
