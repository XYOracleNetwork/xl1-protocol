import type { Hex } from '@xylabs/sdk-js'
import { assertEx, Base } from '@xylabs/sdk-js'
import type {
  AccountInstance, Payload, PayloadBuilderOptions,
} from '@xyo-network/sdk-js'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import type {
  AllowedBlockPayload,
  ChainId,
  TransactionFeesBigInt,
} from '@xyo-network/xl1-protocol'
import {
  asXL1BlockNumber,
  defaultTransactionFees, isAllowedBlockPayload, minTransactionFees, XYO_ZERO_ADDRESS,
} from '@xyo-network/xl1-protocol'

import { buildTransaction } from './buildTransaction.ts'
import { transactionRequiredGas } from './primitives/index.ts'

export class TransactionBuilder<TPayload extends Payload> extends Base<Omit<PayloadBuilderOptions, 'schema'>> {
  private _blockRange?: [number, number]
  private _chain?: Hex
  private _elevatedPayloads: AllowedBlockPayload[] = []
  private _fees: TransactionFeesBigInt | undefined
  private _payloads: TPayload[] = []
  private _signers: AccountInstance[] = []

  constructor(options: Omit<PayloadBuilderOptions, 'schema'> = {}) {
    super(options)
  }

  async build() {
    const chain = assertEx(this._chain, () => 'Chain must be set before building the transaction')
    const fees = assertEx(this._fees, () => 'Fees must be set before building the transaction')
    const blockRange = assertEx(this._blockRange, () => 'Block range must be set before building the transaction')
    return await buildTransaction(
      chain,
      this._elevatedPayloads,
      this._payloads,
      this._signers,
      asXL1BlockNumber(blockRange[0], true),
      asXL1BlockNumber(blockRange[1], true),
      this._signers[0]?.address,
      fees,
    )
  }

  chain(chain: ChainId) {
    this._chain = chain
    return this
  }

  async dryRun() {
    return await buildTransaction(
      XYO_ZERO_ADDRESS,
      this._elevatedPayloads,
      this._payloads,
      this._signers,
      asXL1BlockNumber(0, true),
      asXL1BlockNumber(1000, true),
      this._signers[0]?.address,
      defaultTransactionFees,
    )
  }

  elevatedPayload(payload?: AllowedBlockPayload) {
    const allowedPayload = isAllowedBlockPayload(payload) ? payload : undefined
    const allowPayloadExists = assertEx(allowedPayload, () => 'Payload must be an AllowedBlockPayload')
    this._elevatedPayloads.push(allowPayloadExists)
    return this
  }

  elevatedPayloads(payloads?: AllowedBlockPayload[]) {
    if (payloads)
      for (const payload of payloads) {
        this.elevatedPayload(payload)
      }
    return this
  }

  async estimatedMinimumFees(): Promise<TransactionFeesBigInt> {
    const tx = await this.dryRun()
    const requiredGas = transactionRequiredGas(tx)
    return {
      base: minTransactionFees.base,
      // eslint-disable-next-line unicorn/prefer-math-min-max
      gasLimit: requiredGas > minTransactionFees.gasLimit ? requiredGas : minTransactionFees.gasLimit,
      gasPrice: minTransactionFees.gasPrice,
      priority: minTransactionFees.priority,
    }
  }

  fees(fees: TransactionFeesBigInt) {
    this._fees = fees
    return this
  }

  payload(payload?: TPayload) {
    this._payloads.push(payload as TPayload)
    return this
  }

  payloads(payloads?: TPayload[]) {
    if (payloads)
      for (const payload of payloads) {
        if (payload !== null) {
          this.payload(payload)
        }
      }
    return this
  }

  range(blockRange: [number, number]) {
    if (blockRange.length !== 2) {
      throw new Error('Block range must be an array of two numbers')
    }
    this._blockRange = blockRange
    return this
  }

  async removeElevatedPayload(payload: AllowedBlockPayload) {
    const hash = await PayloadBuilder.hash(payload)
    const existingHashes = await PayloadBuilder.hashes(this._elevatedPayloads)

    // no async after this point to prevent changing _elevatedPayloads from other promise
    const existingPayloadIndex = existingHashes.indexOf(hash)
    if (existingPayloadIndex === -1) {
      throw new Error('Payload not found in the transaction')
    }
    this._elevatedPayloads = this._elevatedPayloads.filter((_, index) => index !== existingPayloadIndex)
    return this
  }

  async removePayload(payload: TPayload) {
    const hash = await PayloadBuilder.hash(payload)
    const existingHashes = await PayloadBuilder.hashes(this._payloads)

    // no async after this point to prevent changing _payloads from other promise
    const existingPayloadIndex = existingHashes.indexOf(hash)
    if (existingPayloadIndex === -1) {
      throw new Error('Payload not found in the transaction')
    }
    this._payloads = this._payloads.filter((_, index) => index !== existingPayloadIndex)
    return this
  }

  signer(signer?: AccountInstance) {
    if (signer) {
      this._signers.push(signer)
    }
    return this
  }

  signers(signers?: (AccountInstance | null)[]) {
    if (signers)
      for (const signer of signers) {
        if (signer !== null) {
          this.signer(signer)
        }
      }
    return this
  }
}
