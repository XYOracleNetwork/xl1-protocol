import { type Hash, isDefined } from '@xylabs/sdk-js'
import {
  asAnyPayload,
  asHashMeta, type Payload, type WithHashMeta,
} from '@xyo-network/payload-model'
import type { SignedHydratedBlockWithHashMeta, XL1BlockNumber } from '@xyo-network/xl1-protocol'
import { type BlockViewerMethods, BlockViewerMoniker } from '@xyo-network/xl1-protocol-sdk'

import { BlockViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcBlockViewerMethods extends AbstractJsonRpcViewer<BlockViewerRpcSchemas> implements BlockViewerMethods {
  readonly moniker = BlockViewerMoniker
  async blocksByHash(hash: Hash, limit?: number): Promise<SignedHydratedBlockWithHashMeta[]> {
    const result = await this.transport.sendRequest(
      'blockViewer_blocksByHash',
      isDefined(limit) ? [hash, limit] : [hash],
    )
    return result
  }

  async blocksByNumber(block: XL1BlockNumber, limit?: number): Promise<SignedHydratedBlockWithHashMeta[]> {
    const result = await this.transport.sendRequest(
      'blockViewer_blocksByNumber',
      isDefined(limit) ? [block, limit] : [block],
    )
    return result
  }

  async currentBlock(): Promise<SignedHydratedBlockWithHashMeta> {
    const result = await this.transport.sendRequest(
      'blockViewer_currentBlock',
      [],
    )
    return result
  }

  async payloadsByHash(hashes: Hash[]): Promise<WithHashMeta<Payload>[]> {
    const result = await this.transport.sendRequest(
      'blockViewer_payloadsByHash',
      [hashes],
    )
    return result.map(p => asHashMeta(p, true)).map(p => asAnyPayload(p, { required: true }))
  }

  protected schemas() {
    return BlockViewerRpcSchemas
  }
}
