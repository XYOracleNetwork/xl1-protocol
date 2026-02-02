import type { Promisable } from '@xylabs/sdk-js'
import type {
  AttoXL1,
  NetworkStakeStepRewardsRangeOptions,
  NetworkStakeStepRewardsTotalViewer,
  XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import { asAttoXL1, NetworkStakeStepRewardsTotalViewerMoniker } from '@xyo-network/xl1-protocol'
import {
  AbstractCreatableProvider,
  creatableProvider,
  CreatableProviderParams,
  type StakedChainContextRead,
} from '@xyo-network/xl1-protocol-sdk'

export interface SimpleStepRewardsTotalViewerParams extends CreatableProviderParams {
  rewardMultipliers?: XL1RangeMultipliers
  stakedChainContext: StakedChainContextRead
}

@creatableProvider()
export class SimpleStepRewardsTotalViewer extends
  AbstractCreatableProvider<SimpleStepRewardsTotalViewerParams> implements NetworkStakeStepRewardsTotalViewer {
  static readonly defaultMoniker = NetworkStakeStepRewardsTotalViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [NetworkStakeStepRewardsTotalViewerMoniker]
  moniker = SimpleStepRewardsTotalViewer.defaultMoniker

  get rewardMultipliers() {
    return this.params.rewardMultipliers ?? {}
  }

  get stakedChainContext() {
    return this.params.stakedChainContext
  }

  async bonus({ range }: NetworkStakeStepRewardsRangeOptions = {}): Promise<AttoXL1> {
    const total = await this.total({ range })
    const earned = await this.earned({ range })
    return asAttoXL1(total - earned)
  }

  claimed(_options?: NetworkStakeStepRewardsRangeOptions | undefined): Promisable<AttoXL1> {
    throw new Error('Method [claimed] not implemented.')
  }

  async earned(options: NetworkStakeStepRewardsRangeOptions = {}): Promise<AttoXL1> {
    return await this.calculateRewards(options)
  }

  async total(options: NetworkStakeStepRewardsRangeOptions = {}): Promise<AttoXL1> {
    return await this.calculateRewards(options, this.rewardMultipliers)
  }

  unclaimed(_options: NetworkStakeStepRewardsRangeOptions = {}): Promisable<AttoXL1> {
    throw new Error('Method [unclaimed] not implemented.')
  }

  protected calculateRewards(
    _options: NetworkStakeStepRewardsRangeOptions = {},
    _rewardMultipliers?: XL1RangeMultipliers,
  ): Promise<AttoXL1> {
    throw new Error('Method  [calculateRewards] not implemented.')
  }
}
