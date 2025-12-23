import type { Hash } from '@xylabs/sdk-js'
import type { Payload, WithHashMeta } from '@xyo-network/payload-model'
import type {
  ChainId, SignedHydratedBlockWithHashMeta, XL1BlockNumber,
} from '@xyo-network/xl1-protocol'
import {
  type BlockViewer, BlockViewerMoniker, creatableProvider,
} from '@xyo-network/xl1-protocol-sdk'

import { JsonRpcBlockViewerMethods } from './JsonRpcBlockViewerMethods.ts'

@creatableProvider()
export class JsonRpcBlockViewer extends JsonRpcBlockViewerMethods implements BlockViewer {
  static readonly defaultMoniker = BlockViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [BlockViewerMoniker]

  async blockByHash(hash: Hash): Promise<SignedHydratedBlockWithHashMeta | null> {
    return (await this.blocksByHash(hash, 1))[0]
  }

  async blockByNumber(block: XL1BlockNumber): Promise<SignedHydratedBlockWithHashMeta | null> {
    return (await this.blocksByNumber(block, 1))[0]
  }

  async chainId(blockNumber: XL1BlockNumber | 'latest' = 'latest'): Promise<ChainId> {
    if (blockNumber === 'latest') {
      return (await this.currentBlock())[0].chain
    }
    return (await this.blocksByNumber(blockNumber, 1))[0][0].chain
  }

  async currentBlockHash(): Promise<Hash> {
    return (await this.currentBlock())[0]._hash
  }

  async currentBlockNumber(): Promise<XL1BlockNumber> {
    return (await this.currentBlock())[0].block
  }

  async payloadByHash(hash: Hash): Promise<WithHashMeta<Payload> | null> {
    return (await this.payloadsByHash([hash]))[0] ?? null
  }
}
