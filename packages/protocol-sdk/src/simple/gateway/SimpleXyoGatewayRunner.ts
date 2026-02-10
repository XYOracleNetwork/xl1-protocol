import type {
  Address, Hash, Hex,
} from '@xylabs/sdk-js'
import {
  assertEx, BigIntToJsonZod, isDefined,
} from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { Payload, WithHashMeta } from '@xyo-network/payload-model'
import type {
  AllowedBlockPayload, AttoXL1, ConfirmSubmittedTransactionOptions,
  DataLakeRunner, DataLakesRunner, SignedHydratedTransaction, SignedHydratedTransactionWithHashMeta, TransactionOptions, Transfer, UnsignedHydratedTransaction,
  XyoConnection, XyoGatewayRunner, XyoSigner,
} from '@xyo-network/xl1-protocol'
import {
  asXL1BlockNumber, TransferSchema,
  XyoConnectionMoniker, XyoGatewayMoniker, XyoGatewayRunnerMoniker, XyoSignerMoniker,
} from '@xyo-network/xl1-protocol'

import type { CreatableProviderParams } from '../../CreatableProvider/index.ts'
import { AbstractCreatableProvider } from '../../CreatableProvider/index.ts'
import { buildUnsignedTransaction, confirmSubmittedTransaction } from '../../transaction/index.ts'

export interface SimpleXyoGatewayRunnerParams extends CreatableProviderParams {
  dataLakes?: DataLakeRunner[]
}

export class SimpleXyoGatewayRunner extends AbstractCreatableProvider<SimpleXyoGatewayRunnerParams> implements XyoGatewayRunner {
  static readonly defaultMoniker = XyoGatewayRunnerMoniker
  static readonly dependencies = [XyoConnectionMoniker, XyoSignerMoniker]
  static readonly monikers = [XyoGatewayRunnerMoniker, XyoGatewayMoniker]
  moniker = SimpleXyoGatewayRunner.defaultMoniker

  private _connection!: XyoConnection
  private _dataLakes?: DataLakesRunner
  private _signer!: XyoSigner

  get connection(): XyoConnection {
    return this._connection
  }

  get dataLakes(): DataLakesRunner | undefined {
    return this._dataLakes
  }

  get signer(): XyoSigner {
    return this._signer
  }

  async addPayloadsToChain(
    onChain: AllowedBlockPayload[],
    offChain: Payload[],
    options?: TransactionOptions,
  ): Promise<[Hash, SignedHydratedTransactionWithHashMeta]> {
    // Get chain providers
    const viewer = assertEx(this.connection.viewer, () => 'No viewer available on connection')

    // Resolve transaction options
    const {
      nbf, exp, chain, fees,
    } = options ?? {}
    const resolvedChainId = isDefined(chain) ? chain : await viewer.chainId()
    const resolvedNbf = asXL1BlockNumber(isDefined(nbf) ? nbf : await viewer.currentBlockNumber(), true)
    const resolvedExp = asXL1BlockNumber(isDefined(exp) ? exp : resolvedNbf + 10, true)

    // Build, sign, and broadcast the transaction
    const tx = await buildUnsignedTransaction(resolvedChainId, onChain, offChain, resolvedNbf, resolvedExp, await this.signer.address(), fees)
    return await this.addTransactionToChain(tx, await PayloadBuilder.addHashMeta(offChain))
  }

  async addTransactionToChain(tx: UnsignedHydratedTransaction, offChain?: WithHashMeta<Payload>[]): Promise<[Hash, SignedHydratedTransactionWithHashMeta]> {
    const connection = this.connection

    const signer = this.signer
    const runner = assertEx(connection.runner, () => 'No runner available on connection')
    const signedTx: SignedHydratedTransactionWithHashMeta = await signer.signTransaction(tx)
    await this.addPayloadsToDataLakes([...signedTx[1], ...(offChain ?? []), signedTx[0]])
    return [await runner.broadcastTransaction(
      [signedTx[0], signedTx[1]],
    ), signedTx]
  }

  async confirmSubmittedTransaction(txHash: Hash, options?: ConfirmSubmittedTransactionOptions): Promise<SignedHydratedTransaction> {
    return await confirmSubmittedTransaction(
      assertEx(this.connection.viewer, () => 'Connection viewer is undefined'),
      txHash,
      options,
    )
  }

  override async createHandler() {
    await super.createHandler()
    this._connection = await this.locator.getInstance<XyoConnection>(XyoConnectionMoniker)
    this._signer = await this.locator.getInstance<XyoSigner>(XyoSignerMoniker)
  }

  async send(to: Address, amount: AttoXL1, options?: TransactionOptions): Promise<Hash> {
    return await this.sendMany({ [to]: amount }, options)
  }

  async sendMany(transfers: Record<Address, AttoXL1>, options?: TransactionOptions): Promise<Hash> {
    const from = await this.signer.address()
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

  protected async addPayloadsToDataLakes(payloads: WithHashMeta<Payload>[]): Promise<void> {
    const dataLakes = this.dataLakes?.dataLakes ?? []
    await Promise.all(dataLakes.map(async (dataLake) => {
      await Promise.all(payloads.map(async (payload) => {
        await dataLake?.set(payload._hash, payload)
      }))
    }))
  }
}
