import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { Payload } from '@xyo-network/payload-model'

import type { AllowedBlockPayload } from '../../block/index.ts'
import type { HydratedTransaction, TransactionFeesBigInt } from '../../transaction/index.ts'

export interface TransactionSubmitter {
  submitTransaction(
    elevatedPayloads: AllowedBlockPayload[],
    additionalPayloads: Payload[],
    options?: {
      chain?: Address
      exp?: number
      fees?: TransactionFeesBigInt
      from?: Address
      nbf?: number
    }): Promisable<HydratedTransaction>
}
