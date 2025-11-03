import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { Signed, UnsignedBoundWitness } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/payload-model'

import type { AllowedBlockPayload } from '../block/index.ts'
import type { ChainId } from '../model/index.ts'
import type { TransactionBoundWitness, TransactionFeesBigInt } from '../transaction/index.ts'

export interface XyoSigner {
  address(): Promisable<Address>
  // The tx passed in must have all the payloads (on and off chain) in the payloads array
  // Returns the signed transaction and the payloads array excluding the off-chain payloads.
  // The return value is ready to be broadcast to block producers
  signTransaction(tx: [UnsignedBoundWitness<TransactionBoundWitness>, Payload[]]): Promisable<[Signed<TransactionBoundWitness>, Payload[]]>
}

export interface XyoSignerDeprecated {
  /** @deprecated use signTransaction instead */
  createSignedTransaction(
    chain: ChainId,
    elevatedPayloads: AllowedBlockPayload[],
    additionalPayloads: Payload[],
    nbf: number,
    exp: number,
    fees: TransactionFeesBigInt,
    from?: Address,
  ): Promisable<Signed<TransactionBoundWitness>>
}
