import type { Address, Hex } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { Payload } from '@xyo-network/payload-model'

import type { AllowedBlockPayload } from '../../block/index.ts'
import type { HydratedTransaction, TransactionFeesBigInt } from '../../transaction/index.ts'

export interface TransactionSubmitterOptions {
  chain?: Hex
  exp?: number
  fees?: TransactionFeesBigInt
  from?: Address
  nbf?: number
}

export interface TransactionSubmitter {
  submitTransaction(
    elevatedPayloads: AllowedBlockPayload[],
    additionalPayloads: Payload[],
    options?: TransactionSubmitterOptions
  ): Promisable<HydratedTransaction>
}
