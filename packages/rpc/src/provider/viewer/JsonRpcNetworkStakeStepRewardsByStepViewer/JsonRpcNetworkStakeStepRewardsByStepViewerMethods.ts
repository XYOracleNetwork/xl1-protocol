import type {
  AttoXL1,
  NetworkStakeStepRewardsByStepViewerMethods, NetworkStakeStepRewardsByStepViewerOptions,
} from '@xyo-network/xl1-protocol'
import { NetworkStakeStepRewardsByStepViewerMoniker } from '@xyo-network/xl1-protocol'

import { NetworkStakingStepRewardsByStepViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcNetworkStakeStepRewardsByStepViewerMethods extends
  AbstractJsonRpcViewer<NetworkStakingStepRewardsByStepViewerRpcSchemas> implements NetworkStakeStepRewardsByStepViewerMethods {
  readonly moniker = NetworkStakeStepRewardsByStepViewerMoniker

  async bonus(options?: NetworkStakeStepRewardsByStepViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByStepViewer_bonus', [options]))
  }

  async claimed(options?: NetworkStakeStepRewardsByStepViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByStepViewer_claimed', [options]))
  }

  async earned(options?: NetworkStakeStepRewardsByStepViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByStepViewer_earned', [options]))
  }

  async total(options?: NetworkStakeStepRewardsByStepViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByStepViewer_total', [options]))
  }

  async unclaimed(options?: NetworkStakeStepRewardsByStepViewerOptions | undefined): Promise<Record<number, AttoXL1>> {
    return (await this.transport.sendRequest('networkStakingStepRewardsByStepViewer_unclaimed', [options]))
  }

  protected schemas() {
    return NetworkStakingStepRewardsByStepViewerRpcSchemas
  }
}
