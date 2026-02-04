import { assertEx } from '@xylabs/sdk-js'
import type {
  BlockViewer,
  CachingContext,
  HydratedBlockWithHashMeta, StepIdentity,
} from '@xyo-network/xl1-protocol'
import { StepSizes } from '@xyo-network/xl1-protocol'

export async function stepRewardBlock(context: CachingContext, blockViewer: BlockViewer, { block, step }: StepIdentity): Promise<HydratedBlockWithHashMeta> {
  assertEx((block % StepSizes[step]) === 0, () => `Block must be the first block of the step [${StepSizes[step]}], got ${block}`)
  return assertEx(await blockViewer.blockByNumber(block), () => `Could not find block for block number ${block}`)
}
