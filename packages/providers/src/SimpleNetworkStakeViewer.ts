import { assertEx } from '@xylabs/sdk-js'
import {
  NetworkStakeStepRewardsViewer,
  NetworkStakeStepRewardsViewerMoniker,
  NetworkStakeViewer, NetworkStakeViewerMoniker,
  XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import {
  AbstractCreatableProvider,
  creatableProvider, CreatableProviderParams, StakedChainContextRead,
} from '@xyo-network/xl1-protocol-sdk'

export interface SimpleNetworkStakeViewerParams extends CreatableProviderParams {
  rewardMultipliers?: XL1RangeMultipliers
  stakedChainContext: StakedChainContextRead
}

@creatableProvider()
export class SimpleNetworkStakeViewer extends AbstractCreatableProvider<SimpleNetworkStakeViewerParams> implements NetworkStakeViewer {
  static readonly defaultMoniker = NetworkStakeViewerMoniker
  static readonly dependencies = [NetworkStakeStepRewardsViewerMoniker]
  static readonly monikers = [NetworkStakeViewerMoniker]
  moniker = SimpleNetworkStakeViewer.defaultMoniker

  private _stepRewardsViewer?: NetworkStakeStepRewardsViewer

  get rewardMultipliers() {
    return this.params.rewardMultipliers
  }

  get stakedChainContext() {
    return this.params.stakedChainContext
  }

  get stepRewards(): NetworkStakeStepRewardsViewer {
    return assertEx(this._stepRewardsViewer, () => 'Step rewards viewer not initialized')
  }

  async active(blockNumber?: number): Promise<[bigint, number]> {
    const resolvedBlockNumber = blockNumber ?? (await this.stakedChainContext.head())[1]
    return [await this.stakedChainContext.stake.active(resolvedBlockNumber), resolvedBlockNumber]
  }

  override async createHandler() {
    await super.createHandler()
    this._stepRewardsViewer = await this.locator.getInstance(NetworkStakeStepRewardsViewerMoniker)
  }
}
