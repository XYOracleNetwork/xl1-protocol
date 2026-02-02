import { Promisable } from '@xylabs/sdk-js'
import {
  AttoXL1, BlockRewardViewer, BlockRewardViewerMoniker, XL1BlockNumber,
} from '@xyo-network/xl1-protocol'

import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'
import { rewardFromBlockNumber } from '../../primitives/index.ts'

export interface SimpleBlockRewardViewerParams extends CreatableProviderParams {
  creatorReward: AttoXL1
  initialReward: AttoXL1
  minRewardPerBlock: AttoXL1
  stepFactorDenominator: bigint
  stepFactorNumerator: bigint
  stepSize: XL1BlockNumber
}

@creatableProvider()
export class SimpleBlockRewardViewer extends AbstractCreatableProvider<SimpleBlockRewardViewerParams> implements BlockRewardViewer {
  static readonly defaultMoniker = BlockRewardViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [BlockRewardViewerMoniker]
  moniker = SimpleBlockRewardViewer.defaultMoniker

  protected rewardFromBlockNumber = rewardFromBlockNumber(18)

  allowedRewardForBlock(block: XL1BlockNumber): Promisable<AttoXL1> {
    return this.rewardFromBlockNumber(
      block,
      this.params.initialReward,
      this.params.stepSize,
      this.params.stepFactorNumerator,
      this.params.stepFactorDenominator,
      this.params.minRewardPerBlock,
      this.params.creatorReward,
    )
  }
}
