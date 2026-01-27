import type { Hash } from '@xylabs/sdk-js'
import {
  asHash, assertEx, isDefined,
} from '@xylabs/sdk-js'
import type { TimeDomain, TimePayload } from '@xyo-network/xl1-protocol'
import {
  asTimePayload, asXL1BlockNumber, TimeSchema,
} from '@xyo-network/xl1-protocol'
import type { Provider } from 'ethers'

import type { CreatableProviderParams } from '../../CreatableProvider/index.ts'
import { AbstractCreatableProvider, creatableProvider } from '../../CreatableProvider/index.ts'
import {
  type BlockViewer, BlockViewerMoniker, type TimeSyncViewer, TimeSyncViewerMoniker,
} from '../../model/index.ts'

export interface SimpleTimeSyncViewerParams extends CreatableProviderParams {
  ethProvider?: Provider
}

@creatableProvider()
export class SimpleTimeSyncViewer extends AbstractCreatableProvider<SimpleTimeSyncViewerParams> implements TimeSyncViewer {
  static readonly defaultMoniker = TimeSyncViewerMoniker
  static readonly dependencies = [BlockViewerMoniker]
  static readonly monikers = [TimeSyncViewerMoniker]
  moniker = SimpleTimeSyncViewer.defaultMoniker

  private _blockViewer?: BlockViewer

  protected get blockViewer() {
    return this._blockViewer!
  }

  protected get ethProvider() {
    return this.params.ethProvider
  }

  async convertTime(fromDomain: TimeDomain, toDomain: TimeDomain, from: number): Promise<number> {
    switch (fromDomain) {
      case 'xl1': {
        const [block, payloads] = assertEx(await this.blockViewer.blockByNumber(asXL1BlockNumber(from, true)), () => 'Block not found')
        const timeSchemaIndex = block.payload_schemas.indexOf(TimeSchema)
        const hash = timeSchemaIndex === -1 ? undefined : block.payload_hashes[timeSchemaIndex]
        const timePayload = asTimePayload(isDefined(hash) ? payloads.find(p => p._hash === hash) : undefined)
        if (timePayload === undefined) return 0
        switch (toDomain) {
          case 'xl1': {
            return timePayload.xl1 ?? 0
          }
          case 'epoch': {
            return timePayload.epoch ?? 0
          }
          case 'ethereum': {
            return timePayload.ethereum ?? 0
          }
          default: {
            throw new Error(`Unsupported to toDomain: ${toDomain}`)
          }
        }
      }
      default: {
        throw new Error(`Unsupported from fromDomain: ${fromDomain}`)
      }
    }
  }

  override async createHandler() {
    await super.createHandler()
    this._blockViewer = await this.locator.getInstance<BlockViewer>(BlockViewerMoniker)
  }

  async currentTime(domain: TimeDomain): Promise<[string, number]> {
    switch (domain) {
      case 'xl1': {
        return ['xl1', (await this.blockViewer.currentBlock())?.[0].block ?? -1]
      }
      case 'epoch': {
        return ['epoch', Date.now()]
      }
      case 'ethereum': {
        return ['ethereum', (await this.ethProvider?.getBlockNumber()) ?? 0]
      }
      default: {
        throw new Error(`Unknown time domain: ${domain}`)
      }
    }
  }

  async currentTimeAndHash(domain: TimeDomain): Promise<[number, Hash | null]> {
    switch (domain) {
      case 'xl1': {
        const [head] = await this.blockViewer.currentBlock()
        return [head.block, head._hash]
      }
      case 'epoch': {
        return [Date.now(), null]
      }
      case 'ethereum': {
        const provider = assertEx(this.ethProvider, () => 'Ethereum provider not configured')
        const blockNumber = (await provider.getBlockNumber()) ?? 0
        const block = await provider.getBlock(blockNumber)
        const blockHash = asHash(assertEx(block?.hash, () => 'Block hash not found'), true)
        return [blockNumber, blockHash]
      }
      default: {
        throw new Error(`Unknown time domain: ${domain}`)
      }
    }
  }

  async currentTimePayload(): Promise<TimePayload> {
    const [xl1, xl1Hash] = await this.currentTimeAndHash('xl1')
    const timePayload: TimePayload = {
      schema: TimeSchema,
      // this is for the previous block
      xl1,
      // this is for the previous block
      xl1Hash: assertEx(xl1Hash, () => 'No xl1 hash available from time sync service'),
      epoch: Date.now(),
    }
    if (isDefined(this.ethProvider)) {
      const [ethereum, ethHashOrNull] = await this.currentTimeAndHash('ethereum')
      const ethereumHash = asHash(ethHashOrNull, () => 'No ethereum hash available from time sync service')
      timePayload.ethereum = ethereum
      timePayload.ethereumHash = ethereumHash
    }
    return timePayload
  }
}
