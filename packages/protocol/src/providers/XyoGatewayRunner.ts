import type {
  Address, Hash, Logger, Promisable,
} from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/sdk-js'

import type { AllowedBlockPayload } from '../block/index.ts'
import type { XL1BlockNumber } from '../BlockNumber/index.ts'
import type { ChainId } from '../chain/index.ts'
import type {
  SignedHydratedTransaction, SignedHydratedTransactionWithHashMeta,
  UnsignedHydratedTransaction,
} from '../model/index.ts'
import type { TransactionFeesBigInt } from '../transaction/index.ts'
import type { AttoXL1 } from '../xl1/index.ts'
import type { XyoSigner } from './signer/index.ts'
import type { XyoGatewayProvider } from './XyoGateway.ts'

export type ConfirmSubmittedTransactionOptions = {
  /**
   * Number of attempts to confirm the transaction.
   * Defaults to 20.
   */
  attempts?: number
  /**
   * Delay in milliseconds between confirmation attempts.
   * Defaults to 1000 (1 second).
   */
  delay?: number
  /**
   * Optional logger instance for logging progress.
   */
  logger?: Logger
}

export interface TransactionOptions {
  chain?: ChainId
  exp?: XL1BlockNumber
  fees?: TransactionFeesBigInt
  from?: Address
  nbf?: XL1BlockNumber
}

export const XyoGatewayRunnerMoniker = 'XyoGatewayRunner' as const
export type XyoGatewayRunnerMoniker = typeof XyoGatewayRunnerMoniker

export interface XyoGatewayRunnerMethods {

  addPayloadsToChain(
    onChain: AllowedBlockPayload[],
    offChain: Payload[],
    options?: TransactionOptions
  ): Promisable<[Hash, SignedHydratedTransactionWithHashMeta]>

  addTransactionToChain(
    tx: UnsignedHydratedTransaction | SignedHydratedTransaction,
    offChain?: Payload[]
  ): Promisable<[Hash, SignedHydratedTransactionWithHashMeta]>

  confirmSubmittedTransaction(txHash: Hash, options?: ConfirmSubmittedTransactionOptions): Promisable<SignedHydratedTransaction>

  send(to: Address, amount: AttoXL1, options?: TransactionOptions): Promisable<Hash>
  sendMany(transfers: Record<Address, AttoXL1>, options?: TransactionOptions): Promisable<Hash>
}

export interface XyoGatewayRunner extends XyoGatewayRunnerMethods, XyoGatewayProvider<XyoGatewayRunnerMoniker> {
  /**
   * Returns the signer for this gateway.
   */
  signer: XyoSigner
}
