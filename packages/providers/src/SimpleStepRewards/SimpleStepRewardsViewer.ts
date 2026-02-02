import { assertEx } from '@xylabs/sdk-js'
import {
  BlockViewer,
  BlockViewerMoniker,
  NetworkStakeStepRewardsByPositionViewer,
  NetworkStakeStepRewardsByPositionViewerMoniker,
  NetworkStakeStepRewardsByStakerViewer,
  NetworkStakeStepRewardsByStakerViewerMoniker,
  NetworkStakeStepRewardsByStepViewer,
  NetworkStakeStepRewardsByStepViewerMoniker,
  NetworkStakeStepRewardsTotalViewer,
  NetworkStakeStepRewardsViewer, NetworkStakeStepRewardsViewerMoniker, type XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import {
  AbstractCreatableProvider,
  creatableProvider,
  CreatableProviderParams,
  type StakedChainContextRead,
} from '@xyo-network/xl1-protocol-sdk'

import { SimpleStepRewardsByPositionViewer } from './SimpleStepRewardsByPositionViewer.ts'
import { SimpleStepRewardsByStakerViewer } from './SimpleStepRewardsByStakerViewer.ts'
import { SimpleStepRewardsByStepViewer } from './SimpleStepRewardsByStepViewer.ts'

export interface NodeStepRewardsViewerParams extends CreatableProviderParams {
  rewardMultipliers?: XL1RangeMultipliers
}

@creatableProvider()
export class SimpleStepRewardsViewer extends AbstractCreatableProvider<NodeStepRewardsViewerParams> implements NetworkStakeStepRewardsViewer {
  static readonly defaultMoniker = NetworkStakeStepRewardsViewerMoniker

  static readonly dependencies = [
    BlockViewerMoniker,
    NetworkStakeStepRewardsByPositionViewerMoniker,
    NetworkStakeStepRewardsByStakerViewerMoniker,
    NetworkStakeStepRewardsByStepViewerMoniker,
  ]

  static readonly monikers = [NetworkStakeStepRewardsViewerMoniker]
  moniker = SimpleStepRewardsViewer.defaultMoniker

  private _blockViewer?: BlockViewer
  private _position?: SimpleStepRewardsByPositionViewer
  private _stakedChainContext?: StakedChainContextRead
  private _staker?: SimpleStepRewardsByStakerViewer
  private _step?: SimpleStepRewardsByStepViewer

  get position(): NetworkStakeStepRewardsByPositionViewer {
    return assertEx(this._position, () => 'Position viewer not initialized')
  }

  get staker(): NetworkStakeStepRewardsByStakerViewer {
    return assertEx(this._staker, () => 'Position viewer not initialized')
  }

  get step(): NetworkStakeStepRewardsByStepViewer {
    return assertEx(this._step, () => 'Step viewer not initialized')
  }

  get total(): NetworkStakeStepRewardsTotalViewer {
    throw new Error('Method [total] not implemented.')
  }

  protected get rewardMultipliers() {
    return this.params.rewardMultipliers
  }

  protected get stakedChainContext() {
    return this._stakedChainContext
  }

  override async createHandler() {
    await super.createHandler()
    this._blockViewer = await this.locator.getInstance<BlockViewer>(BlockViewerMoniker)
    this._position = await this.locator.getInstance<SimpleStepRewardsByPositionViewer>(NetworkStakeStepRewardsByPositionViewerMoniker)
    this._staker = await this.locator.getInstance<SimpleStepRewardsByStakerViewer>(NetworkStakeStepRewardsByStakerViewerMoniker)
    this._step = await this.locator.getInstance<SimpleStepRewardsByStepViewer>(NetworkStakeStepRewardsByStepViewerMoniker)
  }

  protected override async startHandler(): Promise<void> {
    await super.startHandler()
    await assertEx(this._position, () => 'Position viewer not created').start()
    await assertEx(this._staker, () => 'Staker viewer not created').start()
    await assertEx(this._step, () => 'Step viewer not created').start()
  }
}
