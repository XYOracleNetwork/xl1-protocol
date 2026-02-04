import { Promisable } from '@xylabs/sdk-js'
import {
  AttoXL1, BlockRewardViewer, BlockRewardViewerMoniker, XL1BlockNumber,
} from '@xyo-network/xl1-protocol'

import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'
import { rewardFromBlockNumber } from '../../primitives/index.ts'

export interface SimpleBlockRewardViewerParams extends CreatableProviderParams {}

@creatableProvider()
export class SimpleBlockRewardViewer extends AbstractCreatableProvider<SimpleBlockRewardViewerParams> implements BlockRewardViewer {
  static readonly defaultMoniker = BlockRewardViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [BlockRewardViewerMoniker]
  moniker = SimpleBlockRewardViewer.defaultMoniker

  allowedRewardForBlock(block: XL1BlockNumber): Promisable<AttoXL1> {
    return rewardFromBlockNumber(
      block,
    )
  }
}
