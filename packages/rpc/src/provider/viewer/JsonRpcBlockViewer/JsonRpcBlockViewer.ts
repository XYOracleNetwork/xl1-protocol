import type { Hash } from '@xylabs/sdk-js'
import type { Payload, WithHashMeta } from '@xyo-network/payload-model'
import {
  BlockRate,
  type BlockViewer,
  BlockViewerMoniker,
  type ChainId,
  Count,
  type SignedHydratedBlockWithHashMeta,
  StepIndex,
  TimeDurations,
  type XL1BlockNumber,
  XL1BlockRange,
} from '@xyo-network/xl1-protocol'
import {
  calculateBlockRate, calculateStepSizeRate, calculateTimeRate, creatableProvider,
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

  async rate(range: XL1BlockRange, timeUnit?: keyof TimeDurations): Promise<BlockRate> {
    return await calculateBlockRate(this, range, timeUnit)
  }

  async stepSizeRate(start: XL1BlockNumber, stepSizeIndex: StepIndex, count?: Count, timeUnit?: keyof TimeDurations): Promise<BlockRate> {
    return await calculateStepSizeRate(this, start, stepSizeIndex, count, timeUnit)
  }

  async timeDurationRate(
    timeConfig: Record<keyof TimeDurations, number>,
    startBlockNumber?: XL1BlockNumber,
    timeUnit?: keyof TimeDurations,
    toleranceMs?: number,
    maxAttempts?: number,
  ): Promise<BlockRate> {
    return await calculateTimeRate(this, timeConfig, startBlockNumber, timeUnit, toleranceMs, maxAttempts)
  }
}
