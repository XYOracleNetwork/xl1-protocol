import {
  creatableProvider,
  type NetworkStakeStepRewardsViewer, NetworkStakeStepRewardsViewerMoniker, type NetworkStakeViewer, NetworkStakeViewerMoniker,
} from '@xyo-network/xl1-protocol-sdk'

import type { JsonRpcNetworkStakingStepRewardsViewer } from '../JsonRpcNetworkStakeStepRewardsViewer/index.ts'
import { JsonRpcNetworkStakeViewerMethods } from './JsonRpcNetworkStakeViewerMethods.ts'

@creatableProvider()
export class JsonRpcNetworkStakeViewer extends JsonRpcNetworkStakeViewerMethods implements NetworkStakeViewer {
  static readonly defaultMoniker = NetworkStakeViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [NetworkStakeViewerMoniker]

  protected _stepRewards?: NetworkStakeStepRewardsViewer

  get stepRewards(): NetworkStakeStepRewardsViewer {
    return this._stepRewards!
  }

  override async createHandler() {
    await super.createHandler()
    this._stepRewards = await this.locator.getInstance<JsonRpcNetworkStakingStepRewardsViewer>(NetworkStakeStepRewardsViewerMoniker)
  }
}
