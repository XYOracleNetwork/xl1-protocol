import type {
  Address, Hash, Hex, Promisable,
} from '@xylabs/sdk-js'
import {
  assertEx, BigIntToJsonZod, isDefined,
} from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { Payload, WithHashMeta } from '@xyo-network/payload-model'
import type {
  AllowedBlockPayload,
  AttoXL1,
  SignedHydratedTransaction, SignedHydratedTransactionWithHashMeta,
  Transfer,
  UnsignedHydratedTransaction,
} from '@xyo-network/xl1-protocol'
import {
  asXL1BlockNumber,
  TransferSchema,
} from '@xyo-network/xl1-protocol'

import type {
  DataLakeRunner,
  TransactionOptions,
  XyoConnection, XyoGatewayRunner,
  XyoSigner,
} from '../../provider/index.ts'
import type { ConfirmSubmittedTransactionOptions } from '../../transaction/index.ts'
import { buildUnsignedTransaction, confirmSubmittedTransaction } from '../../transaction/index.ts'

export class SimpleXyoGatewayRunner implements XyoGatewayRunner {
  private readonly _connection: XyoConnection
  private _dataLakes: (DataLakeRunner | null)[]
  private readonly _signer: XyoSigner

  constructor(connection: XyoConnection, signer: XyoSigner, dataLakes: DataLakeRunner[] = []) {
    this._connection = connection
    this._dataLakes = [...dataLakes]
    this._signer = signer
  }

  get connectionInstance(): XyoConnection {
    return this._connection
  }

  get dataLakes(): DataLakeRunner[] {
    throw new Error('Method [dataLakes] not implemented.')
  }

  get signerInstance(): XyoSigner {
    return this._signer
  }

  addDataLake(dataLake: DataLakeRunner): number {
    this._dataLakes.push(dataLake)
    return this._dataLakes.length - 1
  }

  async addPayloadsToChain(
    onChain: AllowedBlockPayload[],
    offChain: Payload[],
    options?: TransactionOptions,
  ): Promise<[Hash, SignedHydratedTransactionWithHashMeta]> {
    // Get chain providers
    const viewer = assertEx(this.connectionInstance.viewer, () => 'No viewer available on connection')

    // Resolve transaction options
    const {
      nbf, exp, chain, fees,
    } = options ?? {}
    const resolvedChainId = isDefined(chain) ? chain : await viewer.chainId()
    const resolvedNbf = asXL1BlockNumber(isDefined(nbf) ? nbf : await viewer.currentBlockNumber(), true)
    const resolvedExp = asXL1BlockNumber(isDefined(exp) ? exp : resolvedNbf + 10, true)

    // Build, sign, and broadcast the transaction
    const tx = await buildUnsignedTransaction(resolvedChainId, onChain, offChain, resolvedNbf, resolvedExp, await (await this.signer()).address(), fees)
    return await this.addTransactionToChain(tx)
  }

  async addTransactionToChain(tx: UnsignedHydratedTransaction): Promise<[Hash, SignedHydratedTransactionWithHashMeta]> {
    const connection = this.connectionInstance

    const signer = this.signerInstance
    const runner = assertEx(connection.runner, () => 'No runner available on connection')
    const signedTx = await signer.signTransaction(tx)
    await this.addPayloadsToDataLakes(signedTx[1])
    return [await runner.broadcastTransaction(
      [signedTx[0], signedTx[1]],
    ), signedTx]
  }

  async confirmSubmittedTransaction(txHash: Hash, options?: ConfirmSubmittedTransactionOptions): Promise<SignedHydratedTransaction> {
    return await confirmSubmittedTransaction(
      assertEx(this.connectionInstance.viewer, () => 'Connection viewer is undefined'),
      txHash,
      options,
    )
  }

  /** @deprecated use connectionInstance instead */
  connection(): Promisable<XyoConnection> {
    return this.connectionInstance
  }

  removeDataLake(index: number): void {
    this._dataLakes[index] = null
  }

  async send(to: Address, amount: AttoXL1, options?: TransactionOptions): Promise<Hash> {
    return await this.sendMany({ [to]: amount }, options)
  }

  async sendMany(transfers: Record<Address, AttoXL1>, options?: TransactionOptions): Promise<Hash> {
    const from = await (await this.signer()).address()
    const hexTransfers: Record<Address, Hex> = Object.fromEntries(
      Object.entries(transfers).map(([address, amount]) => ([
        address, BigIntToJsonZod.parse(amount),
      ])),
    )
    const transfer = new PayloadBuilder<Transfer>({ schema: TransferSchema }).fields({
      from,
      transfers: hexTransfers,
      epoch: Date.now(),
    }).build()
    const [hash] = await this.addPayloadsToChain([transfer], [], options)
    return hash
  }

  /** @deprecated use signerInstance instead */
  signer(): Promisable<XyoSigner> {
    return this.signerInstance
  }

  protected async addPayloadsToDataLakes(payloads: WithHashMeta<Payload>[]): Promise<void> {
    await Promise.all(this._dataLakes.map(async (dataLake) => {
      await Promise.all(payloads.map(async (payload) => {
        await dataLake?.set(payload._hash, payload)
      }))
    }))
  }
}
