import { assertEx } from '@xylabs/sdk-js'
import type { HydratedBlockWithHashMeta, StepIdentity } from '@xyo-network/xl1-protocol'
import { StepSizes } from '@xyo-network/xl1-protocol'

import type { ChainContextRead } from '../../../model/index.ts'
import { hydratedBlockByNumber } from '../../state/index.ts'

export async function stepRewardBlock(context: ChainContextRead, { block, step }: StepIdentity): Promise<HydratedBlockWithHashMeta> {
  assertEx((block % StepSizes[step]) === 0, () => `Block must be the first block of the step [${StepSizes[step]}], got ${block}`)
  return assertEx(await hydratedBlockByNumber(context, block), () => `Could not find block for block number ${block}`)
}
