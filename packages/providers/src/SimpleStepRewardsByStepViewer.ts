import type { Promisable } from '@xylabs/sdk-js'
import type {
  AttoXL1,
  StepIdentityString,
  XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import { asAttoXL1, asXL1BlockRange } from '@xyo-network/xl1-protocol'
import type {
  BlockViewer,
  CreatableProviderParams,
  NetworkStakeStepRewardsByStepViewer,
  NetworkStakeStepRewardsByStepViewerOptions,
  StakedChainContextRead,
  StakeEventsViewer,
} from '@xyo-network/xl1-protocol-sdk'
import {
  AbstractCreatableProvider,
  blockRangeSteps,
  BlockViewerMoniker,
  creatableProvider, NetworkStakeStepRewardsByStepViewerMoniker, toStepIdentityString,
} from '@xyo-network/xl1-protocol-sdk'

import { networkStakeStepRewardEarned } from './primitives/index.ts'

export interface SimpleStepRewardsByStepViewerParams extends CreatableProviderParams {
  rewardMultipliers?: XL1RangeMultipliers
  stakeEventsViewer: StakeEventsViewer
  stakedChainContext: StakedChainContextRead
}

@creatableProvider()
export class SimpleStepRewardsByStepViewer extends
  AbstractCreatableProvider<SimpleStepRewardsByStepViewerParams> implements NetworkStakeStepRewardsByStepViewer {
  static readonly defaultMoniker = NetworkStakeStepRewardsByStepViewerMoniker
  static readonly dependencies = [BlockViewerMoniker]
  static readonly monikers = [NetworkStakeStepRewardsByStepViewerMoniker]
  moniker = SimpleStepRewardsByStepViewer.defaultMoniker

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

  async bonus({ range, steps }: NetworkStakeStepRewardsByStepViewerOptions = {}): Promise<Record<StepIdentityString, AttoXL1>> {
    const total = await this.total({ range, steps })
    const earned = await this.earned({ range, steps })
    const result: Record<StepIdentityString, AttoXL1> = {}
    for (const stepString of Object.keys(total) as StepIdentityString[]) {
      result[stepString] = asAttoXL1(total[stepString] - (earned[stepString] ?? 0n))
    }
    return result
  }

  claimed(_options?: NetworkStakeStepRewardsByStepViewerOptions | undefined): Promisable<Record<StepIdentityString, AttoXL1>> {
    throw new Error('Method [claimed] not implemented.')
  }

  override async createHandler() {
    await super.createHandler()
    this._blockViewer = await this.locator.getInstance(BlockViewerMoniker)
  }

  async earned({ range, steps }: NetworkStakeStepRewardsByStepViewerOptions = {}): Promise<Record<StepIdentityString, AttoXL1>> {
    const result: Record<StepIdentityString, AttoXL1> = {}
    const resolvedSteps = steps ?? blockRangeSteps(asXL1BlockRange(
      range ?? [0, (await this.stakedChainContext.head())[1]],
      { name: 'NodeStepRewardsByStepViewer' },
    ), [3, 4, 5, 6, 7])
    for (const step of resolvedSteps) {
      const stepIdentityString = toStepIdentityString(step)
      result[stepIdentityString] = asAttoXL1((result[stepIdentityString] ?? 0n) + (await networkStakeStepRewardEarned(
        this.stakedChainContext,
        this.blockViewer,
        step,
      ))[0])
    }
    return result
  }

  async total({ range, steps }: NetworkStakeStepRewardsByStepViewerOptions = {}): Promise<Record<StepIdentityString, AttoXL1>> {
    const result: Record<StepIdentityString, AttoXL1> = {}
    const resolvedSteps = steps ?? blockRangeSteps(asXL1BlockRange(
      range ?? [0, (await this.stakedChainContext.head())[1]],
      { name: 'NodeStepRewardsByStepViewer' },
    ), [3, 4, 5, 6, 7])
    for (const step of resolvedSteps) {
      const stepIdentityString = toStepIdentityString(step)
      result[stepIdentityString] = asAttoXL1((result[stepIdentityString] ?? 0n)
        + (await networkStakeStepRewardEarned(
          this.stakedChainContext,
          this.blockViewer,
          step,
          this.rewardMultipliers,
        ))[0])
    }
    return result
  }

  unclaimed(_options: NetworkStakeStepRewardsByStepViewerOptions = {}): Promisable<Record<StepIdentityString, AttoXL1>> {
    throw new Error('Method  [unclaimed] ot implemented.')
  }
}
