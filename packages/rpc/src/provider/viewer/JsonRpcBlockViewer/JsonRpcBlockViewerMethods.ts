import { type Hash, isDefined } from '@xylabs/sdk-js'
import {
  asAnyPayload,
  asHashMeta, isAnyPayload, type Payload, type WithHashMeta,
} from '@xyo-network/payload-model'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import type {
  BlockRate, BlockViewerMethods,
  Count, DataLakeViewer, SignedHydratedBlockWithHashMeta, StepIndex, TimeDurations, XL1BlockNumber, XL1BlockRange,
} from '@xyo-network/xl1-protocol'
import {
  asSignedHydratedBlockWithHashMeta, BlockViewerMoniker, DataLakeViewerMoniker,
} from '@xyo-network/xl1-protocol'

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
    return await Promise.all(result.map(async block => await this.addDataLakePayloadsToBlock(block)))
  }

  async blocksByNumber(block: XL1BlockNumber, limit?: number): Promise<SignedHydratedBlockWithHashMeta[]> {
    const result = await this.transport.sendRequest(
      'blockViewer_blocksByNumber',
      isDefined(limit) ? [block, limit] : [block],
    )
    return await Promise.all(result.map(async block => await this.addDataLakePayloadsToBlock(block)))
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
    return await this.addDataLakePayloadsToBlock(result)
  }

  async payloadsByHash(hashes: Hash[]): Promise<WithHashMeta<Payload>[]> {
    const result = await this.transport.sendRequest(
      'blockViewer_payloadsByHash',
      [hashes],
    )
    return await this.addDataLakePayloadsToPayloads(hashes, result.map(p => asHashMeta(p, true)).map(p => asAnyPayload(p, { required: true })))
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
    toleranceMs?: number,
    maxAttempts?: number,
  ): Promise<BlockRate> {
    return await this.transport.sendRequest(
      'blockViewer_timeDurationRate',
      [timeConfig, startBlockNumber, timeUnit, toleranceMs, maxAttempts],
    )
  }

  protected async addDataLakePayloadsToBlock(block: SignedHydratedBlockWithHashMeta): Promise<SignedHydratedBlockWithHashMeta> {
    const dataLakeViewer = this.dataLakeViewer
    if (!dataLakeViewer) return block
    const missingPayloadHashes = block[0].payload_hashes.filter(hash => !block[1].some(p => p._hash === hash))
    const payloadsFromDataLake = await PayloadBuilder.addHashMeta((await dataLakeViewer.get(missingPayloadHashes)).filter(isAnyPayload))
    return asSignedHydratedBlockWithHashMeta([block[0], [...block[1], ...payloadsFromDataLake]], true)
  }

  protected async addDataLakePayloadsToPayloads(hashes: Hash[], payloads: WithHashMeta<Payload>[]): Promise<WithHashMeta<Payload>[]> {
    const dataLakeViewer = this.dataLakeViewer
    if (!dataLakeViewer) return payloads
    const missingPayloadHashes = hashes.filter(hash => !payloads.some(p => p._hash === hash))
    const payloadsFromDataLake = await PayloadBuilder.addHashMeta(
      await PayloadBuilder.addHashMeta((await dataLakeViewer.get(missingPayloadHashes)).filter(isAnyPayload)),
    )
    return [...payloads, ...payloadsFromDataLake]
  }

  protected schemas() {
    return BlockViewerRpcSchemas
  }
}
