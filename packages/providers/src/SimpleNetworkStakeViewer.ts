import { assertEx } from '@xylabs/sdk-js'
import {
  FinalizationViewer,
  FinalizationViewerMoniker,
  NetworkStakeStepRewardsViewer,
  NetworkStakeStepRewardsViewerMoniker,
  NetworkStakeViewer, NetworkStakeViewerMoniker,
  StakeViewer,
  StakeViewerMoniker,
  XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import {
  AbstractCreatableProvider,
  creatableProvider, CreatableProviderParams,
} from '@xyo-network/xl1-protocol-sdk'

export interface SimpleNetworkStakeViewerParams extends CreatableProviderParams {
  rewardMultipliers?: XL1RangeMultipliers
}

@creatableProvider()
export class SimpleNetworkStakeViewer extends AbstractCreatableProvider<SimpleNetworkStakeViewerParams> implements NetworkStakeViewer {
  static readonly defaultMoniker = NetworkStakeViewerMoniker
  static readonly dependencies = [NetworkStakeStepRewardsViewerMoniker]
  static readonly monikers = [NetworkStakeViewerMoniker]
  moniker = SimpleNetworkStakeViewer.defaultMoniker

  private _finalizationViewer!: FinalizationViewer
  private _stake!: StakeViewer
  private _stepRewardsViewer?: NetworkStakeStepRewardsViewer

  get stepRewards(): NetworkStakeStepRewardsViewer {
    return assertEx(this._stepRewardsViewer, () => 'Step rewards viewer not initialized')
  }

  protected get finalizationViewer() {
    return this._finalizationViewer
  }

  protected get rewardMultipliers() {
    return this.params.rewardMultipliers
  }

  protected get stake() {
    return this._stake
  }

  async active(blockNumber?: number): Promise<[bigint, number]> {
    const resolvedBlockNumber = blockNumber ?? (await this.finalizationViewer.headNumber())
    return [await this.stake.active(resolvedBlockNumber), resolvedBlockNumber]
  }

  override async createHandler() {
    await super.createHandler()
    this._finalizationViewer = await this.locator.getInstance(FinalizationViewerMoniker)
    this._stake = await this.locator.getInstance(StakeViewerMoniker)
    this._stepRewardsViewer = await this.locator.getInstance(NetworkStakeStepRewardsViewerMoniker)
  }
}
