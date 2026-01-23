import type {
  Address, Hex, Promisable,
} from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/payload-model'
import type {
  AllowedBlockPayload, SignedHydratedTransaction, TransactionFeesBigInt,
  XL1BlockNumber,
} from '@xyo-network/xl1-protocol'

/** @deprecated use TransactionOptions instead */
export interface TransactionSubmitterOptions {
  chain?: Hex
  exp?: XL1BlockNumber
  fees?: TransactionFeesBigInt
  from?: Address
  nbf?: XL1BlockNumber
}

/** @deprecated use XyoGatewayHelpers instead */
export interface TransactionSubmitter {
  /** @deprecated use runner.broadcastTransaction */
  submitTransaction(
    elevatedPayloads: AllowedBlockPayload[],
    additionalPayloads: Payload[],
    options?: TransactionSubmitterOptions
  ): Promisable<SignedHydratedTransaction>
}
