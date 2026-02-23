import {
  type Address, assertEx, exists, Hash,
} from '@xylabs/sdk-js'
import {
  BoundWitnessSchema, Payload, WithStorageMeta,
} from '@xyo-network/sdk-js'
import {
  BlockViewer,
  BlockViewerMoniker,
  isTransactionBoundWitnessWithStorageMeta,
  PayloadMapRead,
  Position, SignedHydratedTransactionWithHashMeta, TransactionViewer, TransactionViewerMoniker,
  XL1BlockNumber,
} from '@xyo-network/xl1-protocol'

import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'
import { tryHydrateTransaction } from '../../transaction/index.ts'
import { HydratedCache } from '../../utils/index.ts'

export interface SimpleTransactionViewerParams extends CreatableProviderParams {
  chainId?: Address
  minWithdrawalBlocks?: number
  positions: Position[]
}

@creatableProvider()
export class SimpleTransactionViewer extends AbstractCreatableProvider<SimpleTransactionViewerParams> implements TransactionViewer {
  static readonly defaultMoniker = TransactionViewerMoniker
  static readonly dependencies = [BlockViewerMoniker]
  static readonly monikers = [TransactionViewerMoniker]
  moniker = SimpleTransactionViewer.defaultMoniker

  private _blockViewer!: BlockViewer
  private _finalizedPayloadMap!: PayloadMapRead<WithStorageMeta<Payload>>
  private _signedHydratedTransactionCache?: HydratedCache<SignedHydratedTransactionWithHashMeta>

  protected get blockViewer() {
    return this._blockViewer
  }

  async byBlockHashAndIndex(blockHash: Hash, transactionIndex: number): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.spanAsync('transactionByBlockHashAndIndex', async () => {
      assertEx(transactionIndex >= 0, () => 'transactionIndex must be greater than or equal to 0')
      try {
        const block = await this.blockViewer.blockByHash(blockHash)
        if (!block) return null
        const blockBoundWitnessIndexes = block[0].payload_schemas.map((schema, index) => schema === BoundWitnessSchema ? index : undefined).filter(exists)
        const blockBoundWitnessHashes = new Set(blockBoundWitnessIndexes.map(index => block[0].payload_hashes[index]))
        const blockBoundWitnesses = block[1].filter(payload => blockBoundWitnessHashes.has(payload._hash) || blockBoundWitnessHashes.has(payload._dataHash))
        const blockTransactionBoundWitnesses = blockBoundWitnesses.filter(isTransactionBoundWitnessWithStorageMeta)
        const transaction = blockTransactionBoundWitnesses.at(transactionIndex)
        if (!transaction) return null
        return await this.transactionByHash(transaction._hash)
      } catch {
        return null
      }
    }, this.context)
  }

  async byBlockNumberAndIndex(blockNumber: XL1BlockNumber, transactionIndex: number): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.spanAsync('transactionByBlockNumberAndIndex', async () => {
      try {
        const block = await this.blockViewer.blockByNumber(blockNumber)
        if (!block) return null
        return await this.transactionByBlockHashAndIndex(block[0]._hash, transactionIndex)
      } catch {
        return null
      }
    }, this.context)
  }

  async byHash(transactionHash: Hash): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.spanAsync('transactionByHash', async () => {
      try {
        const cache = this.getHydratedTransactionCache()
        const hydratedTransaction = await cache.get(transactionHash)
        return hydratedTransaction ?? null
      } catch {
        return null
      }
    }, this.context)
  }

  async transactionByBlockHashAndIndex(blockHash: Hash, transactionIndex: number = 0): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.byBlockHashAndIndex(blockHash, transactionIndex)
  }

  async transactionByBlockNumberAndIndex(blockNumber: XL1BlockNumber, transactionIndex: number = 0): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.byBlockNumberAndIndex(blockNumber, transactionIndex)
  }

  async transactionByHash(transactionHash: Hash): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.byHash(transactionHash)
  }

  protected getHydratedTransactionCache(): HydratedCache<SignedHydratedTransactionWithHashMeta> {
    if (this._signedHydratedTransactionCache) return this._signedHydratedTransactionCache
    const chainMap = this._finalizedPayloadMap
    this._signedHydratedTransactionCache = new HydratedCache<SignedHydratedTransactionWithHashMeta>({ ...this.context, chainMap }, tryHydrateTransaction, 200)
    return this._signedHydratedTransactionCache
  }
}
