import type { Address } from '@xylabs/sdk-js'
import type { AccountInstance } from '@xyo-network/sdk-js'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import type {
  ChainId, ChainStakeIntent,
  HydratedTransactionWithHashMeta,
  XL1BlockNumber,
} from '@xyo-network/xl1-protocol'
import {
  asXL1BlockNumber, ChainStakeIntentSchema,
  defaultTransactionFees,
} from '@xyo-network/xl1-protocol'

import { buildTransaction } from '../transaction/index.ts'

export async function createProducerChainStakeIntent(from: Address, exp: number, nbf = 0) {
  return await PayloadBuilder.addHashMeta(new PayloadBuilder<ChainStakeIntent>({ schema: ChainStakeIntentSchema }).fields({
    from,
    exp,
    nbf,
    intent: 'producer',
  }).build())
}

export async function createProducerChainStakeIntentTransaction(
  chain: ChainId,
  signers: AccountInstance[] = [],
  producer: Address,
  exp: XL1BlockNumber,
  nbf = asXL1BlockNumber(0, true),
  fees = defaultTransactionFees,
): Promise<HydratedTransactionWithHashMeta> {
  // Create staked intents for all the block producers declaring their intent to produce blocks
  const intent = await createProducerChainStakeIntent(producer, exp, nbf)
  const tx = await buildTransaction(
    chain,
    [intent],
    [],
    signers,
    nbf,
    exp,
    signers[0].address,
    fees,
  )
  return tx
}
