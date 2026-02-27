import type { Hash } from '@xylabs/sdk-js'
import {
  FinalizationViewer,
  FinalizationViewerMoniker,
  SignedBlockBoundWitnessWithHashMeta,
  type XL1BlockNumber,
} from '@xyo-network/xl1-protocol'
import { creatableProvider } from '@xyo-network/xl1-protocol-sdk'

import { JsonRpcFinalizationViewerMethods } from './JsonRpcFinalizationViewerMethods.ts'

@creatableProvider()
export class JsonRpcFinalizationViewer extends JsonRpcFinalizationViewerMethods implements FinalizationViewer {
  static readonly defaultMoniker = FinalizationViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [FinalizationViewerMoniker]

  async chainId() {
    return (await this.headBlock()).chain
  }

  async headBlock(): Promise<SignedBlockBoundWitnessWithHashMeta> {
    return (await this.head())[0]
  }

  async headHash(): Promise<Hash> {
    return (await this.head())[0]._hash
  }

  async headNumber(): Promise<XL1BlockNumber> {
    return (await this.head())[0].block
  }
}
