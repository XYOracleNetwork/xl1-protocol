import {
  assertEx, exists, type Hash,
} from '@xylabs/sdk-js'
import { BoundWitnessSchema } from '@xyo-network/sdk-js'
import type {
  BlockViewer, DataLakeViewer, TransactionViewer, XL1BlockNumber,
} from '@xyo-network/xl1-protocol'
import {
  BlockViewerMoniker, DataLakeViewerMoniker, isTransactionBoundWitnessWithHashMeta, TransactionViewerMoniker,
} from '@xyo-network/xl1-protocol'
import { addDataLakePayloads, creatableProvider } from '@xyo-network/xl1-protocol-sdk'

import { TransactionViewerRpcSchemas } from '../../../index-node.ts'
import { AbstractJsonRpcViewer, JsonRpcViewerParams } from '../JsonRpcViewer.ts'

export interface JsonRpcTransactionViewerParams extends JsonRpcViewerParams<typeof TransactionViewerRpcSchemas> {

}

@creatableProvider()
export class JsonRpcTransactionViewer extends AbstractJsonRpcViewer<TransactionViewerRpcSchemas, JsonRpcTransactionViewerParams> implements TransactionViewer {
  static readonly defaultMoniker = TransactionViewerMoniker

  static readonly dependencies = [
    BlockViewerMoniker,
  ]

  static readonly monikers = [TransactionViewerMoniker]

  moniker = JsonRpcTransactionViewer.defaultMoniker

  protected dataLakeViewer?: DataLakeViewer

  private _blockViewer?: BlockViewer

  protected get blockViewer() {
    return this._blockViewer!
  }

  async byBlockHashAndIndex(blockHash: Hash, transactionIndex: number) {
    return await this.spanAsync('byBlockHashAndIndex', async () => {
      assertEx(transactionIndex >= 0, () => 'transactionIndex must be greater than or equal to 0')
      try {
        const block = await this.blockViewer.blockByHash(blockHash)
        if (!block) return null
        const blockBoundWitnessIndexes = block[0].payload_schemas.map((schema, index) => schema === BoundWitnessSchema ? index : undefined).filter(exists)
        const blockBoundWitnessHashes = new Set(blockBoundWitnessIndexes.map(index => block[0].payload_hashes[index]))
        const blockBoundWitnesses = block[1].filter(payload => blockBoundWitnessHashes.has(payload._hash) || blockBoundWitnessHashes.has(payload._dataHash))
        const blockTransactionBoundWitnesses = blockBoundWitnesses.filter(isTransactionBoundWitnessWithHashMeta)
        const transaction = blockTransactionBoundWitnesses.at(transactionIndex)
        if (!transaction) return null
        return await this.byHash(transaction._hash)
      } catch {
        return null
      }
    }, this.context)
  }

  async byBlockNumberAndIndex(blockNumber: XL1BlockNumber, transactionIndex: number) {
    return await this.spanAsync('transactionByBlockNumberAndIndex', async () => {
      try {
        const block = await this.blockViewer.blockByNumber(blockNumber)
        if (!block) return null
        return await this.byBlockHashAndIndex(block[0]._hash, transactionIndex)
      } catch {
        return null
      }
    }, this.context)
  }

  async byHash(transactionHash: Hash) {
    const result = (await this.transport.sendRequest('transactionViewer_byHash', [transactionHash]))
    return result ? (await addDataLakePayloads(result, this.dataLakeViewer))[0] : null
  }

  override async createHandler() {
    await super.createHandler()
    this._blockViewer = await this.locator.getInstance<BlockViewer>(BlockViewerMoniker)
    this.dataLakeViewer = await this.locator.tryGetInstance<DataLakeViewer>(DataLakeViewerMoniker)
  }

  async transactionByBlockHashAndIndex(blockHash: Hash, transactionIndex: number) {
    const result = (await this.transport.sendRequest('transactionViewer_transactionByBlockHashAndIndex', [blockHash, transactionIndex]))
    return result ? (await addDataLakePayloads(result, this.dataLakeViewer))[0] : null
  }

  async transactionByBlockNumberAndIndex(blockNumber: number, transactionIndex: number) {
    const result = (await this.transport.sendRequest('transactionViewer_transactionByBlockNumberAndIndex', [blockNumber, transactionIndex]))
    return result ? (await addDataLakePayloads(result, this.dataLakeViewer))[0] : null
  }

  async transactionByHash(transactionHash: Hash) {
    const result = (await this.transport.sendRequest('transactionViewer_transactionByHash', [transactionHash]))
    return result ? (await addDataLakePayloads(result, this.dataLakeViewer))[0] : null
  }

  protected schemas() {
    return TransactionViewerRpcSchemas
  }
}
