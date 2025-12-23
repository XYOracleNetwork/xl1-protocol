import type {
  Address, Hash, Promisable,
} from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/payload-model'
import type {
  AllowedBlockPayload, AttoXL1, ChainId, SignedHydratedTransaction, SignedHydratedTransactionWithHashMeta, TransactionFeesBigInt,
  UnsignedHydratedTransaction,
  XL1BlockNumber,
} from '@xyo-network/xl1-protocol'

import type { ConfirmSubmittedTransactionOptions } from '../transaction/index.ts'
import type { DataLakeRunner } from './DataLake.ts'
import type { XyoGateway } from './XyoGateway.ts'

export interface TransactionOptions {
  chain?: ChainId
  exp?: XL1BlockNumber
  fees?: TransactionFeesBigInt
  from?: Address
  nbf?: XL1BlockNumber
}

export interface XyoGatewayRunnerMethods {

  addPayloadsToChain(
    onChain: AllowedBlockPayload[],
    offChain: Payload[],
    options?: TransactionOptions
  ): Promisable<[Hash, SignedHydratedTransactionWithHashMeta]>

  addTransactionToChain(
    tx: UnsignedHydratedTransaction | SignedHydratedTransaction,
  ): Promisable<[Hash, SignedHydratedTransactionWithHashMeta]>

  confirmSubmittedTransaction(txHash: Hash, options?: ConfirmSubmittedTransactionOptions): Promisable<SignedHydratedTransaction>

  send(to: Address, amount: AttoXL1, options?: TransactionOptions): Promisable<Hash>
  sendMany(transfers: Record<Address, AttoXL1>, options?: TransactionOptions): Promisable<Hash>
}

export interface XyoGatewayRunner extends XyoGatewayRunnerMethods, XyoGateway {
  dataLakes: DataLakeRunner[]
  addDataLake(dataLake: DataLakeRunner): number
  removeDataLake(index: number): void
}
