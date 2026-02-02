import type { Promisable } from '@xylabs/sdk-js'
import { isArray } from '@xylabs/sdk-js'
import type {
  AttoXL1,
  BlockViewer,
  NetworkStakeStepRewardsByPositionViewer,
  NetworkStakeStepRewardsByPositionViewerOptions,
  XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import {
  asAttoXL1, asXL1BlockRange, BlockViewerMoniker, NetworkStakeStepRewardsByPositionViewerMoniker,
} from '@xyo-network/xl1-protocol'
import {
  AbstractCreatableProvider,
  blockRangeSteps,
  creatableProvider,
  CreatableProviderParams,
  type StakedChainContextRead,
} from '@xyo-network/xl1-protocol-sdk'

import { networkStakeStepRewardEarnedForPosition } from './primitives/index.ts'

export interface SimpleStepRewardsByPositionViewerParams extends CreatableProviderParams {
  rewardMultipliers?: XL1RangeMultipliers
  stakedChainContext: StakedChainContextRead
}

@creatableProvider()
export class SimpleStepRewardsByPositionViewer extends
  AbstractCreatableProvider<SimpleStepRewardsByPositionViewerParams> implements NetworkStakeStepRewardsByPositionViewer {
  static readonly defaultMoniker = NetworkStakeStepRewardsByPositionViewerMoniker
  static readonly dependencies = [BlockViewerMoniker]
  static readonly monikers = [NetworkStakeStepRewardsByPositionViewerMoniker]
  moniker = SimpleStepRewardsByPositionViewer.defaultMoniker

  private _blockViewer?: BlockViewer

  get rewardMultipliers() {
    return this.params.rewardMultipliers ?? {}
  }

  get stakedChainContext() {
    return this.params.stakedChainContext
  }

  protected get blockViewer() {
    return this._blockViewer!
  }

  async bonus({ range, positions }: NetworkStakeStepRewardsByPositionViewerOptions = {}): Promise<Record<number, AttoXL1>> {
    const total = await this.total({ range, positions })
    const earned = await this.earned({ range, positions })
    const result: Record<number, AttoXL1> = {}
    for (const pos of Object.keys(total).map(Number)) {
      result[pos] = asAttoXL1(total[pos] - (earned[pos] ?? 0n))
    }
    return result
  }

  claimed(_options?: NetworkStakeStepRewardsByPositionViewerOptions | undefined): Promisable<Record<number, AttoXL1>> {
    throw new Error('Method [claimed] not implemented.')
  }

  override async createHandler() {
    await super.createHandler()
    this._blockViewer = await this.locator.getInstance(BlockViewerMoniker)
  }

  async earned({ range, positions }: NetworkStakeStepRewardsByPositionViewerOptions = {}): Promise<Record<number, AttoXL1>> {
    return await this.calculateRewards({ range, positions })
  }

  async total({ range, positions }: NetworkStakeStepRewardsByPositionViewerOptions = {}): Promise<Record<number, AttoXL1>> {
    return await this.calculateRewards({ range, positions }, this.rewardMultipliers)
  }

  unclaimed(_options: NetworkStakeStepRewardsByPositionViewerOptions = {}): Promisable<Record<number, AttoXL1>> {
    throw new Error('Method [unclaimed] not implemented.')
  }

  protected async calculateRewards(
    { range, positions }: NetworkStakeStepRewardsByPositionViewerOptions = {},
    rewardMultipliers?: XL1RangeMultipliers,
  ): Promise<Record<number, AttoXL1>> {
    const result: Record<number, AttoXL1> = {}
    const steps = blockRangeSteps(asXL1BlockRange(
      range ?? [0, (await this.stakedChainContext.head())[1]],
      { name: 'NodeStepRewardsByPositionViewer' },
    ), [3, 4, 5, 6, 7])
    for (const step of steps) {
      if (isArray(positions)) {
        for (const positionId of positions) {
          const position = await this.stakedChainContext.stake.stakeById(positionId)
          result[positionId] = asAttoXL1((result[positionId] ?? 0n) + (await networkStakeStepRewardEarnedForPosition(
            this.stakedChainContext,
            this.blockViewer,
            step,
            position,
            rewardMultipliers,
          ))[0])
        }
      }
    }
    return result
  }
}
