import { type Hash, isDefined } from '@xylabs/sdk-js'
import { type Payload, type WithHashMeta } from '@xyo-network/sdk-js'
import type {
  BlockViewerMethods, DataLakeViewer, SignedHydratedBlockWithHashMeta, XL1BlockNumber,
} from '@xyo-network/xl1-protocol'
import { BlockViewerMoniker, DataLakeViewerMoniker } from '@xyo-network/xl1-protocol'
import { addDataLakePayloads, addDataLakePayloadsToPayloads } from '@xyo-network/xl1-protocol-sdk'

import { BlockViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcBlockViewerMethods extends AbstractJsonRpcViewer<BlockViewerRpcSchemas> implements BlockViewerMethods {
  readonly moniker = BlockViewerMoniker

  protected dataLakeViewer?: DataLakeViewer

  async blocksByHash(hash: Hash, limit?: number): Promise<SignedHydratedBlockWithHashMeta[]> {
    const result = await this.transport.sendRequest(
      'blockViewer_blocksByHash',
      isDefined(limit) ? [hash, limit] : [hash],
    )
    return await Promise.all(result.map(async block => (await addDataLakePayloads(block, this.dataLakeViewer))[0]))
  }

  async blocksByNumber(block: XL1BlockNumber, limit?: number): Promise<SignedHydratedBlockWithHashMeta[]> {
    const result = await this.transport.sendRequest(
      'blockViewer_blocksByNumber',
      isDefined(limit) ? [block, limit] : [block],
    )
    return await Promise.all(result.map(async block => (await addDataLakePayloads(block, this.dataLakeViewer))[0]))
  }

  override async createHandler() {
    await super.createHandler()
    this.dataLakeViewer = await this.locator.tryGetInstance<DataLakeViewer>(DataLakeViewerMoniker)
  }

  async currentBlock(): Promise<SignedHydratedBlockWithHashMeta> {
    const result = await this.transport.sendRequest(
      'blockViewer_currentBlock',
      [],
    )
    return (await addDataLakePayloads(result, this.dataLakeViewer))[0]
  }

  async payloadsByHash(hashes: Hash[]): Promise<WithHashMeta<Payload>[]> {
    const result = await this.transport.sendRequest(
      'blockViewer_payloadsByHash',
      [hashes],
    )
    return (await addDataLakePayloadsToPayloads(hashes, result, this.dataLakeViewer))[0]
  }

  protected schemas() {
    return BlockViewerRpcSchemas
  }
}
