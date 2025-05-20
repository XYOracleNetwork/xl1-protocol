import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { Signed } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/payload-model'

import type { AllowedBlockPayload } from '#block'
import type { TransactionBoundWitness, TransactionFeesBigInt } from '#transaction'

export interface XyoSigner {
  address(): Promisable<Address>
  createSignedTransaction(
    chain: Address,
    elevatedPayloads: AllowedBlockPayload[],
    additionalPayloads: Payload[],
    nbf: number,
    exp: number,
    fees: TransactionFeesBigInt,
    from?: Address,
  ): Promisable<Signed<TransactionBoundWitness>>
}
