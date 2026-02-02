import {
  type Address,
  type Promisable,
} from '@xylabs/sdk-js'
import {
  BlockViewer,
  BlockViewerMoniker,
  NetworkStakeStepRewardsViewer,
  NetworkStakeStepRewardsViewerMoniker,
  PagedPositionsOptions,
  PagedStakersOptions,
  Position,
  type PositionId, StakeEventsViewer, StakeEventsViewerMoniker, StakeViewer, StakeViewerMoniker, type StepIdentity, StepViewer, StepViewerMoniker,
} from '@xyo-network/xl1-protocol'
import {
  AbstractCreatableProvider,
  creatableProvider,
  CreatableProviderParams,
  externalBlockRangeFromStep,
} from '@xyo-network/xl1-protocol-sdk'

export interface SimpleStepViewerParams extends CreatableProviderParams {

}

@creatableProvider()
export class SimpleStepViewer extends AbstractCreatableProvider<SimpleStepViewerParams> implements StepViewer {
  static readonly defaultMoniker = StepViewerMoniker

  static readonly dependencies = [
    BlockViewerMoniker,
    NetworkStakeStepRewardsViewerMoniker,
    StakeViewerMoniker,
    StakeEventsViewerMoniker,
  ]

  static readonly monikers = [StepViewerMoniker]
  moniker = SimpleStepViewer.defaultMoniker

  private _blockViewer?: BlockViewer
  private _networkStakeStepRewardsViewer?: NetworkStakeStepRewardsViewer
  private _stakeEventsViewer?: StakeEventsViewer
  private _stakeViewer?: StakeViewer

  get rewards() {
    return this._networkStakeStepRewardsViewer!
  }

  protected get blockViewer() {
    return this._blockViewer!
  }

  protected get stakeEventsViewer() {
    return this._stakeEventsViewer!
  }

  protected get stakeViewer() {
    return this._stakeViewer!
  }

  override async createHandler() {
    await super.createHandler()
    this._blockViewer = await this.locator.getInstance<BlockViewer>(BlockViewerMoniker)
    this._networkStakeStepRewardsViewer = await this.locator.getInstance<NetworkStakeStepRewardsViewer>(NetworkStakeStepRewardsViewerMoniker)
    this._stakeViewer = await this.locator.getInstance<StakeViewer>(StakeViewerMoniker)
    this._stakeEventsViewer = await this.locator.getInstance<StakeEventsViewer>(StakeEventsViewerMoniker)
  }

  async positionCount(step: StepIdentity): Promise<number> {
    const externalRange = await externalBlockRangeFromStep(this.context, this.blockViewer, step)
    const positionCount = await this.stakeEventsViewer.positionCount(externalRange)
    return positionCount
  }

  // TODO: Implement paging
  async positions(step: StepIdentity, _options?: PagedPositionsOptions): Promise<Position[]> {
    const count = await this.positionCount(step)
    const externalRange = await externalBlockRangeFromStep(this.context, this.blockViewer, step)
    const allPositions = await Promise.all(Array.from({ length: count + 1 }, (_, i) => i).map(id => this.stakeViewer.stakeById(id)))
    return allPositions.filter(pos => pos.addBlock <= externalRange[1] && (pos.removeBlock === 0 || pos.removeBlock > externalRange[0]))
  }

  randomizer(_step: StepIdentity): Promisable<bigint> {
    throw new Error('Method [randomizer] not implemented.')
  }

  stake(_step: StepIdentity): Promisable<bigint> {
    throw new Error('Method [stake] not implemented.')
  }

  stakerCount(_step: StepIdentity): Promisable<number> {
    throw new Error('Method [stakerCount] not implemented.')
  }

  stakers(_step: StepIdentity, _options?: PagedStakersOptions): Promisable<Address[]> {
    throw new Error('Method [stakers] not implemented.')
  }

  weight(_step: StepIdentity, _positionId?: PositionId): Promisable<bigint> {
    throw new Error('Method [weight] not implemented.')
  }
}
