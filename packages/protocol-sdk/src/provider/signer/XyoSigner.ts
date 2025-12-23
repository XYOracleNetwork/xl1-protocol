import type { Address, Promisable } from '@xylabs/sdk-js'
import type { Signed } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/payload-model'
import type {
  AllowedBlockPayload, ChainId,
  SignedHydratedTransactionWithHashMeta, TransactionBoundWitness,
  TransactionFeesBigInt,
} from '@xyo-network/xl1-protocol'

export const XyoSignerMoniker = 'XyoSigner' as const
export type XyoSignerMoniker = typeof XyoSignerMoniker

export interface XyoSigner {
  address(): Promisable<Address>
  // The tx passed in must have all the payloads (on and off chain) in the payloads array
  // Returns the signed transaction and the payloads array excluding the off-chain payloads.
  // The return value is ready to be broadcast to block producers
  signTransaction(tx: [TransactionBoundWitness, Payload[]]): Promisable<SignedHydratedTransactionWithHashMeta>
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
