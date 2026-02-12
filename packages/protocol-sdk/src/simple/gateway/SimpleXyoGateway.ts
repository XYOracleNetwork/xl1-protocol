import type { Hash } from '@xylabs/sdk-js'
import {
  isAnyPayload, isHashMeta, type Payload, type WithHashMeta,
} from '@xyo-network/payload-model'
import type {
  DataLakesViewer,
  SignedHydratedBlockWithHashMeta,
  XyoConnection,
  XyoGateway,
} from '@xyo-network/xl1-protocol'
import {
  XyoConnectionMoniker, XyoGatewayMoniker,
  XyoSignerMoniker,
} from '@xyo-network/xl1-protocol'

import type { CreatableProviderParams } from '../../CreatableProvider/index.ts'
import { AbstractCreatableProvider } from '../../CreatableProvider/index.ts'

export interface SimpleXyoGatewayParams extends CreatableProviderParams {}

export class SimpleXyoGateway extends AbstractCreatableProvider<SimpleXyoGatewayParams> implements XyoGateway {
  static readonly defaultMoniker = XyoGatewayMoniker
  static readonly dependencies = [XyoConnectionMoniker, XyoSignerMoniker]
  static readonly monikers = [XyoGatewayMoniker]
  moniker = SimpleXyoGateway.defaultMoniker

  private _connection!: XyoConnection
  private _dataLakes?: DataLakesViewer

  get connection(): XyoConnection {
    return this._connection
  }

  get dataLakes() {
    return this._dataLakes
  }

  async blockByHash(hash: Hash): Promise<SignedHydratedBlockWithHashMeta | null> {
    const [block, payloads] = await this.connection.viewer?.block.blockByHash(hash) ?? [null, []]
    if (block !== null) {
      const missingHashes = block.payload_hashes.filter(h => !payloads.some(p => p._hash === h))
      const foundPayloads: Record<Hash, WithHashMeta<Payload>> = {}
      const dataLakes = this.dataLakes ? this.dataLakes.dataLakes : []
      for (const dataLake of dataLakes) {
        const found = (await dataLake.getMany(missingHashes)).filter(p => isAnyPayload(p) && isHashMeta(p) && missingHashes.includes(p._hash)) as WithHashMeta<Payload>[]
        for (const payload of found) {
          foundPayloads[payload._hash] = payload
        }
      }
      for (const [, payload] of Object.entries(foundPayloads)) {
        payloads.push(payload)
      }
    }
    return block ? [block, payloads] : null
  }

  override async createHandler() {
    await super.createHandler()
    this._connection = await this.locator.getInstance<XyoConnection>(XyoConnectionMoniker)
  }
}
