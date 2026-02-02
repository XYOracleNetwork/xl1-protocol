import type { Hash, Hex } from '@xylabs/sdk-js'
import { hexToBigInt, isDefined } from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type {
  Payload, Schema,
  WithHashMeta,
  WithStorageMeta,
} from '@xyo-network/payload-model'
import type {
  AllowedBlockPayload, BaseContext, ChainId, HydratedTransactionWithHashMeta, Transfer,
} from '@xyo-network/xl1-protocol'
import { isTransfer, XYO_ZERO_ADDRESS } from '@xyo-network/xl1-protocol'
import type {
  HydratedTransactionInstance, SignatureInstance,
  TransactionFeesInstance,
} from '@xyo-network/xl1-protocol-sdk'
import {
  transactionRequiredGas, tryExtractElevatedHashes, tryExtractElevatedHashesFromScript,
} from '@xyo-network/xl1-protocol-sdk'
import { validateTransaction } from '@xyo-network/xl1-validation'

import { FeesWrapper } from '../Fees.ts'
import { createSignatureWrappers } from '../lib/index.ts'

const sumTransfers = (payload: Transfer) => {
  let total = 0n
  for (let i of Object.values(payload.transfers)) {
    total += hexToBigInt(i ?? '00' as Hex)
  }
  return total
}

export interface HydratedTransactionWrapperContext extends BaseContext {
  chainId: ChainId
}

export class HydratedTransactionWrapper<T extends HydratedTransactionWithHashMeta> implements HydratedTransactionInstance<T> {
  data: T
  fees: TransactionFeesInstance

  protected context: HydratedTransactionWrapperContext
  protected payloadsCache: WithStorageMeta<Payload>[] = []

  private _signatureCache: SignatureInstance[] = []

  protected constructor(context: HydratedTransactionWrapperContext, data: T) {
    this.context = context
    this.data = data
    this.fees = new FeesWrapper(
      this.boundWitness.fees,
    )
  }

  get boundWitness(): T[0] {
    return this.data[0]
  }

  get elevatedPayloadCount(): number {
    const { script } = this.data[0]
    return script ? tryExtractElevatedHashesFromScript(script).length : 0
  }

  get elevatedPayloads() {
    return tryExtractElevatedHashes(this.data)
  }

  get externalPayloads(): Record<Hash, Schema | Payload> {
    const allPayloads = this.payloads
    const external: Record<Hash, Schema | Payload> = {}
    for (let i = 0; i < this.boundWitness.payload_hashes.length; i++) {
      const payloadHash = this.boundWitness.payload_hashes[i]
      const payload = allPayloads.find(p => p._hash === payloadHash)
      external[payloadHash] = isDefined(payload) ? payload : this.boundWitness.payload_schemas[i]
    }
    return external
  }

  get from() {
    return this.data[0].from
  }

  get payloadCount(): number {
    return this.payloadsCache.length
  }

  get payloads(): WithHashMeta<WithStorageMeta<T[1][number]>>[] {
    return [...this.payloadsCache]
  }

  get privateExternalPayloads(): Record<Hash, Schema> {
    const allPayloads = this.payloads
    const missing: Record<Hash, Schema> = {}
    for (let i = 0; i < this.boundWitness.payload_hashes.length; i++) {
      const payloadHash = this.boundWitness.payload_hashes[i]
      if (!allPayloads.some(p => p._hash === payloadHash)) {
        missing[payloadHash] = this.boundWitness.payload_schemas[i]
      }
    }
    return missing
  }

  // list all the payloads that are included in the transaction and are not elevated and found in the hydration
  get publicExternalPayloads(): Payload[] {
    const allPayloads = this.payloads
    const elevatedPayloads = this.elevatedPayloads
    return allPayloads.filter(p => !elevatedPayloads.some(ep => ep._hash === p._hash))
  }

  get signatureCount(): number {
    return this._signatureCache.length
  }

  get signatures(): SignatureInstance[] {
    return [...this._signatureCache]
  }

  static async parse<T extends HydratedTransactionWithHashMeta>(context: HydratedTransactionWrapperContext, transaction: T, validate = false): Promise<HydratedTransactionInstance<[T[0],
    T[1][number][]]>> {
    const wrapper = new HydratedTransactionWrapper<T>(
      context,
      transaction,
    )
    const parsed = await wrapper.parse()
    if (validate) {
      const errors = await wrapper.validate()
      if (errors.length > 0) {
        throw new Error(`Block validation failed: ${errors.join(', ')}`)
      }
    }
    return parsed
  }

  elevatedPayload(index: number): WithHashMeta<AllowedBlockPayload & T[1][number]> | undefined {
    return this.elevatedPayloads.at(index)
  }

  gasRequired(): bigint {
    return transactionRequiredGas(this.data)
  }

  payload(index: number): WithStorageMeta<Payload> | undefined {
    return this.payloads.at(index)
  }

  reward(): bigint {
    return this.payloadsCache.reduce((acc: bigint, payload) => acc + (
      isTransfer(payload)
        ? payload.from === XYO_ZERO_ADDRESS
          ? sumTransfers(payload)
          : 0n
        : 0n), 0n)
  }

  signature(index: number): SignatureInstance | undefined {
    return this._signatureCache[index]
  }

  async validate(): Promise<Error[]> {
    const errors: Error[] = [...(await Promise.all(this._signatureCache.map(signature => signature.validate()))).flat(),
      ...(await validateTransaction(this.context, this.data))]
    return errors
  }

  protected async parse(validate = false): Promise<HydratedTransactionInstance<[WithHashMeta<T[0]>, WithHashMeta<T[1][number]>[]]>> {
    const transactionPayloads = await PayloadBuilder.addStorageMeta(this.data[1])
    this._signatureCache = await createSignatureWrappers(this.data[0])
    for (const payload of transactionPayloads) {
      this.payloadsCache.push(payload)
    }
    if (validate) {
      await this.validate()
    }
    return this
  }
}
