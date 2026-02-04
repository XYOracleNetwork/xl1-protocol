import type { Address } from '@xylabs/sdk-js'
import {
  assertEx, exists, toAddress,
} from '@xylabs/sdk-js'
import type {
  BlockViewer, ChainContext, StepIdentity,
} from '@xyo-network/xl1-protocol'
import {
  asTransfer, isTransfer, XYO_STEP_REWARD_ADDRESS,
} from '@xyo-network/xl1-protocol'

import { mergeTransfers } from '../../payload/index.ts'
import { stepTransferIndex } from '../../step/index.ts'
import { stepRewardBlock } from './stepRewardBlock.ts'

export async function chainStepRewardAddress(context: ChainContext, blockViewer: BlockViewer, { block, step }: StepIdentity): Promise<Address> {
  const hydratedBlock = await stepRewardBlock(context, blockViewer, { block, step })
  const [transferIndex, transferCount] = stepTransferIndex(block, step)
  const [blockBw, payloads] = hydratedBlock

  const transfersFromPool = payloads.filter(isTransfer).map(p => asTransfer(p)).filter(exists).filter(t => t.from === XYO_STEP_REWARD_ADDRESS)
  const fromEntries = Object.entries(mergeTransfers(transfersFromPool)[XYO_STEP_REWARD_ADDRESS])
  const sortedTransferAmounts = (fromEntries).toSorted(([,a], [,b]) => a > b ? -1 : a < b ? 1 : 0)
  assertEx(
    sortedTransferAmounts.length === transferCount,
    () => `Step Transfers mismatch ${block} (${blockBw._hash}) [${sortedTransferAmounts.length} - ${transferCount}]`,
  )
  return toAddress(sortedTransferAmounts[transferIndex][0])
}
