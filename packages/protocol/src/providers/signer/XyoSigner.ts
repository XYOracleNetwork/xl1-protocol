import type { Address, Promisable } from '@xylabs/sdk-js'
import type { Signed } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/sdk-js'

import type { AllowedBlockPayload } from '../../block/index.ts'
import type { ChainId } from '../../chain/index.ts'
import type { SignedHydratedTransactionWithHashMeta } from '../../model/index.ts'
import type { Provider } from '../../provider/index.ts'
import type { TransactionBoundWitness, TransactionFeesBigInt } from '../../transaction/index.ts'

export const XyoSignerMoniker = 'XyoSigner' as const
export type XyoSignerMoniker = typeof XyoSignerMoniker

export interface XyoSignerMethods {
  address(): Promisable<Address>
  // The tx passed in must have all the payloads (on and off chain) in the payloads array
  // Returns the signed transaction and the payloads array excluding the off-chain payloads.
  // The return value is ready to be broadcast to block producers
  signTransaction(tx: [TransactionBoundWitness, Payload[]]): Promisable<SignedHydratedTransactionWithHashMeta>
}

export interface XyoSigner extends XyoSignerMethods, Provider<XyoSignerMoniker> {}

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
