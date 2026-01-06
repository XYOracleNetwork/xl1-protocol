import { type Hash, isDefined } from '@xylabs/sdk-js'
import {
  asAnyPayload,
  asHashMeta, type Payload, type WithHashMeta,
} from '@xyo-network/payload-model'
import type {
  BlockRate, Count, SignedHydratedBlockWithHashMeta, StepIndex, TimeDurations, XL1BlockNumber, XL1BlockRange,
} from '@xyo-network/xl1-protocol'
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

  async rate(range: XL1BlockRange, timeUnit?: keyof TimeDurations): Promise<BlockRate> {
    return await this.transport.sendRequest(
      'blockViewer_rate',
      [range, timeUnit],
    )
  }

  async stepSizeRate(start: XL1BlockNumber, stepSizeIndex: StepIndex, count?: Count, timeUnit?: keyof TimeDurations): Promise<BlockRate> {
    return await this.transport.sendRequest(
      'blockViewer_stepSizeRate',
      [start, stepSizeIndex, count, timeUnit],
    )
  }

  async timeDurationRate(
    timeConfig: Record<keyof TimeDurations, number>,
    startBlockNumber?: XL1BlockNumber,
    timeUnit?: keyof TimeDurations,
  ): Promise<BlockRate> {
    return await this.transport.sendRequest(
      'blockViewer_timeDurationRate',
      [timeConfig, startBlockNumber, timeUnit],
    )
  }

  protected schemas() {
    return BlockViewerRpcSchemas
  }
}
