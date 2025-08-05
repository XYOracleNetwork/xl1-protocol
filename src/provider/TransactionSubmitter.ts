import type { Address, Hex } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { Payload } from '@xyo-network/payload-model'

import type { AllowedBlockPayload } from '../block/index.ts'
import type { HydratedTransaction, TransactionFeesBigInt } from '../transaction/index.ts'

/** @deprecated use TransactionOptions instead */
export interface TransactionSubmitterOptions {
  chain?: Hex
  exp?: number
  fees?: TransactionFeesBigInt
  from?: Address
  nbf?: number
}

/** @deprecated use XyoGatewayHelpers instead */
export interface TransactionSubmitter {
  /** @deprecated use runner.broadcastTransaction */
  submitTransaction(
    elevatedPayloads: AllowedBlockPayload[],
    additionalPayloads: Payload[],
    // eslint-disable-next-line sonarjs/deprecation
    options?: TransactionSubmitterOptions
  ): Promisable<HydratedTransaction>
}
