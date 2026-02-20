import { type Hash, isNull } from '@xylabs/sdk-js'
import { isAnyPayload, PayloadBuilder } from '@xyo-network/sdk-js'
import type {
  DataLakeViewer,
  SignedHydratedBlockWithHashMeta, SignedHydratedTransaction, XL1BlockNumber,
} from '@xyo-network/xl1-protocol'
import { DataLakeViewerMoniker } from '@xyo-network/xl1-protocol'

import { JsonRpcXyoViewer } from './JsonRpcXyoViewer.ts'

export class JsonRpcViewerWithDataLake extends JsonRpcXyoViewer {
  protected dataLakeViewer: DataLakeViewer | undefined

  override async blocksByHash(hash: Hash, limit?: number): Promise<SignedHydratedBlockWithHashMeta[]> {
    const blocks = await super.blocksByHash(hash, limit)
    return await Promise.all(blocks.map(async block => await this.addDataLakePayloadsToBlock(block)))
  }

  override async blocksByNumber(blockNumber: XL1BlockNumber, limit?: number): Promise<SignedHydratedBlockWithHashMeta[]> {
    const blocks = await super.blocksByNumber(blockNumber, limit)
    return await Promise.all(blocks.map(async block => await this.addDataLakePayloadsToBlock(block)))
  }

  override async createHandler() {
    await super.createHandler()
    this.dataLakeViewer = await this.locator.tryGetInstance<DataLakeViewer>(DataLakeViewerMoniker)
  }

  override async transactionByHash(hash: Hash): Promise<SignedHydratedTransaction | null> {
    const transaction = await super.transactionByHash(hash)
    if (!this.dataLakeViewer) return transaction

    return isNull(transaction) ? transaction : await this.addDataLakePayloadsToTransaction(transaction)
  }

  protected async addDataLakePayloadsToBlock(block: SignedHydratedBlockWithHashMeta): Promise<SignedHydratedBlockWithHashMeta> {
    const dataLakeViewer = this.dataLakeViewer
    if (!dataLakeViewer) return block
    const missingPayloadHashes = block[0].payload_hashes.filter(hash => !block[1].some(p => p._hash === hash))
    if (missingPayloadHashes.length === 0) return block
    const payloadsFromDataLake = await PayloadBuilder.addHashMeta((await dataLakeViewer.get(missingPayloadHashes)).filter(isAnyPayload))
    return [block[0], [...block[1], ...payloadsFromDataLake]]
  }

  protected async addDataLakePayloadsToTransaction(transaction: SignedHydratedTransaction): Promise<SignedHydratedTransaction> {
    const dataLakeViewer = this.dataLakeViewer
    if (!dataLakeViewer) return transaction
    const payloadsWithHashMeta = await PayloadBuilder.addHashMeta(transaction[1])
    const missingPayloadHashes = transaction[0].payload_hashes.filter(hash => !payloadsWithHashMeta.some(p => p._hash === hash))
    if (missingPayloadHashes.length === 0) return transaction
    const payloadsFromDataLake = await PayloadBuilder.addHashMeta((await dataLakeViewer.get(missingPayloadHashes)).filter(isAnyPayload))
    return [transaction[0], [...transaction[1], ...payloadsFromDataLake]]
  }
}
