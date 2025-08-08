import type {
  Address, Hash, Hex,
} from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { Payload } from '@xyo-network/payload-model'

import type { AllowedBlockPayload } from '../block/index.ts'
import type { TransactionBoundWitness, TransactionFeesBigInt } from '../transaction/index.ts'

export interface TransactionOptions {
  chain?: Hex
  exp?: number
  fees?: TransactionFeesBigInt
  from?: Address
  nbf?: number
}

export interface XyoGatewayHelpers {

  addPayloadsToChain(
    onChain: AllowedBlockPayload[],
    offChain: Payload[],
    options?: TransactionOptions
  ): Promisable<[Hash, [TransactionBoundWitness, Payload[]]]>

  addTransactionToChain(
    tx: [TransactionBoundWitness, Payload[]],
  ): Promisable<Hash>

}
