import type { Address, Promisable } from '@xylabs/sdk-js'
import { isArray } from '@xylabs/sdk-js'
import type {
  AttoXL1,
  BlockViewer,
  FinalizationViewer,
  NetworkStakeStepRewardsByStakerViewer,
  NetworkStakeStepRewardsByStakerViewerOptions,
  StakeViewer,
  XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import {
  asAttoXL1, asXL1BlockRange, BlockViewerMoniker, FinalizationViewerMoniker, NetworkStakeStepRewardsByStakerViewerMoniker,
  StakeViewerMoniker,
} from '@xyo-network/xl1-protocol'
import {
  AbstractCreatableProvider,
  blockRangeSteps,
  creatableProvider,
  CreatableProviderParams,
} from '@xyo-network/xl1-protocol-sdk'

import { networkStakeStepRewardEarnedForStaker } from './primitives/index.ts'

export interface SimpleStepRewardsByStakerViewerParams extends CreatableProviderParams {
  rewardMultipliers?: XL1RangeMultipliers
}

@creatableProvider()
export class SimpleStepRewardsByStakerViewer extends
  AbstractCreatableProvider<SimpleStepRewardsByStakerViewerParams> implements NetworkStakeStepRewardsByStakerViewer {
  static readonly defaultMoniker = NetworkStakeStepRewardsByStakerViewerMoniker
  static readonly dependencies = [BlockViewerMoniker]
  static readonly monikers = [NetworkStakeStepRewardsByStakerViewerMoniker]
  moniker = SimpleStepRewardsByStakerViewer.defaultMoniker

  private _blockViewer!: BlockViewer
  private _finalizationViewer!: FinalizationViewer
  private _stakeViewer!: StakeViewer

  get rewardMultipliers() {
    return this.params.rewardMultipliers ?? {}
  }

  protected get blockViewer() {
    return this._blockViewer
  }

  protected get finalizationViewer() {
    return this._finalizationViewer
  }

  protected get stakeViewer() {
    return this._stakeViewer
  }

  async bonus({ range, stakers }: NetworkStakeStepRewardsByStakerViewerOptions = {}): Promise<Record<Address, AttoXL1>> {
    const total = await this.total({ range, stakers })
    const earned = await this.earned({ range, stakers })
    const result: Record<Address, AttoXL1> = {}
    for (const staker of Object.keys(total) as Address[]) {
      result[staker] = asAttoXL1(total[staker] - (earned[staker] ?? 0n))
    }
    return result
  }

  claimed(_options?: NetworkStakeStepRewardsByStakerViewerOptions | undefined): Promisable<Record<Address, AttoXL1>> {
    throw new Error('Method [claimed] not implemented.')
  }

  override async createHandler() {
    await super.createHandler()
    this._blockViewer = await this.locator.getInstance(BlockViewerMoniker)
    this._finalizationViewer = await this.locator.getInstance(FinalizationViewerMoniker)
    this._stakeViewer = await this.locator.getInstance(StakeViewerMoniker)
  }

  async earned(options: NetworkStakeStepRewardsByStakerViewerOptions = {}): Promise<Record<Address, AttoXL1>> {
    return await this.calculateRewards(options)
  }

  async total(options: NetworkStakeStepRewardsByStakerViewerOptions = {}): Promise<Record<Address, AttoXL1>> {
    return await this.calculateRewards(options, this.rewardMultipliers)
  }

  unclaimed(_options: NetworkStakeStepRewardsByStakerViewerOptions = {}): Promisable<Record<Address, AttoXL1>> {
    throw new Error('Method [unclaimed] not implemented.')
  }

  protected async calculateRewards(
    { range, stakers }: NetworkStakeStepRewardsByStakerViewerOptions = {},
    rewardMultipliers?: XL1RangeMultipliers,
  ): Promise<Record<Address, AttoXL1>> {
    const result: Record<Address, AttoXL1> = {}
    const steps = blockRangeSteps(asXL1BlockRange(
      range ?? [0, (await this.finalizationViewer.headNumber())],
      { name: 'NodeStepRewardsByStakerViewer' },
    ), [3, 4, 5, 6, 7])
    for (const step of steps) {
      if (isArray(stakers)) {
        for (const staker of stakers) {
          result[staker] = asAttoXL1((result[staker] ?? 0n) + (await networkStakeStepRewardEarnedForStaker(
            this.context,
            this.blockViewer,
            this.stakeViewer,
            step,
            staker,
            rewardMultipliers,
          ))[0])
        }
      }
    }
    return result
  }
}
